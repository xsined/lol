"use strict"

window.addEventListener('load', windowLoad);

function windowLoad() {

	document.body.classList.add('loaded');
	
	if(document.querySelector('.main-slider')){
		new Swiper('.main-slider', {
			speed: 2000,
			effect: "fade",
			autoplay:{
				delay: 3000
			},
			 pagination: {
    el: '.bullets_items',
    type: 'bullets',
    clickable: true
  			},
		});
	}
	document.addEventListener("click", documentActions);

function documentActions(e) {

	const targetElement = e.target;

	if(targetElement.closest('.nav-popular_item')) {

	const tabNavItem = targetElement.closest('.nav-popular_item');
		if (!tabNavItem.classList.contains('active')){
			const activeTabNavItem = document.querySelector('.nav-popular_item.active');
			activeTabNavItem.classList.remove('active');
			tabNavItem.classList.add('active');

			const tabItems = document.querySelectorAll('.popular_tab');
			const activeTabItem = document.querySelector('.popular_tab.active');

			activeTabItem.classList.remove('active');
			tabItems[getIndex(tabNavItem)].classList.add('active');
		}
	}
}

function getIndex(el){
	return Array.from(el.parentNode.children).indexOf(el);
}

}


/*........*/


