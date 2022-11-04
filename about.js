console.log("hello world");
console.log('Goliath Online')



function handleSubmit(evt) {
	evt.preventDefault();
	
	// console.log('form submit');
	alert('Your form has been submitted successfully!!')
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

function duckHover(event) {
	alert("*Squeeky* You are quite curious! You'll go places with a good healthy curiosity *Squeeker*. I am the terror that flaps in the night! *Squeekin*")
}

document.querySelector('img').addEventListener('mouseover', duckHover)