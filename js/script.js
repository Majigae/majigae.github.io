$(document).ready(function () {
	$("#mobile-nav-button").click(function() {
    	$(".mobile-nav").toggle();
	});

    $("#home-button").on("click", function() {
        $(".card").fadeIn(500);
    });

	$("#about-button").on("click", function() {
    	$("#photo").fadeIn(600);
    	$("#grafik-web").hide();
    	$("#japanese").hide();
    	$("#about").fadeIn(600);
    	$("#office").hide();

    	$("#informatik").hide();
    	$("#get-in-touch").hide();
    	$("#siemens-pdl").hide();
    	$("#archery").fadeIn(600);
    	$("#siemens-trafo").hide();

    	$("#korean").fadeIn(600);
    	$("#borealis").hide();
    	$("#contact-form").hide();
    	$("#has").hide();
    	$("#html-css").hide();
	});

	$("#skill-button").on("click", function() {
		$("#photo").hide();
    	$("#grafik-web").hide();
    	$("#japanese").fadeIn(600);
    	$("#about").hide();
    	$("#office").fadeIn(600);

    	$("#informatik").hide();
    	$("#get-in-touch").hide();
    	$("#siemens-pdl").hide();
    	$("#archery").hide();
    	$("#siemens-trafo").hide();

    	$("#korean").hide();
    	$("#borealis").hide();
    	$("#contact-form").hide();
    	$("#has").hide();
    	$("#html-css").fadeIn(600);
	});

    $("#education-button").on("click", function() {
		$("#photo").hide();
    	$("#grafik-web").fadeIn(600);
    	$("#japanese").fadeIn(600);
    	$("#about").hide();
    	$("#office").hide();

    	$("#informatik").fadeIn(600);
    	$("#get-in-touch").hide();
    	$("#siemens-pdl").hide();
    	$("#archery").hide();
    	$("#siemens-trafo").hide();

    	$("#korean").hide();
    	$("#borealis").hide();
    	$("#contact-form").hide();
    	$("#has").fadeIn(600);
    	$("#html-css").hide();
	});

	$("#work-button").on("click", function() {
		$("#photo").hide();
    	$("#grafik-web").hide();
    	$("#japanese").hide();
    	$("#about").hide();
    	$("#office").hide();

    	$("#informatik").hide();
    	$("#get-in-touch").hide();
    	$("#siemens-pdl").fadeIn(600);
    	$("#archery").hide();
    	$("#siemens-trafo").fadeIn(600);

    	$("#korean").hide();
    	$("#borealis").fadeIn(600);
    	$("#contact-form").hide();
    	$("#has").hide();
    	$("#html-css").hide();
	});

	$("#contact-button").on("click", function() {
		$("#photo").fadeIn(600);
    	$("#grafik-web").hide();
    	$("#japanese").hide();
    	$("#about").hide();
    	$("#office").hide();

    	$("#informatik").hide();
    	$("#get-in-touch").fadeIn(600);
    	$("#siemens-pdl").hide();
    	$("#archery").hide();
    	$("#siemens-trafo").hide();

    	$("#korean").hide();
    	$("#borealis").hide();
    	$("#contact-form").fadeIn(600);
    	$("#has").hide();
    	$("#html-css").hide();
	});

	
});