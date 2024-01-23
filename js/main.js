const infoBtns = document.querySelectorAll('.info-dot')
const infoHints = document.querySelectorAll('.info-hint')

for (let btn of infoBtns) {
	btn.addEventListener('click', showHint)
}

function showHint(e) {
	e.stopPropagation()
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
	loop: true,
	freeMode: true,
	slidesPerView: 4,
	spaceBetween: 38,

	// Navigation arrows
	navigation: {
		nextEl: '#sliderNext',
		prevEl: '#sliderPrev',
	},
})
