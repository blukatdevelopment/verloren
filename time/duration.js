/*##############################################################################
# Time object
##############################################################################*/
TIME.Duration = {};
TIME.Duration.new = function(days, hours, minutes){
    let d = {};
    d.days = days;
    d.hours = hours;
    d.minutes = minutes;
    d.clone = function(){
        return TIME.Duration.new(d.days, d.hours, d.minutes);
    }
    d.addMinutes = function(minutes){
        d.minutes += Math.trunc(minutes);
        if(d.minutes > TIME.MinutesInHour){
            let hours = Math.trunc(d.minutes / TIME.MinutesInHour);
            d.addHours(hours);
            d.minutes = d.minutes % TIME.MinutesInHour;
        }
    };
    d.addHours = function(hours){
        d.hours += Math.trunc(hours);
        if(d.hours > TIME.HoursInDay){
            let days = Math.trunc(d.hours / TIME.HoursInDay);
            d.addDays(days);
            d.hours = d.hours % TIME.HoursInDay;
        }
    };
    d.addDays = function(days){
        d.days += days;
    };
    d.addDuration = function(dur){
        let ret = d.clone();
        ret.addMinutes(dur.minutes);
        ret.addHours(dur.hours);
        ret.addDays(dur.days);
        return ret;
    };
    return d;
};