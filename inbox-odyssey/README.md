# Inbox Odyssey

A 16-bit, third-person 2.5D arcade shooter where **every enemy is a real email in your Gmail inbox**.
Shoot a promo, social or update email and it is moved to Trash (recoverable for 30 days). Shoot a starred VIP and you lose a life. Play for five minutes, clear hundreds of emails.

Runs 100% in your browser. No backend, no server, no data leaves your machine except calls to the Gmail API.

## How it works
| Game event | Real-world action |
|---|---|
| Spawn enemy | Fetches next page of junk emails (`messages.list` + metadata) |
| Shoot junk | Queued, then `messages.batchModify` adds `TRASH`, removes `INBOX` |
| Shoot a VIP (starred) | Nothing happens to the email. You lose a life |
| Inbox empty | Mission complete |

Junk = Promotions, Social and Updates that are not starred or important. Change `JUNK_QUERY` in `index.html` to retarget.

## Setup (about 10 minutes)
1. Install [VS Code](https://code.visualstudio.com) and the **Live Server** extension.
2. Open the `inbox-odyssey` folder in VS Code.
3. Try it first: right-click `index.html`, choose **Open with Live Server**, click **Play demo**. No Google account needed.
4. For real Gmail, go to [Google Cloud Console](https://console.cloud.google.com):
   1. Create a project.
   2. **APIs & Services > Library**: enable **Gmail API**.
   3. **OAuth consent screen**: choose External, fill the app name, add **your own Gmail as a Test user**.
   4. **Credentials > Create credentials > OAuth client ID > Web application**.
   5. Under **Authorized JavaScript origins** add `http://127.0.0.1:5500` and `http://localhost:5500` (Live Server's address).
   6. Copy the Client ID into `CLIENT_ID` at the top of the script in `index.html`.
5. Reload the page, click **Clean my Gmail**, approve access (you will see an "unverified app" warning because it is your own test app).

**Safety:** test on a spare account first. The app asks for `gmail.modify` (read and label changes, cannot permanently delete). The token lives only in browser memory. Never commit a real Client Secret (this app does not use one).

## Make the repo stand out on GitHub
- Record a 10-second GIF of gameplay and put it at the top of this README.
- Add topics: `pixel-art`, `gmail-api`, `gamification`, `javascript`, `productivity`.
- Add an MIT `LICENSE` and a short "Why I built this" paragraph.
- Roadmap ideas: boss fights for newsletters with `List-Unsubscribe` links, sender-based wave bosses, leaderboard of "emails cleared per minute", an undo screen, sound toggle.
