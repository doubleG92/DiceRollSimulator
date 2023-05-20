const dices = document.getElementById('dice')
const button = document.getElementById('btn')
const addTheResult = document.getElementById('rollingResult')

const dicesNumbers = ['one', 'two', 'three', 'four', 'five', 'six']

let counter = 0

function clickForShuffle () {
    const groupOfDices = []

    for(let i = 0; i < dicesNumbers.length; i++) {
        const element = document.createElement('i')
        element.classList.add('fa-solid', `fa-dice-${dicesNumbers[i]}`)
        groupOfDices.push(element)
    }
}