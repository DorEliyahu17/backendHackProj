const cron = require("node-cron");
const sendPic = require("./sendPic.js");
const analytics = require("./Analytics.js");
// const actionRun = require("./actionRun.js");

cron.schedule("0 * * * * *", () => {
  sendPic();
});
cron.schedule("15 * * * * *", () => {
  //sendPic();
  analytics();
});
cron.schedule("30 * * * * *", () => {
  sendPic();
});
cron.schedule("45 * * * * *", () => {
  //sendPic();
  analytics();
});

// cron.schedule("0 * * * * *", () => {
//   console.log("kaka");
//   actionRun();
// });

// cron.schedule("0 15 * * * *", () => {
//   console.log("kaka");
//   actionRun();
// });

// cron.schedule("30 * * * * *", () => {
//   console.log("kaka");
//   actionRun();
// });

// cron.schedule("0 45 * * * *", () => {
//   console.log("kaka");
//   actionRun();
// });
// cron.schedule("*/1 * * * *", () => {
//   console.log("Doing Analytics");
//   analytics();
// });
