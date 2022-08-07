// import { User } from './userGenerator.js';

// import { JSONCookie } from "cookie-parser";

// const user = new User("Jadd123", "Jadd", "TTVUQNPwYA&xpPfF3$#vWMf&24", "07387388582")




// // make login system
// // create user to node server, stores as obj on server


function str_obj(str) {
  str = str.split(', ');
  var result = {};
  for (var i = 0; i < str.length; i++) {
      var cur = str[i].split('=');
      result[cur[0]] = cur[1];
  }
  return result;
}

let str= 'jwt={"username":"jadd","password":"jadd","authKey":"B/hLvCo|8bzX^ï¿½?u?Vi<!gNn2*Y^JCEkfKke.QOh"}; connect.sid=s%3Ay80IYmtpPqNGK0IYj1898dqD5DDMkzo5.6P5iHWBAItt43H996KAznIMZznnIK%2FPK%2FrhAYDdpXlc; _csrf=m7zzQiU_fE6oaDN194061TqJ; XSRF-TOKEN=GUXmf1bd-A4hffLSWide5Eqt2KkJA0MU3Goc;'
str = str.split('; ');
const result = {};
for (let i in str) {
    const cur = str[i].split('=');
    result[cur[0]] = cur[1];
}


console.log(JSON.parse(result.jwt).authKey);