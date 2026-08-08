---
name: toolpath-simulation-overlay
description: "Use when: reapplying, refreshing, or reconciling the customer-specific disconnected animated toolpath simulation after updating gSender from GitHub."
argument-hint: "[apply|refresh]"
---

# Toolpath Simulation Overlay

Reapply the customer-specific disconnected toolpath simulator without changing
the CNC job controls. The overlay modifies only the primary Three.js visualizer
and adds Play, Pause, Replay, and Reset controls in its lower-right corner.

## Resources

- [Apply helper](./scripts/apply-toolpath-simulation.ps1)
- [Unified patch](./assets/toolpath-simulation.patch)

## Apply After Updating Upstream

1. Pull or merge the desired gSender revision.
2. From the repository root, run:

   ```powershell
   & .\.github\skills\toolpath-simulation-overlay\scripts\apply-toolpath-simulation.ps1
   ```

3. Start hot development mode and load a G-code file while disconnected.
4. Confirm the lower-right visualizer controls animate the toolpath without
   enabling or sending an actual CNC job.

The helper reports success when the patch is already applied, applies it only
when it matches cleanly, and stops without changing files when upstream changes
require a manual merge.

## Refresh After an Upstream Conflict

Keep the behavior bounded to `src/app/src/features/Visualizer/Visualizer.jsx`:

- Use the existing `GCodeVisualizer` frame, color, and current-location APIs.
- Keep all simulated state local to the visualizer.
- Hide the controls while connected or in the secondary visualizer.
- Do not modify `JobControl`, controller commands, or serial communication.

After merging the integration points and validating HMR, refresh
`assets/toolpath-simulation.patch` so future updates use the new upstream
context.