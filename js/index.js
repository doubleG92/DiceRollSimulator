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

    const randomShuffle = Math.floor(Math.random() * groupOfDices.length)

    dices.innerHTML = ""

    dices.appendChild(groupOfDices[randomShuffle])

    counter++

    const cloneTheShuffle = groupOfDices[randomShuffle].cloneNode(true)
    const liElement = document.createElement('li')
    const pElement = document.createElement('p')
    pElement.textContent = `Roll ${counter}`
    liElement.appendChild(pElement)
    liElement.appendChild(cloneTheShuffle)
    addTheResult.appendChild(liElement)

    dices.classList.remove('dice-animation')

    setTimeout(() => {
        dices.classList.add('dice-animation')
    })
}

button.addEventListener('click',clickForShuffle) 


const startBtn = document.getElementById('startBtn');
const welcomeWindow = document.getElementById('welcomeWindow');