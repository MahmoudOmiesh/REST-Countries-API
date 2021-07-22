export const themeBtn = document.querySelector(".header__toggle");
const themeSvg = themeBtn.querySelector(".themeSvg");
const searchSvg = document.querySelector(".filter__icon");
const modalSvg = document.querySelector(".modal__arrow");
const searchInput = document.querySelector(".filter__field");

export function changeTheme() {
	if (document.documentElement.dataset.theme == "dark") {
		document.documentElement.dataset.theme = "light";
		themeSvg.classList.add("light");
		searchSvg.classList.add("light");
		modalSvg.classList.add("light");
	} else {
		document.documentElement.dataset.theme = "dark";
		themeSvg.classList.remove("light");
		searchSvg.classList.remove("light");
		modalSvg.classList.remove("light");
	}
}

searchSvg.addEventListener("click", () => searchInput.focus());
