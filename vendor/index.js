$(function () {
	$('[data-toggle="tooltip"]').tooltip()
})
$(document).ready(function () {
	$("#aboutbtn").click(function () {

		$('.toggle').css('border', '5px solid #000')
		$("html, body").animate({
			scrollTop: 0
		}, 1000);
		return false;
	});
	$("#skillsbtn").click(function () {
		$('.toggle').css('border', '5px solid #fff')
		$("html, body").animate({
			scrollTop: $("#skills").offset().top
		}, 1000);
		return false;
	});
	$("#educationbtn").click(function () {
		$('.toggle').css('border', '5px solid #fff')
		$("html, body").animate({
			scrollTop: $("#education").offset().top
		}, 1000);
		return false;
	});
	$("#projectbtn").click(function () {
		$('.toggle').css('border', '5px solid #fff')
		$("html, body").animate({
			scrollTop: $("#projects").offset().top
		}, 1000);
		return false;
	});


	$("#workbtn").click(function () {
		$('.toggle').css('border', '5px solid #fff')
		$("html, body").animate({
			scrollTop: $("#workexp").offset().top
		}, 1000);
		return false;
	});

	$("#certbtn").click(function () {
		$('.toggle').css('border', '5px solid #fff')
		$("html, body").animate({
			scrollTop: $("#cert").offset().top
		}, 1000);
		return false;
	});

	var $win = $(window);
	var winH = $win.height();   // Get the window height.

	$win.on("scroll", function () {
		if ($(this).scrollTop() > winH ) {
			$('.toggle').css('border', '5px solid #fff')
		} else {
			$('.toggle').css('border', '5px solid #000')
		}
	}).on("resize", function(){ // If the user resizes the window
	winH = $(this).height(); // you'll need the new height value
	});
});



document.addEventListener('DOMContentLoaded', () => {
	let
		togglebtn = document.querySelector('.toggle'),
		navcontainer = document.querySelector('.nav-container'),
		links = document.querySelectorAll('.navigation ul li a'),
		maincontent = document.querySelector('.main-content'),
		reveals = document.querySelectorAll('.reveal')



	window.addEventListener('scroll', function () {
		var winheight = window.innerHeight;
		reveals.forEach((rev, indx) => {
			
			var revealtop = rev[indx].getBoundingClientRect().top;

			var revealpoint = 150;

			if (revealtop < winheight - revealpoint){
				rev[indx].classList.add('active')
			}
			else{
				rev[indx].classList.remove('active')
			}	
		})
	})
	if(window.innerWidth > 599){
		links.forEach(link => {
			link.onmouseenter = function () {
				if (navcontainer.classList.contains('min')) {
					navcontainer.classList.add('expand')
				}
			}
			link.onmouseleave = function () {

				if (navcontainer.classList.contains('min')) {
					navcontainer.classList.remove('expand')
				}
			}
		})
	}else{
		links.forEach(link => { 
				link.onmouseleave = function(){} 
				link.onmouseenter = function () {}
		})
	}
	if (window.innerWidth < 600 && !togglebtn.classList.contains('min')){
		maincontent.style.marginLeft = "60px";
	}
	else if (window.innerWidth > 599 && !togglebtn.classList.contains('min')){
		maincontent.style.marginLeft = "260px";
	}

	window.addEventListener('resize', function(){
		if(window.innerWidth > 599){
			links.forEach(link => {
				link.onmouseenter = function () {
					if (navcontainer.classList.contains('min')) {
						navcontainer.classList.add('expand')
					}
				}
				link.onmouseleave = function () {

					if (navcontainer.classList.contains('min')) {
						navcontainer.classList.remove('expand')
					}
				}
			})
		}else{
			links.forEach(link => { 
				link.onmouseleave = function(){} 
				link.onmouseenter = function () {}
				}
			)
		}

		if (window.innerWidth < 600 && !togglebtn.classList.contains('min')){
			maincontent.style.marginLeft = "60px";
		}
			
		else if (window.innerWidth > 599 && !togglebtn.classList.contains('min')){
			maincontent.style.marginLeft = "260px";
		};
	})
	
	

	togglebtn.addEventListener('click', function () {

		this.classList.toggle('min')
		navcontainer.classList.toggle('min')

		if (this.classList.contains('min')) {
			maincontent.style.marginLeft = "60px";
			togglebtn.setAttribute("data-bs-original-title", "Expand")

		} else {
			maincontent.style.marginLeft = "260px";
			togglebtn.setAttribute("data-bs-original-title", "Minimize")
		}

	})

	

	const sr = ScrollReveal({
		origin: 'bottom',
		duration: 1000,
		easing: 'ease-in',													
		delay: 300,
		reset: true
	});
	sr.reveal('.cm-card', { opacity: 0,origin: 'left', distance: '300px', duration: 1500, delay: 200});
	sr.reveal('.moon', { opacity: 0,origin: 'right', distance: '300px', duration: 1500, delay: 200});
	
	sr.reveal('.edu-info-right', {opacity: 0,  origin: 'right', distance: '400px', duration: 1000, delay: 100})
	sr.reveal('.edu-icon-right', {opacity: 0,  origin: 'right', distance: '100px', duration: 1000, delay: 100})

	sr.reveal('.edu-info-left', { opacity: 0, origin: 'left', distance: '400px', duration: 1000, delay: 100})
	sr.reveal('.edu-icon-left', { opacity: 0, origin: 'left', distance: '100px', duration: 1000, delay: 100})

	sr.reveal('#skills .sec-title, #education .sec-title, #projects .sec-title, #workexp .sec-title, #cert .sec-title', { origin: 'top', distance: '200px',opacity: 0, delay: 300});

	sr.reveal('.award-container', { origin: 'center', duration: 1000, opacity: 0, delay: 100});
	sr.reveal('.skill', { origin: 'bottom', distance: '50px', duration: 1000, opacity: 0, delay: 50});
})