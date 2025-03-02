import {capitalize, reverseString, calculator, caesarCipher, shiftUpper, shiftLower, arrayAvg, arrayMin, arrayMax, analyzeArray} from "./main.js"
test('first letter capitalized', () => {
    expect(capitalize("hello")).toBe("Hello")
});
test('string is reversed', () => {
    expect(reverseString("hello")).toBe("olleh")
})
test('adds two numbers', () => {
    expect(calculator.add(1,4)).toBe(5)
})
test('subtracts two numbers', () => {
    expect(calculator.subtract(1,4)).toBe(-3)
})
test('divides two numbers', () => {
    expect(calculator.divide(1,4)).toBe(1/4)
})
test('multiplies two numbers', () => {
    expect(calculator.multiply(1,4)).toBe(4)
})

test("shifts all letters by 3 but stays within 97-122 lowercase range", () => {
    expect(shiftLower(122, 3)).toBe(99)
})
test("shifts all letters by 3 but stays within 65-95 uppercase range", () => {
    expect(shiftUpper(90, 3)).toBe(67)
})
test("shifts all leters by 3", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc")
})
test("shifts all capitalized leters by 3", () => {
    expect(caesarCipher("XYZ", 3)).toBe("ABC")
})
test("shifts all letters in a sentence containing a capital letter and space", () => {
    expect(caesarCipher("Hello sir", 3)).toBe("Khoor vlu")
})
test("shifts all letters in a sentence containing capital letters, spaces and punctuations", () => {
    expect(caesarCipher("Hello sir, tea?", 3)).toBe("Khoor vlu, whd?")
})
test("returns 24 for an array of [1,8,3,4,2,6]", () => {
    expect(arrayAvg([1,8,3,4,2,6])).toBe(4)
})
test("returns 1 for an array of [1,8,3,4,2,6]", () => {
    expect(arrayMin([1,8,3,4,2,6])).toBe(1)
})
test("returns 1 for an array of [8,3,1,4,2,6]", () => {
    expect(arrayMin([8,3,1,4,2,6])).toBe(1)
})
test("returns 8 for an array of [1,8,3,4,2,6]", () => {
    expect(arrayMax([1,8,3,4,2,6])).toBe(8)
})
test ("returns obj with avg 4 , min 1, max 8 and length 6 for [1,8,3,4,2,6]", () => {
    expect(analyzeArray([1,8,3,4,2,6])).toStrictEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    })
});
