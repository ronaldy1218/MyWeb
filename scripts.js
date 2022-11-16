const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
		'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
	}
};

fetch('https://wordsapiv1.p.rapidapi.com/words/hatchback/typeOf', options)
	.then(response => (response.json()))
	.then(response => console.log(response))
	.catch(err => console.error(err));