/**
 * Created by leo on 01.03.18.
 * in index.html need to set base url as
 * <base href="./">
 */
const { app, BrowserWindow } = require('electron');

let win;

// Create window on electron initialization
app.on('ready', function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    backgroundColor: '#ffffff',
    // icon: `file://${__dirname}/dist/`
  })

  win.loadURL(`file://${__dirname}/dist/browser/index.html`)

  //DevTools
  win.webContents.openDevTools()

  win.on('closed', function() {
    win = null
  })
})

//Quit when all windows are closed
app.on('window-all-closed', function() {
  // app.quit()
})

app.on('activate', function() {
  if(win === null) {
    createWindow()
  }
})
