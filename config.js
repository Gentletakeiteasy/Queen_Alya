//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.spotify.com";
global.video = "www.moviebox.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kingdavid23565@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/STAR-KING0/Queen_Alya";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "./lib/alya.jpg";
global.devs = "2348020674070";
global.sudo = process.env.SUDO || "2348100835767,2348020674070";
global.owner = process.env.OWNER_NUMBER || "2348020674070";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "./lib/alya.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0NkVHpBbjRkbmpUeEw3YW51a1RaTFhLdUQvZkJMc0FKTm5kOFY5V20xND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibmlVd1Jvdlh3YTBleXQxbmtVeUg5dVB0ZnJJOTdVWnRMTnpLdERZUDdsMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlQ0FtT2w5N2JLU0RjdkdPWEY0TjB3RzVIY2w4WGE4dFFNdXpLNnhFdDJrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuM1FITUxNT29DaGVXdko2cFdNSDE5aHFtTDQyT1dtT3BTNjloRXd3NzFnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldLcEFpOHNadHowSTVINk5DTmJIbXp1eDRwOFVGZllQZkh2S25LekRCbGs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5xQTcyYnczMEFiWEhyYUNxck92SGd2dE1JOWxhYWREdlN4eXh3RFpYbWc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUluRy9mYWRRY3QrZVNHNWlFaUJTTHJ2WEZva0NjZTBwS3BWb25VTGdrUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR2pIWHU4YThRK0tLOUxGbWJGU3ErdXg5Smo4YUNrVWxjeDhmUXFtNDVqcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijg4RXBmVUlIN3Y4WE0wZmUzcU5ZcG9FaU9nTU4zaVlKMmM5SzNqenFNQ1BGajRvQzZVNnlIQm1pM2lYRHhkOURWNHJVNmRKc1dWeUJBUGptMDVTeEJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjE4LCJhZHZTZWNyZXRLZXkiOiJBODdsWDBFcWtIL3VCUmpjcXYyTFdvbDVVSWZDV2l4RGNRMWVGMytQaUw0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJIWU9rdTg3aVNReUtfdVNZWnBvSWp3IiwicGhvbmVJZCI6ImFjZmI1MjFiLTJmM2YtNDAwYy1iM2JiLWU5MGI0ZmRiOWVjZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoOEtHN0ltTnloMXBiUWpYanlSWnB4QWlQMEk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSmVFTHVKcE5HQTNseFZzbkx0Q2xyMXhnVVlrPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjdFWU1ENDRWIiwibWUiOnsiaWQiOiIyMzQ4MDIwNjc0MDcwOjQ5QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdkLXwnZul8J2QtfCdkYzwnZC18J2bqfCdkYwg8J2QuvCdkYXwnZul8J2bsvCdm6jwnZuq8J2QtvCdkYYifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BXRCtNWUNFTFhEc2JrR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImlqNlAvT0pUMHgrK2pPd2JPd1ZKaklZek9OL0tZcTNCMkFlb1ZPVW5lbmM9IiwiYWNjb3VudFNpZ25hdHVyZSI6InpZZmZJKzRyNTREQ2NlOVlaYzV1RE55eW5Md3dhYXdMTFhOU20wNElqYURZYUNLZjV6RU5jNWhrUStxbHg1a1hXdVQraG5lWm1CR216elhBdDhIK0RBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJtZzlWQkNvNmU4eUJlVkpTZXZsd2tYTmVXUzdrZFBhNWNtelMwWXhscEhvL1RNRDdNMFVVdWJ1UVhxa1I5eVcwYTdUMDlZb2Fielp0TzM0TjJmbWxDQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgwMjA2NzQwNzA6NDlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWW8rai96aVU5TWZ2b3pzR3pzRlNZeUdNempmeW1LdHdkZ0hxRlRsSjNwMyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMDk2MTg1OX0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "$",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ALYA™`",
  author: process.env.PACK_AUTHER || "QUEEN_ALYA",
  packname: process.env.PACK_NAME || "A L Y A",
  botname: process.env.BOT_NAME || "QUEEN_ALYA",
  ownername: process.env.OWNER_NAME || "STAR KING",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A L Y A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
