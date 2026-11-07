# Moddee Shop app and Google Search setup

## Mobile app

The site is packaged with Capacitor. The Android and iOS projects are in `android/` and `ios/`.

1. Run `npm run mobile:sync` after changing the website.
2. On Windows or macOS, install Android Studio and a supported JDK, then run `npm run mobile:android`.
3. In Android Studio, test the app and create a signed Android App Bundle (`.aab`) for Google Play Console.
4. For iOS, use a Mac with Xcode and an Apple Developer account, then run `npm run mobile:ios`.

The app's native package ID is `com.moddeeshop.app`; changing it after publishing would create a different app. Store listing artwork, screenshots, privacy details, and signing credentials must be supplied or completed by the app owner.

## Cloudflare Worker deployment

The existing Cloudflare Worker is named `portfolio-website`. The repository uses Wrangler static assets to serve the built site from `dist/`. To deploy manually, authorize Wrangler with `npx wrangler login` and run `npm run deploy:worker`. For GitHub-connected builds, set the build command to `npm run build` and the deploy command to `npx wrangler deploy`; the repository's `wrangler.toml` supplies the Worker name and assets directory.

## Google Search

The site allows search-engine crawling through `public/robots.txt`. To appear in Google, deploy it to a public HTTPS domain, verify that domain in Google Search Console, and submit a sitemap for that domain. Add the final canonical URL and sitemap only after the domain is selected; the current local preview URL is not publicly crawlable.
