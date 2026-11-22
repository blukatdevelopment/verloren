/*##############################################################################
# Controls time
##############################################################################*/

TIME.TimeController = {};
TIME.TimeController.new = function(){
    let tc = {};
    tc.time = TIME.Duration.new(0,0,0);
    tc.accumulatedMillis = 0;
    tc.lastUpdate = null;
    tc.paused = false;
    tc.update = function(){
        if(tc.paused){
            return;
        }
        if(tc.lastUpdate == null){
            tc.lastUpdate = Date.now();
            return;
        }
        tc.tick();
        tc.lastUpdate = Date.now();
    };
    tc.tick = function(){
        let now = Date.now();
        tc.accumulatedMillis += now - tc.lastUpdate;
        if(tc.accumulatedMillis >= TIME.MillisPerMinute){
            let minutes = Math.trunc(tc.accumulatedMillis / TIME.MillisPerMinute);
            tc.accumulatedMillis = tc.accumulatedMillis % TIME.MillisPerMinute;
            tc.time.addMinutes(minutes);
            //UTILITY.notification("The time is " + tc.timeString());
        }
    };
    tc.pause = function(){
        tc.tick();
        tc.lastUpdate = null;
        tc.paused = true;
    };
    tc.resume = function(){
        tc.paused = false;
    };
    tc.timeString = function(){
        let minutesString = "" + Math.trunc(tc.time.minutes);
        if(tc.time.minutes < 10){
            minutesString = "0" + minutesString;
        }
        let hoursString = "" + Math.trunc(tc.time.hours);
        if(tc.time.hours < 10){
            hoursString = "0" + hoursString;
        }
        return hoursString + ":" + minutesString;
    };
    tc.getCurrentDarkness = function(){
        let hour = tc.time.hours;
        let darknessMap = {};
        darknessMap[0] = 100;
        darknessMap[1] = 100;
        darknessMap[2] = 100;
        darknessMap[3] = 100;
        darknessMap[4] = 100;
        darknessMap[5] = 100;
        darknessMap[6] = 25;
        darknessMap[7] = 0;
        darknessMap[8] = 0;
        darknessMap[9] = 0;
        darknessMap[10] = 0;
        darknessMap[11] = 0;
        darknessMap[12] = 0;
        darknessMap[13] = 0;
        darknessMap[14] = 0;
        darknessMap[15] = 0;
        darknessMap[16] = 0;
        darknessMap[17] = 0;
        darknessMap[18] = 0;
        darknessMap[19] = 25;
        darknessMap[20] = 50;
        darknessMap[21] = 100;
        darknessMap[22] = 100;
        darknessMap[23] = 100;

        return darknessMap[hour];
    }
    return tc;
};