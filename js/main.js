// change navbar style on scroll 

window.addEventListener('scroll',()=>{
	document.querySelector('nav').classList.toggle('window-scroll', window.scrollY>0)
})



// show/hide faq answer
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
	faq.addEventListener('click', () => {
		faq.classList.toggle('open');

		//change icon
		const icon = faq.querySelector('.faq__icon i');
		if (icon.className =='uil uil-plus'){
			icon.className = 'uil uil-minus'
		}
		else{
			icon.className = 'uil uil-plus'
		}

	})
})

//show/hide nav menu
const menu = document.querySelector('.nav__menu');
const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');

menuBtn.addEventListener('click', () => {
	menu.style.display = "flex";
	closeBtn.style.display = "inline-block";
	menuBtn.style.display = "none";
})

closeBtn.addEventListener("click", () =>{
	menu.style.display = "none";
	menuBtn.style.display = "block";
	closeBtn.style.display = "none";
})

//scroll to top
$(".scrolltop").click(function () {
	$("html, body").animate({ scrollTop: 0 }, "slow");
	return false;
});