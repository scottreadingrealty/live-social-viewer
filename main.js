const { app, BrowserWindow } = require('electron');
const path = require('path');

const PROTOCOL = 'live-social-viewer';

if (process.platform === 'win32') {
  app.setAppUserModelId('com.livesocialviewer.app');

  // Development builds must include the app path or Windows launches Electron's
  // generic welcome screen instead of this dashboard.
  if (process.defaultApp && process.argv.length >= 2) {
    app.setAsDefaultProtocolClient(PROTOCOL, process.execPath, [path.resolve(process.argv[1])]);
  } else {
    app.setAsDefaultProtocolClient(PROTOCOL);
  }
}

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1600,
    height: 980,
    minWidth: 900,
    minHeight: 650,
    backgroundColor: '#080b12',
    title: 'Social Command Center',
    icon: path.join(__dirname, 'assets', 'icon.ico'),
    webPreferences: {
      webviewTag: true,
      contextIsolation: true,
      nodeIntegration: false
    }
  });

  mainWindow.loadFile(path.join(__dirname, 'index.html'));
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

function showDashboard() {
  if (!mainWindow || mainWindow.isDestroyed()) {
    createWindow();
    return;
  }

  if (mainWindow.isMinimized()) mainWindow.restore();
  mainWindow.show();
  mainWindow.focus();
}

const hasSingleInstanceLock = app.requestSingleInstanceLock();

if (!hasSingleInstanceLock) {
  app.quit();
} else {
  app.on('second-instance', () => {
    showDashboard();
  });

  app.whenReady().then(() => {
    showDashboard();

    app.on('activate', () => {
      showDashboard();
    });
  });
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

