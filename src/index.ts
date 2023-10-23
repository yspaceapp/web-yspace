import { app, BrowserView, BrowserWindow, ipcMain } from 'electron';
declare const MAIN_WINDOW_WEBPACK_ENTRY: string;

if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = (): void => {
  const mainWindow = new BrowserWindow({
    height: 600,
    width: 800,
  });
  const view = new BrowserView()
  mainWindow.addBrowserView(view)
  view.setBounds({ x: 0, y: 0, width: 600, height: 768 })
  view.setAutoResize({ height: true })
  view.webContents.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  const secondView = new BrowserView()
  mainWindow.addBrowserView(secondView)
  secondView.setBounds({ x: 80, y: 0, width: 1024 - 80, height: 768 })
  secondView.setAutoResize({ width: true, height: true })
  secondView.webContents.loadURL('https://www.uol.com.br/')
};

// export function loadURLSecondView() {
//   BrowserWindow.getAllWindows()[1].loadURL('https://twitter.com/');
// }

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
