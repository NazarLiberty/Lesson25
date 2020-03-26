// 0
let number = Number(prompt("Type number 0-100"))
let numberInWord_1_19 = function (number) {
    switch (number) {
        case 1: return "one"
        case 2: return "two"
        case 3: return "three"
        case 4: return "four"
        case 5: return "five"
        case 6: return "six"
        case 7: return "seven"
        case 8: return "eight"
        case 9: return "nine"
        case 10: return "ten"
        case 11: return "eleven"
        case 12: return "twelve"
        case 13: return "thirteen"
        case 14: return "fourteen"
        case 15: return "fiveteen"
        case 16: return "sixteen"
        case 17: return "seventeen"
        case 18: return "eighteen"
        case 19: return "nineteen"
    }
}
let numberInWord_20_99 = function (number) {
    switch (number) {
        case 2: return "twenty"
        case 3: return "thirty"
        case 4: return "fourty"
        case 5: return "fifty"
        case 6: return "sixty"
        case 7: return "seventy"
        case 8: return "eighty"
        case 9: return "ninety"
    }
}
let numberInWord = function (number) {
    if (number < 20) {
        return numberInWord_1_19(number)
    }
    else if (number >= 20 && number < 100) {
        let firstDigit = Math.floor(number / 10);
        let lastDigit = number % 10;

        if (lastDigit == 0) return numberInWord_20_99(firstDigit);
        else return `${numberInWord_20_99(firstDigit)} ${numberInWord_1_19(lastDigit)}`
    }
}
alert(numberInWord(number))


1
let _1_userNumber1 = Number(prompt("Type first number"))
let _1_userNumber2 = Number(prompt("Type second number"))


let numberMatch = function (_1_userNumber1, _1_userNumber2) {
    let result;
    if (_1_userNumber1 < _1_userNumber2) result = "First number is lower than second. Get your -1"
    else if (_1_userNumber1 > _1_userNumber2) result = "First number is highter than second. Get your 1"
    else result = "Both numbers are equal. Get your  0"
    return result;
}
alert(numberMatch(_1_userNumber1, _1_userNumber2))

// 2
let _2_userNumber = Number(prompt("Type your number to count a factorial"));
let factorialCalc = function (number) {
    loopRounds = number;
    for (let i = 1; i < loopRounds; i++) {
        number *= i;
    }
    return `${number} is factorial by your number (${loopRounds})`;
}
alert(factorialCalc(_2_userNumber));

// 3
// let _3_userNumberMemory = "";
// for (i = 1; i <= 3; i++) {
//     _3_userNumber = prompt(`Type three numbers, #${i}`)
//     _3_userNumberMemory += _3_userNumber
// }
// alert(_3_userNumberMemory)
let _3_userNumber1 = prompt("Type first number")
let _3_userNumber2 = prompt("Type second number")
let _3_userNumber3 = prompt("Type third number")
let numberSticker = function (num1, num2, num3) {
    return `${num1}${num2}${num3}`
}
alert(numberSticker(_3_userNumber1, _3_userNumber2, _3_userNumber3))

4
let rectLength = Number(prompt("Type the length of rectangle"))
let rectWidth = Number(prompt("Type the width of rectangle"))
let areaCalc = function (length, width) {
    if (isNaN(length) || length == 0) {
        perimetr = width * 4;
        return `You were not typed the length of your rectangle.
        Calculating perimeter with ${width} cm sides...
        Perimeter is ${perimetr} cm`;
    }
    else if (isNaN(width) || width == 0) {
        perimetr = length * 4;
        return `You were not typed the width of your rectangle.
        Calculating perimeter with ${length} cm sides...
        Perimeter is ${perimetr} cm`;
    }
    else return `The area of your rectangle is ${length * width} cm with:
     ${width} cm width and ${length} cm length`
}
alert(areaCalc(rectLength, rectWidth))

// 5
let _5_userNumber = +prompt("№5 Type your number to check his badassness")
let badAssNumberChecker = function (num) {
    divisorMemory = 0;
    for (let i = num - 1; i >= 1; i--) {
        if (num % i == 0) {
            divisorMemory += i;
        }
    }
    if (divisorMemory == num) return num;
    else return "Meh, nothing special..."
}
alert(badAssNumberChecker(_5_userNumber));

// 6
let _6_userMin = prompt("№6 Type min number of range")
let _6_userMax = prompt("№6 Type max number of range")
let perfectNumberDetector = function (min, max) {
    let perfectNumbersList = "";
    for (let i = min; i <= max; i++) {
        if (i === badAssNumberChecker(i)) {
            perfectNumbersList += ` ${badAssNumberChecker(i)} |`;
        }
        else continue;
    }
    return perfectNumbersList;
}
alert(`Perfect numbers from ${_6_userMin} to ${_6_userMax} is ${perfectNumberDetector(_6_userMin, _6_userMax)}`);


// // 7
let userHours = +prompt("№7 Type the hour")
let userMinutes = +prompt("№7 Type the minutes")
let userSeconds = +prompt("№7 Type the seconds")


