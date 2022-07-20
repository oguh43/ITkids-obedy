const { app, BrowserWindow } = require('electron');

function createWindow() {
    const win = new BrowserWindow({
        height: 200,
        width: 600,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true
        },
        frame: false,
        maximizable: false,
        minimizable: false,
        title: 'ITkids obedy',
    });

    win.setTitle('ITkids obedy');
    win.loadFile('./index.html');
}

app.whenReady().then(createWindow);

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