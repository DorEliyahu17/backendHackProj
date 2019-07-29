const azureDriver = require("./blobDriver.js");

const containerName = "demo";
const blobName = "Dor_data.json";
const content = "hello Node SDK";
const localFilePath = "./Dor_data.json";

function actionRun() {
  try {
    azureDriver
      .createContainer(containerName)
      .then(res => console.log("res.message" + res.message));
    azureDriver
      .insertFile(containerName, localFilePath)
      .then(res => console.log("res.message" + res.message));
    azureDriver
      .listBlobs(containerName)
      .then(res => console.log("res.message" + res.message));
    azureDriver
      .downloadBlob(containerName, blobName)
      .then(res => console.log("res.message" + res.message));
  } catch (err) {
    console.log(err);
  }
}

module.exports = actionRun;
