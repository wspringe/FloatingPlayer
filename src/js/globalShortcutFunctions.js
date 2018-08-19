const {globalShortcut, BrowserWindow} = require('electron')

function loadShortcuts() {
  const ret = globalShortcut.register('CommandOrControl+D', () => {
    var allWindows = BrowserWindow.getAllWindows()
    const win = allWindows[0]
    win.loadFile('index.html')
  })

  globalShortcut.register('CommandOrcontrol+Shift+Up', () => {
    var allWindows = BrowserWindow.getAllWindows()
    const win = allWindows[0]
    win.setOpacity(win.getOpacity() + 0.1)
  })

  globalShortcut.register('CommandOrControl+Shift+Down', () => {
    var allWindows = BrowserWindow.getAllWindows()
    const win = allWindows[0]
    win.setOpacity(win.getOpacity() - 0.1)
  })
}

function unregisterShortcuts() {
  globalShort.unregisterAll()
}

module.exports.loadshortcuts = loadShortcuts;
module.exports.unregisterShortcuts = unregisterShortcuts;