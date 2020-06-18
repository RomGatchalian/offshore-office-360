// Client Carousel
$(document).ready(function(){
    $('.clients-logo').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [
			{
				breakpoint: 561,
				settings: { slidesToShow: 3 }
        	},
			{
				breakpoint: 481,
				settings: { slidesToShow: 2 }
        	},
			{
				breakpoint: 321,
				settings: { slidesToShow: 1 }
        	}			
		]
    });
});

$('.services-dropdown').select2({
	placeholder: "What services would you like to inquire about",
	containerCssClass: "form-control",
	allowClear: true
});

// Slide Menu
smoothScroll.init();
$(document).ready(function() {
	$('.menu-link').menuFullpage({
		side:"right",
		menuWidth:"100%",
	});
});

// Add Class onScroll (Header)
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 200) {
        $("header").addClass("append");
    } else {
        $("header").removeClass("append");
    }
	
	if (scroll >= 400) {
		$(".floaters").addClass("show");
    } else {
		$(".floaters").removeClass("show");
    }
});

//Loader
$(window).load(function() {
	// Animate loader off screen
	$(".se-pre-con").fadeOut("slow");;
});

// Change text on collapse
$('.btn-more').click(function() {
	$(this).text(function(i,old) {
		return old=='Read More' ?  'Read Less' : 'Read More';
	});
});

// ScrollSpy
$('body').scrollspy({ offset: 100 })
var scroll = new SmoothScroll('a[href*="#"]', {
	offset: 100,
	speed: 1000
});

// ScrollReveal
ScrollReveal({ distance: '60px', delay: '200', duration: 1000, });
ScrollReveal().reveal('.sr-in');
ScrollReveal().reveal('.sr-up', 	{ origin: 'bottom' });
ScrollReveal().reveal('.sr-down', 	{ origin: 'top' });
ScrollReveal().reveal('.sr-left', 	{ origin: 'right' });
ScrollReveal().reveal('.sr-right', 	{ origin: 'left' });

ScrollReveal().reveal('.sr-delay-1', { delay: '100' });
ScrollReveal().reveal('.sr-delay-2', { delay: '200' });
ScrollReveal().reveal('.sr-delay-3', { delay: '300' });
ScrollReveal().reveal('.sr-delay-4', { delay: '400' });
ScrollReveal().reveal('.sr-delay-5', { delay: '500' });
ScrollReveal().reveal('.sr-delay-6', { delay: '600' });

// Modal: Close Link
$(document).ready(function(){
    // Hide modal on button click
    $(".link-close").click(function(){
        $(".modal").modal('hide');
    });
});

// Heading
$(".heading").html(function(){
	var text= $(this).text().trim().split(" ");
	var first = text.shift();
	return (text.length > 0 ? "<strong>"+ first + "</strong> " : first) + text.join(" ");
});

// Time Picker
$(function () {
	$('#timepicker').datetimepicker({
		format: 'LT'
	});
});