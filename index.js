const cron = require("node-cron");
const sendPic = require("./sendPic.js");
<<<<<<< Updated upstream
const actionRun = require("./actionRun.js");

cron.schedule("0 * * * * *", () => {
  //sendPic();
=======
cron.schedule("0 * * * * *", () => {
  console.log(`this message logs every minute`);
  sendPic();
});
cron.schedule("15 * * * * *", () => {
  console.log(`this message logs every minute`);
  sendPic();
});
cron.schedule("30 * * * * *", () => {
  console.log(`this message logs every minute`);
  sendPic();
});
cron.schedule("45 * * * * *", () => {
  console.log(`this message logs every minute`);
  sendPic();
>>>>>>> Stashed changes
});

cron.schedule("30 * * * * *", () => {
  //sendPic();
});

cron.schedule("0 * * * * *", () => {
  console.log("kaka");
  actionRun();
});
/*
cron.schedule("0 15 * * * *", () => {
  actionRun();
});
*/
cron.schedule("30 * * * * *", () => {
  console.log("kaka");
  actionRun();
});
/*
cron.schedule("0 45 * * * *", () => {
  actionRun();
});
*/
