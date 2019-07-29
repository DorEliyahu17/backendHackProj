let azureDriver = new Object();
const path = require("path");
var azure = require("azure-storage");
const blobService = azure.createBlobService(
  "DefaultEndpointsProtocol=https;AccountName=hrme;AccountKey=YANmn+Wh4L1V6Lr7WR8XtjQT3k+RGItZ5YEiIql595yyPNCWbIgrvXS2VjOyc9zSefHqBN/4Iiu5dSBRMoaUpw==;EndpointSuffix=core.windows.net"
);

azureDriver.createContainer = containerName => {
  return new Promise((resolve, reject) => {
    blobService.createContainerIfNotExists(
      containerName,
      { publicAccessLevel: "Container" },
      err => {
        if (err) {
          reject(err);
        } else {
          resolve({ message: `Container '${containerName}' created` });
        }
      }
    );
  });
};

azureDriver.insertFile = (containerName, filePath) => {
  return new Promise((resolve, reject) => {
    const fullPath = path.resolve(filePath);
    const blobName = path.basename(filePath);
    blobService.createBlockBlobFromLocalFile(
      containerName,
      blobName,
      fullPath,
      err => {
        if (err) {
          reject(err);
        } else {
          resolve({ message: `Local file "${filePath}" is uploaded` });
        }
      }
    );
  });
};

azureDriver.listBlobs = containerName => {
  return new Promise((resolve, reject) => {
    blobService.listBlobsSegmented(containerName, null, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve({
          message: `${data.entries.length} blobs in '${containerName}'`,
          blobs: data.entries
        });
      }
    });
  });
};

azureDriver.downloadBlob = (containerName, blobName) => {
  //const dowloadFilePath = path.resolve('./' + blobName.replace('.json', '.downloaded.json'));
  return new Promise((resolve, reject) => {
    blobService.getBlobToText(containerName, blobName, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve({ message: `Blob downloaded "${data}"`, text: data });
      }
    });
  });
};

/*

(containerName, blobName, fileNameToInsert) => {
  console.log("containerName=" + containerName);
  console.log("blobName=" + blobName);
  console.log("fileNameToInsert=" + fileNameToInsert);
  blobService.createBlockBlobFromLocalFile(
    containerName,
    blobName,
    fileNameToInsert + ".json",
    function(error, result, response) {
      if (!error) {
        // file uploaded
        console.log("error=" + error);
        console.log("result=" + result);
        console.log("response=" + response);
      }
    }
  );
};
*/
module.exports = azureDriver;
