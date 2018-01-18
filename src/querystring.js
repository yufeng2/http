// uname=tom&upass=1234&ufavs=read&ufavs=write

let qs = require("querystring");

console.log(qs.parse("uname=tom&upass=1234&ufavs=read&ufavs=write"));

console.log(qs.stringify({ uname: 'tom', upass: '1234', ufavs: [ 'read', 'write' ] }));