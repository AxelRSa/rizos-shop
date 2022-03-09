// make an atomatic slider in the hero

const image_containers = document.querySelectorAll(".slider__img");
const slider_dots = document.querySelectorAll(".slider__dot")
let index_slider = -1;
let active_manual_slider = false;


activate_slider = () => {
	image_containers.forEach(image => {
		image.classList.remove("slider__img--active")
	})
	slider_dots.forEach(dot => {
		dot.classList.remove("slider__dot--active")
	})

	image_containers[index_slider].classList.add("slider__img--active")
	slider_dots[index_slider].classList.add("slider__dot--active")
}

loop_slider = () => {

	if (active_manual_slider == true) {
		return
	} else {

		if (index_slider >= image_containers.length - 1) {
			index_slider = 0;
		} else {
			index_slider++
		}

		activate_slider();
		setTimeout(() => { loop_slider() }, 4000);
	}
}

loop_slider()

// when you click a button the automatic slider desactive itself

const slider_arrow_left = document.querySelector(".slider__arrow-container--left")
const slider_arrow_right = document.querySelector(".slider__arrow-container--right")
let slider_dot_count = 0;

slider_arrow_left.onclick = () => { left_arrow_click() }
slider_arrow_right.onclick = () => { right_arrow_click() }
slider_dots.forEach(dot => {
	dot["my_slide"] = slider_dot_count;
	slider_dot_count++;
	dot.onclick = () => { slider_dot_click(dot) }
});

const left_arrow_click = () => {

	active_manual_slider = true
	index_slider -= 1;

	if (index_slider == -1) {
		index_slider = image_containers.length - 1
	}

	activate_slider()
}

const right_arrow_click = () => {
	active_manual_slider = true
	index_slider += 1;

	if (index_slider >= image_containers.length) {
		index_slider = 0
	}

	activate_slider()
}

const slider_dot_click = (dot) => {
	active_manual_slider = true

	index_slider = dot.my_slide

	activate_slider()
}