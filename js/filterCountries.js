import { countryNames, countryRegions } from "./displayCountries.js";
export const searchCountries = document.querySelector(".filter__field");
export const selectList = document.querySelector(".filter__select");

export function filterCountries(e) {
	const regex = new RegExp(`^${e.target.value.toLowerCase()}`);
	countryNames.forEach((name) => {
		const countryName = name.parentElement.parentElement;
		countryName.style.display = "none";
		if (name.textContent.toLowerCase().match(regex) != null)
			countryName.style.display = "block";
	});
}

export function filterRegions(e) {
	const selectedOption = selectList.options[selectList.selectedIndex].text;
	countryRegions.forEach((region) => {
		const regionName = region.textContent.split(" ")[1];
		const regionCountry = region.parentElement.parentElement;
		regionCountry.style.display = "none";
		if (regionName == selectedOption) regionCountry.style.display = "block";
	});
}
