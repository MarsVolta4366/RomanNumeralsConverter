// Roman numeral converter
const numerals = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
]

function toRoman(number) {
    if(number > 4000) {
        return "Can't convert over 4,000"
    }
    let returnString = ""
    numerals.forEach((item) => {
        while(number >= item[1]) {
            returnString += item[0]
            number -= item[1]
        }
    })
    if(returnString === "") {
        return "Invalid input"
    }
    return returnString
}

function fromRoman(string) {
    let stringAsNumber = 0
    numerals.forEach((item) => {
        while(string.substr(0, item[0].length) == item[0]) {
            string = string.substr(item[0].length)
            stringAsNumber += item[1]
        }
    })
    if(string !== "") {
        return "Invalid input"
    } else if(stringAsNumber > 4000) {
        return "Can't convert over 4,000"
    }
    return stringAsNumber
}

const RomanNumerals = {
    toRoman,
    fromRoman
} 

let toRomanButton = document.getElementById("convertToRomanButton")
toRomanButton.addEventListener("click", () => {
    document.getElementById("result").textContent = RomanNumerals.toRoman(Number(document.getElementById("number").value))
    document.getElementById("number").value = ""    
})

let toNumberButton = document.getElementById("convertToNumberButton")
toNumberButton.addEventListener("click", () => {
    document.getElementById("resultToNumber").textContent = RomanNumerals.fromRoman(String(document.getElementById("romanNumerals").value))
    document.getElementById("romanNumerals").value = ""
})
