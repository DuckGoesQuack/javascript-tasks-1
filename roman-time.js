var hours = process.argv[2];
var minutes = process.argv[3];

function toRoman(n) {
    var arabic = [10, 9, 5, 4, 1];
    var roman = ['X', 'IX', 'V', 'IV', 'I'];
    for (var i = 0; i < arabic.length; i++) {
        if(n < 1)
            return "";   
        if(n >= arabic[i]) {
            return roman[i] + toRoman(n - arabic[i]);        
        }
    }
}
if (hours > 23 || hours < 0 || minutes > 59 || minutes < 0)
        console.log("Wrong input, try again!");
else if (toRoman(hours) == '') console.log('00:'+toRoman(minutes));
    else if (toRoman(minutes) == '') console.log(toRoman(hours)+':00');
        else console.log(toRoman(hours)+':'+toRoman(minutes));
