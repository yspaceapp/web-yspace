/* eslint-disable @typescript-eslint/no-var-requires */
const { BrowserView, BrowserWindow, app } = require('electron')

function twoViews () {
  const win = new BrowserWindow({ width: 1024, height: 768 })
  const view = new BrowserView()

  win.addBrowserView(view)
  view.setBounds({ x: 0, y: 0, width: 80, height: 768 })
  view.setAutoResize({ height: true })
  view.webContents.loadURL('http://localhost:5173/')

  const secondView = new BrowserView()
  win.addBrowserView(secondView)
  secondView.setBounds({ x: 80, y: 0, width: 1024 - 80, height: 768 })
  secondView.setAutoResize({ width: true, height: true })
  secondView.webContents.loadURL('https://www.uol.com.br/')
  app.on('window-all-closed', () => {
    win.removeBrowserView(secondView)
    win.removeBrowserView(view)
    app.quit()
  })
}

app.whenReady().then(twoViews)

module.exports = { twoViews }
