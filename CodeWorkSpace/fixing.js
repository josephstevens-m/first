var date = msg.payload.date;
var time = msg.payload.time;
var mmols = msg.payload.mmol;

var ColorTemp = msg.payload.ColorTemp;
var Lux = msg.payload.Lux;
var Red = msg.payload.Red;
var Green = msg.payload.Green;
var Blue = msg.payload.Blue;
var White = msg.payload.White;





var newMsg.topic = "INSERT INTO fullSensor(Date,Time,mmols,ColorTemp,Lux,Red,Green,Blue,White) VALUES(\'"+ date + "\',\'" + time + "\', " + mmols + ", " + ColorTemp + ", " + Lux + ", " + Red + ", " + Green +", " + Blue + ", "+ White + ")";
//newMsg.topic= "INSERT INTO \`lightsensor\` (\`lightsensorID\`, \`Date\`, \`Time\`, \`ColorTemp\`, \`Lux\`, \`Red\`, \`Green\`, \`Blue\`, \`White\`) VALUES (NULL, \'2020-10-01\', \'11:33:30\', \'52\', \'25\', \'52\', \'25\', \'52\', \'25\');";

return newMsg;
