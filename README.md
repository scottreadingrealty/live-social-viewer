# Live Social Viewer

A desktop Electron dashboard with persistent account sessions for Facebook, Instagram, X, TikTok, and YouTube Shorts.

## Download the latest Windows build

[Download Live Social Viewer for Windows](https://github.com/scottreadingrealty/live-social-viewer/releases/latest/download/Live-Social-Viewer-win32-x64.zip)

This stable URL always points to the asset attached to the newest GitHub release.

## Bookmarkable launcher

[Open Live Social Viewer](https://scottreadingrealty.github.io/live-social-viewer/)

Bookmark or pin the HTTPS link above. It launches the installed dashboard through
the registered `live-social-viewer://open` protocol instead of opening Electron by
itself.

> Windows Smart App Control may block the current unsigned build. A trusted code-signing certificate is required for warning-free distribution.

## Development

```powershell
npm install
npm start
```

## Publishing an update

1. Update `version` in `package.json`.
2. Commit and push the change to `main`.
3. GitHub Actions packages the Windows app and publishes a new release.

The public download URL above does not change between versions.

