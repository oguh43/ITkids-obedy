const uaup = require('./uaup-js.js');


//This is Optional
const defaultStages = {
    Checking: "Checking...", // When Checking For Updates.
    Found: "Update Found!",  // If an Update is Found.
    NotFound: "No Update Found.", // If an Update is Not Found.
    Downloading: "Downloading...", // When Downloading Update.
    Unzipping: "Installing...", // When Unzipping the Archive into the Application Directory.
    Cleaning: "Finalizing...", // When Removing Temp Directories and Files (ex: update archive and tmp directory).
    Launch: "Launching..." // When Launching the Application.
};

let updateOptions = {
    gitRepo: "ITkids-obedy", // [Required] Your Repo Name
    gitUsername: "oguh43",  // [Required] Your GitHub Username.

    appName: "itkids_obedy", //[Required] The Name of the app archive and the app folder.
    appExecutableName: "ITkids obedy.exe", //[Required] The Executable of the Application to be Run after updating.

    progressBar: document.getElementById("download"), // {Default is null} [Optional] If Using Electron with a HTML Progressbar, use that element here, otherwise ignore
    label: document.getElementById("download-label"), // {Default is null} [Optional] If Using Electron, this will be the area where we put status updates using InnerHTML
    stageTitles: defaultStages, // {Default is defaultStages} [Optional] Sets the Status Title for Each Stage
};
if (process.platform === "win32") {
    updateOptions.appName = "ITkids_obedy_win32"
    updateOptions.appExecutableName = "itkids_obedy.exe"
}else{
    updateOptions.appName = "ITkids_obedy_linux"
    updateOptions.appExecutableName = "itkids_obedy"
}

uaup.Update(updateOptions);