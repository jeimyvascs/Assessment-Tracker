const path =  require("path");
const { app, BrowserWindow } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    width: 340,
    height: 580,
  });

  win.loadFile(path.join(__dirname, "./renderer/index.html"));
}

app.whenReady().then(createWindow);