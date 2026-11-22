/*##############################################################################
# Controls time
##############################################################################*/

TIME.TimeController = {};
TIME.TimeController.new = function(){
    let cal = {};
    cal.time = TIME.Duration.new(0,0,0);
    cal.accumulatedMillis = 0;
    cal.lastUpdate = null;
    cal.paused = false;
    cal.update = function(){
        if(cal.paused){
            return;
        }
        if(ca.lastUpdate == null){
            cal.lastUpdate = Date.now();
            return;
        }
        cal.tick();
        cal.lastUpdate = Date.now();
    };
    cal.tick = function(){
        let now = Date.now();
        cal.accumulatedMillis += now - cal.lastUpdate;
        if(cal.accumulatedMillis >= TIME.MillisPerMinute){
            let minutes = cal.accumulatedMillis / TIME.MillisPerMinute;
            cal.accumulatedMillis = cal.accumulatedMillis % TIME.MillisPerMinute;
            cal.time.addMinutes(minutes);
        }
    };
    cal.pause = function(){
        cal.tick();
        cal.lastUpdate = null;
        cal.paused = true;
    };
    cal.resume = function(){
        cal.paused = false;
    };
    return cal;
};