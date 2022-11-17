const API_Key = "577b3f6d1dc74f8681611950221711"
const url = (city) => `https://api.weatherapi.com/v1/current.json?key=${API_Key}&q=${city}&aqi=no`

const form = document.getElementById("form")
const search = document.getElementById("search")
const main = document.getElementById("main")
const p = document.getElementById("p")


async function getWeather(city) {
	try{
	const response = await fetch(url(city))
	const responseData = await response.json();

	console.log(responseData)
	
	addWeather(responseData)

	} catch (error) {
		console.error(error);
	}

}	
function addWeather(data) {
	const temp_c = Math.floor(data.current.temp_c)
	const temp_f = Math.floor(data.current.temp_f)
	main.innerHTML = `${temp_c}°C`;
	const imagesrc = data.current.condition.icon
	const condition = data.current.condition.text
	p.innerHTML = `<img src="${imagesrc}"> ${condition} <img src="${imagesrc}">`

	const button = document.createElement("button");

	button.addEventListener("click", (e) => {
		e.preventDefault();

		if (main.innerHTML.includes("C")) {
			main.innerHTML = `${temp_f}°F`
		}
		else  {
		main.innerHTML = `${temp_c}°C`
		}
	});

	button.innerHTML = "°C / °F "

	const button_exist = document.querySelector("button")
	if (button_exist){
		button_exist.remove()	
	}
	main.insertAdjacentElement("afterend", button)
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const city = search.value;

    if (city) {
        getWeather(city);
    }
});
