const infoBtns = document.querySelectorAll('.info-dot')
const infoHints = document.querySelectorAll('.info-hint')

for (let btn of infoBtns) {
	btn.addEventListener('click', showHint)
}

function showHint(e) {
	e.stopPropagation()
	for (let hint of infoHints) {
		hint.classList.add('none')
	}
	this.parentNode.querySelector('.info-hint').classList.toggle('none')
}

// Закриваю підказки по кліку по всьому документу
document.addEventListener('click', closeHints)

function closeHints() {
	for (let hint of infoHints) {
		hint.classList.add('none')
	}
}

// Забороняю всплиття події кліка при кліку на підказки
for (let hint of infoHints) {
	hint.addEventListener('click', e => {
		e.stopPropagation()
	})
}

// Swiper slider
const swiper = new Swiper('.swiper', {
	breakpoints: {
		640: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 4,
			spaceBetween: 40,
		},
		1024: {
			slidesPerView: 5,
			spaceBetween: 50,
		},
	},
	direction: 'horizontal',
	// loop: true,
	// freeMode: true,
	slidesPerView: 4,
	spaceBetween: 38,

	// Navigation arrows
	navigation: {
		nextEl: '#sliderNext',
		prevEl: '#sliderPrev',
	},
})

// Tabs
const tabBtns = document.querySelectorAll('[data-tab]')
const tabsProducts = document.querySelectorAll('[data-tab-value]')

for (let btn of tabBtns) {
	btn.addEventListener('click', function () {
		for (let btn of tabBtns) {
			btn.classList.remove('tab-controls__btn--active')
		}

		this.classList.add('tab-controls__btn--active')

		// Отримуємо значення категорії товарів які потрібно залишити
		// Відобразити потрібні товари по категоріях і ховаю всі непотріні
		for (let tab of tabsProducts) {
			if (this.dataset.tab === 'all') {
				tab.classList.remove('none')
			} else {
				if (tab.dataset.tabValue === this.dataset.tab) {
					tab.classList.remove('none')
				} else {
					tab.classList.add('none')
				}
			}
		}
		swiper.update()
	})
}

// mobile navigation .mobile-nav-wrapper--open
const mobileNavOpen = document.querySelector('#open-mobile-nav')
const mobileNavClose = document.querySelector('#close-mobile-nav')
const mobileNav = document.querySelector('#mobile-nav')

mobileNavOpen.onclick = function () {
	mobileNav.classList.add('mobile-nav-wrapper--open')
}
mobileNavClose.onclick = function () {
	mobileNav.classList.remove('mobile-nav-wrapper--open')
}