let timeOverturning = function (hour, minut, second) {
    switch (true) {
        case isNaN(hour): return "Type only numbers please"
        case hour == 0: hour = "00"; break;
        case hour == 1: hour = "01"; break;
        case hour == 2: hour = "02"; break;
        case hour == 3: hour = "03"; break;
        case hour == 4: hour = "04"; break;
        case hour == 5: hour = "05"; break;
        case hour == 6: hour = "06"; break;
        case hour == 7: hour = "07"; break;
        case hour == 8: hour = "08"; break;
        case hour == 9: hour = "09"; break;
        default: hour == hour;

    }
    switch (true) {
        case isNaN(minut): return "Type only numbers please"
        case minut == 0: minut = "00"; break;
        case minut == 1: minut = "01"; break;
        case minut == 2: minut = "02"; break;
        case minut == 3: minut = "03"; break;
        case minut == 4: minut = "04"; break;
        case minut == 5: minut = "05"; break;
        case minut == 6: minut = "06"; break;
        case minut == 7: minut = "07"; break;
        case minut == 8: minut = "08"; break;
        case minut == 9: minut = "09"; break;
        case (minut > 60): return `Time's minutes can be maximum 60th, your value is more than 60 min. Try again`
        default: minut == minut;
    }
    switch (true) {
        case isNaN(second): return "Type only numbers please"
        case second == 0: second = "00"; break;
        case second == 1: second = "01"; break;
        case second == 2: second = "02"; break;
        case second == 3: second = "03"; break;
        case second == 4: second = "04"; break;
        case second == 5: second = "05"; break;
        case second == 6: second = "06"; break;
        case second == 7: second = "07"; break;
        case second == 8: second = "08"; break;
        case second == 9: second = "09"; break;
        case (second > 60): return `Time's seconds can be maximum 60th, your value is more than 60 sec. Try again`
        default: second == second;
    }
    return `${hour}:${minut}:${second}`;
}
alert(timeOverturning(userHours, userMinutes, userSeconds))

// // 8
userHours = +prompt("№8 Type the hour")
userMinutes = +prompt("№8 Type the minutes")
userSeconds = +prompt("№8 Type the seconds")

let timeInSeconds = function (hour, minut, second) {
    let correctTime = true;
    //  timeOverturning(userHours, userMinutes, userSeconds) !== "Type only numbers please" &&
    //     timeOverturning(userHours, userMinutes, userSeconds) !== `Time's hour can be maximum 24th, your value is more than 24 hrs. Try again` &&
    //     timeOverturning(userHours, userMinutes, userSeconds) !== `Time's minutes can be maximum 60th, your value is more than 60 min. Try again` &&
    //     timeOverturning(userHours, userMinutes, userSeconds) !== `Time's seconds can be maximum 60th, your value is more than 60 sec. Try again`;
    if (correctTime == true) {
        hourInSeconds = hour * (60 * 60)
        minutesInSeconds = minut * 60;
        seconds = hourInSeconds + minutesInSeconds + second;
        return seconds;
    }
    else return timeOverturning(userHours, userMinutes, userSeconds);
}
alert(timeInSeconds(userHours, userMinutes, userSeconds))

// // 9
let _9_userSeconds = +prompt("№9 - Type ammount of seconds")
let _9_hours = 0;
let _9_minutes = 0;
let secondsInTime = function (seconds) {
    let _9_seconds;
    _9_seconds = seconds;
    if (isNaN(seconds)) return "Please type seconds (In numbers, not words!!!)"
    for (let i = seconds; i > 59; i--) {
        if (i % 60 == 0) {
            _9_minutes++;
            seconds -= 60;
        }
    }
    for (let i = _9_minutes; i > 59; i--) {
        if (i % 60 == 0) {
            _9_hours++;
            _9_minutes -= 60;
        }
    }
    return `${_9_seconds} seconds is ${_9_hours} hours ${_9_minutes} minutes and ${seconds} seconds
${timeOverturning(_9_hours, _9_minutes, seconds)}`

}
alert(secondsInTime(_9_userSeconds))

// 10
let minHours = +prompt("Type hours of first date")
let minMinutes = +prompt("Type minutes of first date")
let minSeconds = +prompt("Type seconds of first date")

let maxHours = +prompt("Type hours of second date")
let maxMinutes = +prompt("Type minutes of second date")
let maxSeconds = +prompt("Type seconds of second date")

alert(`Your first time:
${timeInSeconds(minHours, minMinutes, minSeconds)}
Your second time:
${timeInSeconds(maxHours, maxMinutes, maxSeconds)}`)

let timeCompare = function (secondsTime1, secondsTime2) {
    secondsTime1 = timeInSeconds(minHours, minMinutes, minSeconds);
    secondsTime2 = timeInSeconds(maxHours, maxMinutes, maxSeconds);
    if (secondsTime1 > secondsTime2) return `The diffrence between two times is ${secondsInTime(secondsTime1 - secondsTime2)}`;
    else if (secondsTime1 < secondsTime2) return `The diffrence between two times is ${secondsInTime(secondsTime2 - secondsTime1)}`;
}

alert(timeCompare(timeInSeconds(minHours, minMinutes, minSeconds)), (timeInSeconds(maxHours, maxMinutes, maxSeconds)));