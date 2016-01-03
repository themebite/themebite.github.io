$(document).ready(function () {

    $('#wizard').smartWizard();
    	

    // Activating the button when clicked
    $('.btn-donate').click(function() {
	    $(".btn-donate").removeClass("active");
	    // $(".tab").addClass("active"); // instead of this do the below 
	    $(this).addClass("active");   
		});

});