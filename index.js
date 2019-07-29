const cron = require("node-cron");
const sendPic = require("./sendPic.js");

cron.schedule("* * * * *", () => {
  console.log(`this message logs every minute`);
  sendPic();
});
