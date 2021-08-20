// Given a time in -hour AM/PM format, convert it to military (24-hour) time.
// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

function timeConversion(s) {
    // Write your code here
    let amPm = s.charAt(8)
    let newHour = "";
    if(amPm === "A"){
        if(s.substring(0,2) === "12"){
            newHour="00"
        }else{
            newHour=s.substring(0,2)
        }
        console.log(newHour + s.substring(2,8))
    }
    else{
        if(s.substring(0,2) === "12"){
            newHour=s.substring(0,2)
        }else{
            newHour=parseInt(s.substring(0,2),10) +12
        }
        console.log(newHour + s.substring(2,8))
    }
}

timeConversion('07:05:45PM')