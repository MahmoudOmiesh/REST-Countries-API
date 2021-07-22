const countriesContainer = document.querySelector(".countries");
export let countryNames;
export let countryRegions;
let countriesHTML = "";

export async function getData() {
	const res = await fetch(
		"https://restcountries.eu/rest/v2/all?fields=name;capital;region;population;flag"
	);
	const data = await res.json();

	renderCountries(data);
}

function renderCountries(data) {
	data.forEach((country) => {
		countriesHTML += `
    <div class="country">
      <img src="${country.flag}" alt="${country.name} flag" class="country__flag" />
      <div class="country__facts">
        <h3 class="country__name">${country.name}</h3>
        <p class="country__fact pop"><span>Population: ${country.population}</span></p>
        <p class="country__fact region"><span>Region: ${country.region}</span></p>
        <p class="country__fact cap"><span>Capital: ${country.capital}</span></p>
      </div>
	  </div>
    `;
	});

	countriesContainer.innerHTML = countriesHTML;
	countryNames = document.querySelectorAll(".country__name");
	countryRegions = document.querySelectorAll(".region");
}
