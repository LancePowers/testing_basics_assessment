function letterGrader(num) {
    if (validateNum(num)) {
        switch (true) {
        case (num < 58):
            return 'F';
        case (num < 60):
            return 'F+';
        case (num < 63):
            return 'D-';
        case (num < 68):
            return 'D';
        case (num < 70):
            return 'D+';
        case (num < 73):
            return 'C-';
        case (num < 78):
            return 'C';
        case (num < 80):
            return 'C+';
        case (num < 83):
            return 'B-';
        case (num < 88):
            return 'B';
        case (num < 90):
            return 'B+';
        case (num < 93):
            return 'A-';
        case (num < 98):
            return 'A';
        case (num < 100):
            return 'A+';
        }
    } else {
        return 'Please provide only test scores from 0 to 100'
    }

}

function averageScore(arr) {
    if (validateArr(arr)) {
        var total = 0;
        arr.forEach(function (num) {
            total += num;
        })
        return total / arr.length;
    } else {
        return 'Please provide only test scores from 0 to 100'
    }

}

function medianScore(arr) {
    if (validateArr(arr)) {
        var count = arr.length / 2
        if (arr.length % 2 === 0) {
            return (arr[count] + arr[count - 1]) / 2;
        } else {
            return arr[Math.floor(count)];
        }
    } else {
        return 'Please provide only test scores from 0 to 100'
    }

}

function modeScore(arr) {
    if (validateArr(arr)) {
        var max = 0;
        var count = 0;
        var result = 0;
        var rra = arr.sort(function (a, b) {
            return a - b
        });
        rra.forEach(function (num, index, arr) {
            if (num === arr[index - 1]) {
                count++;
            } else {
                count = 1;
            }
            if (count > max) {
                max = count;
                result = num;
            }
        })
        return result;
    } else {
        return 'Please provide only test scores from 0 to 100'
    }

}

function validateNum(num) {
    if (typeof num === 'number' && num > 0 && num < 101) {
        return true;
    } else {
        return false;
    }
}

function validateArr(arr) {
    var result = true;
    arr.forEach(function (num) {
        if (!validateNum(num)) {
            result = false;
        }

    })
    return result;
}