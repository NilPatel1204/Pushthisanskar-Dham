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
					slidesPerView: 1.5,
					centeredSlides: true,
				},
				768: {
					centeredSlides: false,
					slidesPerView: 2,
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
		});
	});