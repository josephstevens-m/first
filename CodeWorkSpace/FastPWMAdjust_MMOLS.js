obj = JSON.parse(msg.payload); //parses incoming payload to a JSON without the JSON node.

//Then we use the object to assign to the variables below.
var mmols = obj.mmol;

var SetMmols = flow.get("SuperSetMmols"); //this is the setting for the target mmols
var myPwm = flow.get("pwm"); // This is the current setting for the pwm set inside
let differingMmols = 0;

if (mmols>SetMmols)
{ //if the current mmols are brighter than our setting
    differingMmols = mmols - SetMmols;
    if(differingMmols>10) //this will adjust faster
        {// It will take every 3 pwm = 1 mmol and give a quick  adjust
          myPwm = myPwm + Math.round(differingMmols * .33);
          flow.set("pwm", myPwm);
        }
    else //This is the normal minor adjustments.
        {
          myPwm = myPwm + 1; //if not then add one to the pwm
          flow.set("pwm", myPwm);
        }
    if (myPwm>=255) //Then test to make no number greater than 255 is sent
        {
          myPwm = 255; //If the number is larger it will send 255
          flow.set("pwm", myPwm);
        }
}
//if (mmols<SetMmols){
else{  // if the current mmols are dimmer than the setting
    differingMmols = SetMmols - mmols;
    if(differingMmols>10) //this will adjust faster
        {// It will take every 3 pwm = 1 mmol and give a quick  adjust
          myPwm = myPwm - Math.round(differingMmols * .33);
          flow.set("pwm", myPwm);
        }
    else{
          myPwm = myPwm - 1;
          flow.set("pwm", myPwm);
        }
    if (myPwm<=0)
        {
          myPwm = 0;
          flow.set("pwm", myPwm);
        }
}

var newMsg = {};
newMsg.payload = myPwm;
//Line below is for testing the output of the node
//newMsg.payload = "{\"pwm\":"+ myPwm + ",\"SuperMmols\":" + SetMmols + ",\"InMols\":" + mmols +"}";

return newMsg;
