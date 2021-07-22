export const countriesContainer = document.querySelector(".countries");
const filterContainer = document.querySelector(".filter");
const modal = document.querySelector(".modal");
const modalFlag = modal.querySelector(".modal__flag");
const modalTitle = modal.querySelector(".modal__title");
const modalPop = modal.querySelector(".pop");
const modalReg = modal.querySelector(".reg");
const modalCap = modal.querySelector(".cap");
const modalNat = document.querySelector(".nat");
const modalSubReg = document.querySelector(".subr");
const modalDom = document.querySelector(".dom");
const modalCur = document.querySelector(".cur");
const modalLanguage = document.querySelector(".lan");
const modalBorderCountry = document.querySelector("[data-bordercountries]");
const modalBackBtn = document.querySelector(".modal__button");

modalBackBtn.addEventListener("click", goBack);

export function showModal(e) {
	const country = e.target.classList.contains("country__flag")
		? e.target.parentElement
		: e.target.parentElement.parentElement;

	filterContainer.style.display = "none";
	countriesContainer.style.display = "none";
	modal.style.display = "block";
	modalFlag.src = country.querySelector(".country__flag").src;
	modalTitle.textContent = country.querySelector(".country__name").textContent;

	const modalPopText = document.createTextNode(
		country.querySelector(".pop").textContent.split(" ")[1]
	);
	const modalRegText = document.createTextNode(
		country.querySelector(".region").textContent.split(" ")[1]
	);
	const modalCapText = country
		.querySelector(".cap")
		.textContent.split(" ")
		.slice(1);
	modalPop.append(modalPopText);
	modalReg.append(modalRegText);
	modalCap.append(document.createTextNode(modalCapText.join(" ")));

	fetchExtraDetails(country);
}

async function fetchExtraDetails(country) {
	const res = await fetch(
		`https://restcountries.eu/rest/v2/name/${country
			.querySelector(".country__name")
			.textContent.toLowerCase()}?fields=nativeName;subregion;topLevelDomain;currencies;languages;borders`
	);
	const data = await res.json();
	showExtraDetails(data);
}

function showExtraDetails(data) {
	const modalNatText = document.createTextNode(data[0].nativeName);
	const modalSubrText = document.createTextNode(data[0].subregion);
	const modalDomText = document.createTextNode(data[0].topLevelDomain);
	const modalCurText = document.createTextNode(data[0].currencies[0].name);
	const modalLan = data[0].languages;
	let modalLanText = [];
	modalLan.forEach((lan) => {
		modalLanText.push(lan.name);
	});
	const modalBorder = data[0].borders;
	let modalBorderText = "";
	modalBorder.forEach((country) => {
		modalBorderText += `
		<li class="modal__borderCountry">
			<p>${country}</p>
		</li>`;
	});
	modalNat.append(modalNatText);
	modalSubReg.append(modalSubrText);
	modalDom.append(modalDomText);
	modalCur.append(modalCurText);
	modalLanguage.append(document.createTextNode(modalLanText.join(", ")));
	modalBorderCountry.innerHTML = modalBorderText;
	modalLanText = [];
	modalBorderText = "";
}

function goBack() {
	modal.style.display = "none";
	filterContainer.style.display = "flex";
	countriesContainer.style.display = "grid";
	modalPop.innerHTML = "<span>Population: </span>";
	modalReg.innerHTML = "<span>Region: </span>";
	modalCap.innerHTML = "<span>capital: </span>";
	modalNat.innerHTML = "<span>native name: </span>";
	modalSubReg.innerHTML = "<span>sub region: </span>";
	modalDom.innerHTML = "<span>top level domain: </span>";
	modalCur.innerHTML = "<span>currencies: </span>";
	modalLanguage.innerHTML = "<span>languages: </span>";
	modalBorderCountry.innerHTML = "";
}
