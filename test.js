const shell = require("shelljs");
shell.exec("powershell scripts/trigger-popup.ps1 -lock 'ok'", function(
  code,
  stdout,
  stderr
) {});
