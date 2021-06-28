/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.getElementsByTagName("section");
const navBarList = document.getElementById("navbar_list");
const header = document.getElementById("header");
const topBtn = document.getElementById("topBtn");

// An object containing all nav links
const navBarItems = {};

let activeSection;
let activeNav;

// Timeout container
let t;
let navHidden = false;

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// sets active section and active nav item
const setActive = (section) => {
	// remove active classes from old section
	if (activeSection != undefined && activeNav != undefined) {
		activeSection.classList.remove("your-active-class");
		activeNav.classList.remove("active");
	}

	// set the section and its navbar item as the new active objects
	activeSection = section;
	activeNav = navBarItems[section.id];
	activeSection.classList.add("your-active-class");
	activeNav.classList.add("active");
}


// hides navigation bar
const hideNav = () => {
	let height = header.offsetHeight;
	header.style.top = `${-height}px`;
	navHidden = true;
}

// shows navigation bar
const showNav = () => {
	header.style.top = 0;
	navHidden = false;
}

// starts timeout to hide navigation bar
const startTimeout = () => {
	t = setTimeout(() => hideNav(), 1500);
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const buildNav = () => {
	for(section of sections) {
		let id = section.id;
		let dataNav = section.getAttribute("data-nav");
		let navItem = document.createElement("li");
		navItem.classList.add("nav-item")
		navItem.innerHTML = `<a class="nav-link" href="#${id}">${dataNav}</a>`;

		navBarItems[id] = navItem;
		navBarList.appendChild(navItem);
	}
}

// adds class 'active' to section when near top of viewport
const checkActiveSection = () => {
	for(section of sections) {
		const y = section.getBoundingClientRect().top;
	    if (((y <= 300 && y > 0) || (y >= -250 && y < 0)) && activeSection !== section) { // checks if a section gets within active range
	    	setActive(section);
	    } 
	}
}

// scroll response fuction
const scrollResp = () => {
	const y = window.pageYOffset
	
	if (navHidden) {
		showNav();
	}
	clearTimeout(t);
	checkActiveSection();

	// if not at top of page start timeout
	if (y !== 0) {
		startTimeout();
	}

	// show topBtn on scroll down
	if (y > 500) {
		topBtn.style.display = "block";
	} else {
		topBtn.style.display = "none";
	}
}

// Scroll to top
const toTop = () => {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

/**
 * End Main Functions
 * Begin Events
 * 
*/


// Build menu 
buildNav();

// listens to scrolls by user
document.addEventListener("scroll", scrollResp);

// scroll to top
topBtn.addEventListener("click", toTop);