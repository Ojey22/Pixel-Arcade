# Pixel Arcade

Three retro 16-bit browser games behind one arcade menu. No frameworks, no build step.

| Game | What it is |
|---|---|
| **Inbox Odyssey** | Third-person 2.5D shooter. Every enemy is a real email. Shoot junk to move it to Trash, spare your starred VIPs. |
| **Ruin Raider** | 2D sprite action. A pixel human fights endless waves in a jungle, then a castle. Boss every 5 waves. 3 pixel-heart lives. |
| **Neon Fists** | 3D sprite fighter in the style of Tekken. Four attack buttons, 3D sidesteps, best of 3 rounds, a ladder of rivals, and a camera that pans and zooms the stage. |

## Structure
```
pixel-arcade/
  index.html              arcade menu (choose a game)
  inbox-odyssey/          game 1 (README with Gmail setup, PROMPT.md)
  ruin-raider/            game 2 (index.html + sprites.js)
  neon-fists/             game 3 (index.html + sprites.js)
```

## Run
1. Open the `pixel-arcade` folder in VS Code and install the **Live Server** extension.
2. Right-click the root `index.html` and choose **Open with Live Server**.
3. Pick a game with Left / Right and Enter, or press 1 / 2 / 3.

## Neon Fists details
- Controls: A/D move, W/S sidestep into the screen, U/I left and right punch, J/K left and right kick (K is the heavy kick), hold L or space to block.
- It is 2.5D: fighters have depth, so a sidestep dodges attacks aimed at the other lane, like Tekken.
- The background is movable: three stages (rooftop, temple, bamboo grove) each have layers that scroll at different speeds as the camera follows the fighters and zooms with their distance.
- Chain light attacks while the rival is stunned for combos. Damage scales down on long combos.
- Fighters are text-drawn pixel sprites in `neon-fists/sprites.js`. Each pose is head + torso + legs, so you can add new poses by mixing rows.
- `onWin()` in `neon-fists/index.html` runs each time you beat a rival. Plug a real chore in there.

## Gmail setup (Inbox Odyssey only)
Demo mode needs no account. For real Gmail cleanup follow `inbox-odyssey/README.md` and use `http://127.0.0.1:5500` as the authorized JavaScript origin.

## Publish on GitHub Pages
Push the folder, then Settings > Pages > deploy from the `main` branch root.
