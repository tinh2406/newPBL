const {exec,execSync} = require('child_process');

const getCPUInfo = () => {
  const script = exec("lscpu", { encoding: "utf-8" });
  const getCPUInfo = JSON.stringify(script.toString('utf8')).split(":");
  return getCPUInfo;
}
const tatbluetooth = () => {
  exec("rfkill block bluetooth");
  const output = execSync("rfkill list bluetooth",{encoding: 'utf-8' });
    return (output.split("\n")[1].indexOf("yes") < 0);
}
const batbluetooth = () => {
  exec("rfkill unblock bluetooth");
  const output = execSync("rfkill list bluetooth",{encoding: 'utf-8' });
    return (output.split("\n")[1].indexOf("yes") < 0);
}
// const { exec } = require("child_process");
// export const getCPUInfo = () => {
//   const output = exec("lscpu",{encoding: 'utf-8' });
//   return JSON.stringify(output.toString('utf8')).split(":");
// }

// const { execSync } = require("child_process");
// export const getCPUInfo = ()=>{
//   execSync("lscpu", { encoding: "utf-8" });
// }
// console.log(data1);
// script.stdout.on('data', (data) => {
//     console.log('stdout: ' + data);
// });

// script.stderr.on('data', (err) => {
//     console.log('stderr: ' + err);
// });

// script.on('exit', (code) => {
//     console.log('Exit Code: ' + code);
// });

module.exports = {
  getCPUInfo,
  tatbluetooth,
  batbluetooth
};