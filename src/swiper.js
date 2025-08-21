document.addEventListener("DOMContentLoaded", function () {
	const swiper = new Swiper(".swiper-container", {
		loop: true,
		slidesPerView: 1,
		autoplay: {
			delay: 3000,
		},
		navigation: {
			nextEl: ".next-button",
			prevEl: ".prev-button",
		},
		breakpoints: {
			640: {
				slidesPerView: 2,
			},
			768: {
				centeredSlides: false,
				slidesPerView: 2,
				spaceBetween: 20,
			},
			1024: {
				centeredSlides: false,
				slidesPerView: 3,
				spaceBetween: 20,
			},
			1280: {
				slidesPerView: 4,
				spaceBetween: 30,
			},
		},
		on: {
			afterInit(swiper) {
				toggleNavWrapper(swiper);
			},
			resize(swiper) {
				toggleNavWrapper(swiper);
			},
			slideChange(swiper) {
				toggleNavWrapper(swiper);
			}
		}
	});

	function toggleNavWrapper(swiper) {
		const navWrapper = document.querySelector(".nav-wrapper");
		if (!navWrapper) return;

		// hide if not enough slides
		if (swiper.slides.length <= swiper.params.slidesPerView) {
			navWrapper.style.display = "none";
		} else {
			navWrapper.style.display = "flex"; // or block if you prefer
		}
	}
});
