var FtpDeploy = require("ftp-deploy");
var ftpDeploy = new FtpDeploy();

var config = {
 user: "u592367988.dev",
 password: "8h^D#uYwV&!",
 // user: "u592367988.public",
 // password: "8G?lTo:MM@1",
 host: "151.106.96.181",
 port: 21,
 localRoot: __dirname + "/dist",
 remoteRoot: "/",
 include: ["*", "**/*"],
 exclude: ["dist/**/*.map", "node_modules/**", "node_modules/**/.*", ".git/**"],
 forcePasv: true,
 deleteRemote: false,
 sftp: false,
};

ftpDeploy
 .deploy(config)
 .then((res) => console.log("finished:", res))
 .catch((err) => console.log(err));
ftpDeploy.on("uploading", function (data) {
 console.log(data.totalFilesCount);
 console.log(data.transferredFileCount);
 console.log(data.filename);
});
ftpDeploy.on("uploaded", function (data) {
 console.log(data);
});
ftpDeploy.on("log", function (data) {
 console.log(data);
});
ftpDeploy.on("upload-error", function (data) {
 console.log(data.err);
});
