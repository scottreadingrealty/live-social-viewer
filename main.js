const { app, BrowserWindow } = require('electron');
const path = require('path');

if (process.platform === 'win32') {
  app.setAppUserModelId('com.livesocialviewer.app');
}

function createWindow() {
  const mainWindow = new BrowserWindow({
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
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

