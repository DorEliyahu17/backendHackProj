const cron = require("node-cron");
const sendPic = require("./sendPic.js");
const actionRun = require("./actionRun.js");

cron.schedule("0 * * * * *", () => {
  //sendPic();
});
cron.schedule("15 * * * * *", () => {
  //sendPic();
});
cron.schedule("30 * * * * *", () => {
  //sendPic();
});
cron.schedule("45 * * * * *", () => {
  //sendPic();
});

cron.schedule("0 * * * * *", () => {
  console.log("kaka");
  actionRun();
});

cron.schedule("0 15 * * * *", () => {
  console.log("kaka");
  actionRun();
});

cron.schedule("30 * * * * *", () => {
  console.log("kaka");
  actionRun();
});

cron.schedule("0 45 * * * *", () => {
  console.log("kaka");
  actionRun();
});
