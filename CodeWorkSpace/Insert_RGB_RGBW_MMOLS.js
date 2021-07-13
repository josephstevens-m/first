
  var date = msg.payload.date;
  var time = msg.payload.time;
  var mmols = msg.payload.mmol;
  var WRGBMmols = msg.payload.WRGBMmol;
  var RGBMmols = msg.payload.RGBMmol;




  var newMsg ={};
  newMsg.topic = "INSERT INTO calibrateTable(Date,Time,mmols,WRGBMmols,RGBMmols)  VALUES(\'"+ date + " \', \' " + time + "\', \'" + mmols + "\', " + WRGBMmols + ", " + RGBMmols + ")";

  return newMsg; 
