// make an atomatic slider in the hero and when you click a button the automatic slider desactive itself

const image_containers = document.querySelectorAll(".slider__img");
let index_slider = 0;
let active_automatic_slider = true;

active_slider = (index_slider) => {

	if (active_automatic_slider == false) {
		return
	}

	image_containers.forEach(image => {
		image.classList.remove("slider__img--active")
	})

	image_containers[index_slider].classList.add("slider__img--active")
	index_slider++;

	if (index_slider == image_containers.length) {
		index_slider = 0;
	}

	setTimeout(() => { active_slider(index_slider) }, 4000);
}

active_slider(index_slider)
