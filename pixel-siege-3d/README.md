# Pixel Siege 3D

A 16-bit, third-person, perspective-3D arcade shooter with endless waves. Single file, no build step.

- **3D:** real perspective projection (x, y, z). Enemies fly at you from the horizon, bullets travel into depth, shadows sit on a scrolling neon floor, and the chase camera follows your ship.
- **Endless waves:** every wave is bigger and faster. Drones, then zigzag bats, then shooting tanks. Every 5th wave is a boss with a health bar.
- **3 lives only**, shown as pixel hearts. A hit gives 1.6 seconds of blinking invincibility. High score is saved in `localStorage`.

## Run
Double-click `index.html`, or open the folder in VS Code and use the Live Server extension.

## Controls
WASD / arrows / mouse to move. Space or click to fire (hold for auto-fire). Enter to start or retry.

## Turn it into a chore game
`onKill(e)` in `index.html` runs on every kill. Put a real action there (for example, call the Gmail `batchModify` code from Inbox Odyssey) and each kill does real work.

## Ideas to extend
Power-ups (spread shot, shield), more enemy sprites, a pause key, a sound toggle, touch-only controls.
