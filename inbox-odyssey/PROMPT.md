# Prompt for your VS Code AI assistant (Copilot Chat, Claude Code, etc.)

Paste this after opening the project folder:

---
You are a senior game developer helping a beginner. The project is `inbox-odyssey`: a single-file browser game (`index.html`, vanilla JS, canvas 320x180 scaled with `image-rendering: pixelated`) where emails from the user's Gmail are enemies. Read `index.html` and `README.md` first.

Rules:
- No frameworks or build step. Keep it runnable with VS Code Live Server.
- Keep the 16-bit look: pixel sprites, synthwave grid floor, scanlines, Press Start 2P font.
- Gmail access uses Google Identity Services token flow with scope `gmail.modify`. Never permanently delete mail. Always use Trash. Treat email subjects and senders as untrusted text (use `textContent`, never `innerHTML`).
- Work one feature at a time. Before each change, explain it in two plain sentences, make the change, and tell me exactly how to test it.

Build, in this order:
1. Split the code into `index.html`, `style.css`, `game.js`, `gmail.js` without changing behavior.
2. Add a boss wave: the sender with the most unread emails appears as a large boss. Its health equals its email count, and defeating it trashes all of them.
3. Add a sound toggle, high score in `localStorage`, and a "Mission report" end screen.
4. Add a confirmation screen before any real Gmail changes, showing how many emails are about to be targeted.
5. Add an "Undo last session" button that restores the last trashed batch.
6. Add a mobile touch layout and a pause key (P).

After each step, list what could break and how I can verify it works.
---
