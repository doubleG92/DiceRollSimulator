const dices = document.getElementById('dice')
const button = document.getElementById('btn')
const addTheResult = document.getElementById('rollingResult')

const diceSound = document.getElementById('diceSound')
const diceSixSound = document.getElementById('diceSixSound')
const diceOneSound = document.getElementById('diceOneSound')
const openingSound = document.getElementById('welcomeSound')
const audioElements = document.querySelectorAll("audio")

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

    if (!audioElements.paused) {
        audioElements.forEach(audio => {
            audio.pause();
            audio.currentTime = 0;
        });
    }

    if (dicesNumbers[randomShuffle] === 'six') {
        diceSixSound.play()
    }else if (dicesNumbers[randomShuffle] === 'one') {
        diceOneSound.play()
    }else {
        diceSound.play()
    }
}

button.addEventListener('click',clickForShuffle) 

const startBtn = document.getElementById('startBtn');
const welcomeWindow = document.getElementById('welcomeWindow');

startBtn.addEventListener('click', function() {
    welcomeWindow.style.display = "none"
    openingSound.play()
})