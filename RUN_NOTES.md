# One-Page Run Notes (Bolt / Expo QR)

## Intention behind this package
- Make your **Bolt QR build open on phone without the red Metro error**.
- Keep **BLE code present** but **gracefully disabled** in Expo Go (QR preview), and **fully functional** in a Dev Client build.
- Resolve Metro bundling issues caused by **ESM subpath imports** and **package exports**.

## What changed
- Pinned `@noble/hashes` to `1.4.0` (Metro-friendly).
- Rewrote imports to explicit subpaths: `@noble/hashes/hmac.js`, `@noble/hashes/sha256.js`.
- Added `metro.config.js` with `resolver.unstable_enablePackageExports = true`.
- Guarded `react-native-ble-plx` usage so the app shell runs in Expo Go.
- Wrote `CHANGELOG_FIXES.md` with a file-by-file log.

## How to run via Bolt QR (Expo Go)
1. Push this repo to GitHub and connect in Bolt.
2. Build/Preview → scan QR in **Expo Go**.
3. App opens. BLE will be **inactive** in Expo Go (no native module). UI should not crash.

## Enabling BLE (once) via Dev Client
If your flows need BLE scanning/connect:
```bash
# On your machine
npm i -g expo-cli
npm i

# Create a Dev Client once (Android)
npx expo prebuild -p android
npx expo run:android    # installs Expo Dev Client on your phone

# Start project server
npx expo start --tunnel -c
```
Then open the **Expo Dev Client** app and scan the QR. BLE will work.

## Notes
- If you later add packages with native code, they will also need Dev Client.
- For Bolt cloud previews, ensure Node 18.x and a clean `node_modules` on each build.
