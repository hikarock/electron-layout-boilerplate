const electron      = require('electron')
const app           = electron.app
const BrowserWindow = electron.BrowserWindow

let win

function createWindow () {

  win = new BrowserWindow({width: 1000, height: 600})
  win.loadURL(`file://${__dirname}/index.html`)
  win.setMinimumSize(600, 400)

  win.on('closed', function () {
    win = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (win === null) {
    createWindow()
  }
})
