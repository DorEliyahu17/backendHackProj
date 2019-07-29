"use strict";
const shell = require("shelljs");
const request = require("request");
const fs = require("fs");
// Replace <Subscription Key> with your valid subscription key.
const subscriptionKey = "e5fdd4b3d8dc498c9ef5907168f4168a";
var os = require("os");

// You must use the same location in your REST call as you used to get your
// subscription keys. For example, if you got your subscription keys from
// westus, replace "westcentralus" in the URL below with "westus".
const uriBase =
  "https://facesecurity.cognitiveservices.azure.com/face/v1.0/detect";
let imageBuffer;

// Request parameters.

const params = {
  returnFaceId: "true",
  returnFaceLandmarks: "false",
  returnFaceAttributes:
    "age,gender,headPose,smile,facialHair,glasses," +
    "emotion,hair,makeup,occlusion,accessories,blur,exposure,noise"
};

shell.exec("java -jar getPicture.jar", function(code, stdout, stderr) {
  imageBuffer = fs.readFileSync("test.png");
  const options = {
    uri: uriBase,
    qs: params,
    body: imageBuffer,
    headers: {
      "Content-Type": "application/octet-stream",
      "Ocp-Apim-Subscription-Key": subscriptionKey
    }
  };
  request.post(options, (error, response, body) => {
    if (error) {
      console.log("Error: ", error);
      return;
    }
    let jsonResponse = JSON.stringify(JSON.parse(body), null, "  ");
    if (fs.existsSync(os.userInfo().username + "_data.json")) {
      //append to the json
      let oldDataToAdd = fs.readFileSync(
        os.userInfo().username + "_data.json",
        "utf8"
      );
      oldDataToAdd = JSON.parse(oldDataToAdd);
      oldDataToAdd.push(JSON.parse(jsonResponse)[0]);
      fs.writeFileSync(
        os.userInfo().username + "_data.json",
        JSON.stringify(oldDataToAdd),
        "utf8"
      );
    } else {
      //no such file
      fs.writeFileSync(
        os.userInfo().username + "_data.json",
        jsonResponse,
        "utf8"
      );
    }
  });
});
