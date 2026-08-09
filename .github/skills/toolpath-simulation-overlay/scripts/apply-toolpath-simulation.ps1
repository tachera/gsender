[CmdletBinding()]
param()

$ErrorActionPreference = 'Stop'

$skillDirectory = Split-Path -Parent $PSScriptRoot
$patchPath = Join-Path $skillDirectory 'assets\toolpath-simulation.patch'

if (-not (Test-Path $patchPath)) {
    throw "Toolpath simulation patch was not found: $patchPath"
}

$repositoryRoot = & git -C $PSScriptRoot rev-parse --show-toplevel
$gitExitCode = $LASTEXITCODE
$repositoryRoot = ($repositoryRoot | Select-Object -First 1).Trim()

if ($gitExitCode -ne 0 -or -not $repositoryRoot) {
    throw 'Run this helper from within a Git checkout of gSender.'
}

$visualizerPath = Join-Path $repositoryRoot 'src\app\src\features\Visualizer\Visualizer.jsx'
$installedMarkers = @(
    'TOOLPATH_SIMULATION_MIN_DURATION_MS',
    'startToolpathSimulation',
    'resetToolpathSimulation',
    'animateSimulationToolChange',
    'setSimulationMaterialPreview',
    'getSimulationMaterialCutData',
    'absolute bottom-3 right-3 z-10 flex gap-2'
)

if (Test-Path $visualizerPath) {
    $visualizerContent = Get-Content -LiteralPath $visualizerPath -Raw
    $isInstalled = $installedMarkers | ForEach-Object {
        $visualizerContent.Contains($_)
    } | Where-Object { -not $_ }

    if (-not $isInstalled) {
        Write-Host 'Toolpath simulation overlay is already applied.'
        return
    }
}

# A successful reverse check means the exact overlay is already present.
& git -C $repositoryRoot apply --reverse --check $patchPath 2>$null
if ($LASTEXITCODE -eq 0) {
    Write-Host 'Toolpath simulation overlay is already applied.'
    return
}

& git -C $repositoryRoot apply --check $patchPath
if ($LASTEXITCODE -ne 0) {
    throw @"
The toolpath simulation overlay does not apply cleanly to this upstream revision.
No files were changed. Use the toolpath-simulation-overlay skill to merge the
Visualizer integration points, then refresh its bundled patch.
"@
}

& git -C $repositoryRoot apply $patchPath
if ($LASTEXITCODE -ne 0) {
    throw 'Git could not apply the toolpath simulation overlay.'
}

Write-Host 'Toolpath simulation overlay applied successfully.'