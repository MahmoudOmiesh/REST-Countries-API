import { themeBtn, changeTheme } from "./themeToggle.js";
import { getData } from "./displayCountries.js";
import {
	searchCountries,
	filterCountries,
	selectList,
	filterRegions,
} from "./filterCountries.js";
import { countriesContainer, showModal } from "./showDeatils.js";

document.addEventListener("DOMContentLoaded", getData); //fetch data and display to ui
themeBtn.addEventListener("click", changeTheme); // Light & Dark modes
searchCountries.addEventListener("input", filterCountries); // search countries filteration
selectList.addEventListener("change", filterRegions); // filter countries by region
countriesContainer.addEventListener("click", (e) => {
	if (
		e.target.classList.contains("country__flag") ||
		e.target.classList.contains("country__name")
	)
		showModal(e);
});
