const electron = require('electron');
const url = require('url');
const path = require('path');

const{app, BrowserWindow, Menu} = electron;

let mainWindow;
let aboutWindow;

app.on('ready', function(){
    mainWindow = new BrowserWindow({});
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'mainWindow.html'),
        protocol:'file:',
        slashes:true
    }));
    mainWindow.on('closed', function(){
        app.quit();
    })
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    Menu.setApplicationMenu(mainMenu);
});

function createAddWindow(){
    aboutWindow = new BrowserWindow({
        width:600,
        height:650,
        title:'About'
    });
    aboutWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'aboutWindow.html'),
        protocol:'file:',
        slashes:true
    }));
    aboutWindow.on('close', function(){
        addWindow = null;
    });
}

const mainMenuTemplate = [
    {
        label:'Help',
        submenu:[
            {
                label:'About',
                click(){
                    createAddWindow();
                }
            },
            {
                label:'Quit',
                accelerator: process.platform == 'darwin' ? 'Command+Q' :
                'Ctrl+Q',
                click(){
                    app.quit();
                }
            }
        ]
    }
];

if(process.platform == 'darwin'){
    mainMenuTemplate.unshift({});
}
