export {capitalize, reverseString, calculator, caesarCipher, shiftUpper, shiftLower, arrayAvg, arrayMin, arrayMax, analyzeArray}
function capitalize(string) {
    const capitalizedLetter = string[0].toUpperCase()
    const rest = string.slice(1, string.length)
    return capitalizedLetter + rest
}
function reverseString(string){
    let reversedString = ""
    for (let i = string.length - 1; i > -1; i--){
        reversedString = reversedString + string[i]
    } return reversedString
}

const calculator = {
    add(first, second){
        let result = first + second
        return result
    },
    subtract(first, second){
        let result = first - second
        return result
    },
    divide(first, second){
        let result = first/second
        return result
    },
    multiply(first, second){
        let result = first * second
        return result
    }
}
function shiftUpper(codeChar, shiftFactor){
    let shiftedCode = codeChar + shiftFactor
    if (shiftedCode > 90 ){
        shiftedCode = shiftedCode - (90 - 64)
    } return shiftedCode
}
function shiftLower(codeChar, shiftFactor){
    let shiftedCode = codeChar + shiftFactor
    if (shiftedCode > 122){
        shiftedCode = shiftedCode - (122 - 96)
    } return shiftedCode

}
function caesarCipher(string, shiftFactor){
    let shiftedString = ""
    let shiftedChar = 0
    for (let i = 0; i < string.length; i++){
        let codeChar = string.charCodeAt(i)
        if (codeChar >= 64 && codeChar <= 90){
            shiftedChar = shiftUpper(codeChar, shiftFactor)
        } else if (codeChar > 96 && codeChar <  123){
            shiftedChar = shiftLower(codeChar, shiftFactor)
        } else {
            shiftedChar = codeChar
        }

        shiftedString = shiftedString + String.fromCharCode(shiftedChar)
    } return shiftedString
}
function arrayAvg(array){
    const sum = array.reduce((prev, cur) => 
        prev + cur, 0);
    const average = sum / array.length
    return average
}
function arrayMin(array){
    const min = array.reduce((prev, cur) => {
        if (prev > cur){
            return cur
        } else {
            return prev
        }
    }, array[0])
    return min
}
function arrayMax(array){
    const max = array.reduce((prev, cur) => {
        if (prev < cur){
            return cur
        } else {
            return prev
        }
    }, array[0])
    return max
}
function analyzeArray(array){
    return {
        average: arrayAvg(array),
        min: arrayMin(array),
        max: arrayMax(array),
        length: array.length
    }
}