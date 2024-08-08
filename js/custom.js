document.querySelector('.theme_btn').addEventListener('click', () => {
	if (document.documentElement.getAttribute('data-theme') == 'dark') {
		document.documentElement.setAttribute('data-theme', 'light')
	}
	else {
		document.documentElement.setAttribute('data-theme', 'dark')
	}
})


// Accordian JS
const accordions = document.querySelectorAll(".accordion");

const openAccordion = (accordion) => {
	const content = accordion.querySelector(".accordion__content");
	accordion.classList.add("accordion__active");
	content.style.maxHeight = content.scrollHeight + "px";
};

const closeAccordion = (accordion) => {
	const content = accordion.querySelector(".accordion__content");
	accordion.classList.remove("accordion__active");
	content.style.maxHeight = null;
};

accordions.forEach((accordion) => {
	const intro = accordion.querySelector(".accordion__intro");
	const content = accordion.querySelector(".accordion__content");
	const title = accordion.querySelector(".accordion_title");
	const node = document.createElement("span");
	
	title.appendChild(node);

	intro.onclick = () => {
		if (content.style.maxHeight) {
			closeAccordion(accordion);
		} else {
			accordions.forEach((accordion) => closeAccordion(accordion));
			openAccordion(accordion);
		}
	};
});
