// Modules to control application life and create native browser window
const { app, BrowserWindow, Notification } = require('electron')
const path = require('node:path')

function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })

  // Desktop notifications
  if (Notification.isSupported()) {
    const notification = new Notification({
      title: 'Hello World!',
      subtitle: 'Nice to see you',
      body: 'Are you having a good day?',
      hasReply: true
    })

    notification.on('show', () => console.log('Notification shown'))
    notification.on('click', () => console.log('Notification clicked'))
    notification.on('close', () => console.log('Notification closed'))
    notification.on('reply', (event, reply) => {
      console.log(`Reply: ${reply}`)
    })

    notification.show()
  } else {
    console.log('Hm, are notifications supported on this system?')
  }
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
