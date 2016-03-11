    $(document).ready(function() {
            // Wizard
            // $(".next").click(function(){
            //     var isChecked = jQuery("input[name=chest]:checked").val();
            //      if(!isChecked){
            //          alert('Nothing Selected');
            //      }else{
            //          alert('You have selected :'+isChecked);
            //      }
            // });

            // Toggle Emplyment Info
            var $emplymentInfo = $('.emplyment-section');
            var $toggleButton = $('.employment-trigger');
            $toggleButton.click(function() {
                $emplymentInfo.slideToggle();
            });

            

		// Validating Form
      	var $validator = $("#commentForm").validate({
    		  rules: {
    		    emailfield: {
    		      required: true,
    		      email: true,
    		      minlength: 3
    		    },
    		    namefield: {
    		      required: true,
    		      minlength: 3
    		    },
    		    lastnamefield: {
    		      required: true,
    		      minlength: 3
    		    },
    		    addressfield: {
    		      required: true,
    		      minlength: 10
    		    },
    		    zipfield: {
    		      required: true,
    		      minlength: 4
    		    },
    		    countryfield: {
    		      required: true,
    		    },
    		    statefield: {
    		      required: true,
    		    },
    		    cityfield: {
    		      required: true,
    		      minlength: 4
    		    },
    		    phonefield: {
    		      required: true,
    		      minlength: 8
    		    },
    		    occupationfield: {
    		      required: true,
    		      minlength: 4
    		    },
    		    employerfield: {
    		      required: true,
    		      minlength: 4
    		    },
    		    paymentfield: {
    		      required: true,
    		      minlength: 0
    		    },
    		    cardfield: {
    		      required: true,
    		      minlength: 8
    		    },
    		    datefield: {
    		      required: true,
    		      minlength: 0
    		    },
    		    yearfield: {
    		      required: true,
    		      minlength: 0
    		    },
    		    urlfield: {
    		      required: true,
    		      minlength: 3,
    		      url: true
    		    }
    		  }
    		});
     
    	  	$('#rootwizard').bootstrapWizard({
    	  		'tabClass': 'clearfix',
    	  		'onNext': function(tab, navigation, index) {
    	  			var $valid = $("#commentForm").valid();
    	  			if(!$valid) {
    	  				$validator.focusInvalid();
    	  				return false;
    	  			}
    	  		}
    	  	});	
    });