let fs = require("fs");
let os = require("os");
const shell = require("shelljs");

function think() {
  let rawData = fs.readFileSync(os.userInfo().username + "_data.json", "utf8");
  rawData = JSON.parse(rawData);
  let avgEmotion = {
    anger: 0,
    contempt: 0,
    disgust: 0,
    fear: 0,
    happiness: 0,
    neutral: 0,
    sadness: 0,
    surprise: 0,
    gender: ""
  };
  for (let curData of rawData) {
    Object.keys(curData.faceAttributes.emotion).map(curFeelStr => {
      avgEmotion[curFeelStr] += curData.faceAttributes.emotion[curFeelStr];
    });
    avgEmotion.gender = curData.faceAttributes.gender;
  }
  let getMaxEmotion = [];
  Object.keys(avgEmotion).map(cur => {
    if (cur !== "gender") {
      avgEmotion[cur] = avgEmotion[cur] / rawData.length;
      getMaxEmotion[cur] = avgEmotion[cur];
    }
  });
  getMaxEmotion = Object.keys(getMaxEmotion).reduce((a, b) =>
    getMaxEmotion[a] > getMaxEmotion[b] ? a : b
  );
  let dominentEmotion = { [getMaxEmotion]: avgEmotion[getMaxEmotion] };
  console.log();
  resposeToEmotion(dominentEmotion);
}
function resposeToEmotion(dominentEmotion) {
  switch (Object.keys(dominentEmotion)[0]) {
    case "anger":
      shell.exec(
        " powershell scripts/trigger-popup.ps1 -messageBody 'You Are Angry'",
        function(code, stdout, stderr) {}
      );
      break;
    case "contempt":
      shell.exec(
        " powershell scripts/trigger-popup.ps1 -messageBody 'You Are Contempt'",
        function(code, stdout, stderr) {}
      );
      break;
    case "disgust":
      shell.exec(
        " powershell scripts/trigger-popup.ps1 -messageBody 'You Are Disgust'",
        function(code, stdout, stderr) {}
      );
      break;
    case "fear":
      shell.exec(
        " powershell scripts/trigger-popup.ps1 -messageBody 'You Are Fear'",
        function(code, stdout, stderr) {}
      );
      break;
    case "happiness":
        shell.exec(
          "powershell -c (New-Object Media.SoundPlayer 'scripts/zarihappy.wav').PlaySync()",
          function(code, stdout, stderr) {}
        );
      break;
    case "neutral":
      shell.exec(
        "powershell scripts/trigger-popup.ps1 -messageBody 'You Are OK'",
        function(code, stdout, stderr) {}
      );
      break;
    case "sadness":
        shell.exec(
          "powershell -c (New-Object Media.SoundPlayer 'scripts/zarisad.wav').PlaySync()",
          function(code, stdout, stderr) {}
        );
      break;
    case "surprise":
      shell.exec(
        "powershell scripts/trigger-popup.ps1 -messageBody 'You Are Suprised'",
        function(code, stdout, stderr) {}
      );
      break;
  }
}
function sendToCache()
think();
