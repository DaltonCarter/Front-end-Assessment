console.log('Goliath Online')

const colorBtn = document.querySelector('#color')
const placeBtn = document.querySelector('#place')
const ritualBtn = document.querySelector('#ritual')
let form = document.querySelector('form')


function colorAlert () {
    alert('I have three prefeered colors; Black, Red, and Orange...you know Flame colors.')
    console.log('Power Overwhelming!')
}

function placeAlert () {
    alert('Any forest or woodlands. I will also settle for a very leafy and green urban area. In short the place has to feel ALIVE.')
    console.log('Terror all Consuming!')
}

function ritualAlert () {
    alert('My favorite ritual? Which ever one it is that can take me out of this world and drop me into a DnD/Pathfinder world without costing me my life or soul.')
    console.log('Why all this singing!?')
}


function handleSubmit(evt) {
	evt.preventDefault();
	
	// console.log('form submit');
	alert('Thanks!! ...I think.')
}



form.addEventListener('submit', handleSubmit);
colorBtn.addEventListener('click', colorAlert)
placeBtn.addEventListener('click', placeAlert)
ritualBtn.addEventListener('click', ritualAlert)