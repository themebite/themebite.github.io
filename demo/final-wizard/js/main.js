    $(document).ready(function() {
            // Wizard
            'use strict';

            var Wizard = function() {
                this.wizard = $('.wizard-area');
              this.nav    = this.wizard.find('wizard-nav');
              this.steps  = this.wizard.find('.tab-content');
              this.price  = false;
              
              var _this = this;
              
              this.steps.find('.tab-pane').on('onNext', 'form', function(e) {
                e.preventDefault();
                
                var form     = $(this)
                    , input    = form.find('p label span input')
                  , checkbox = form.find('label input[type=radio]:checked');
                
                if( form.find('p label span input').val().length ) {
                    _this.price = parseInt(form.find('p label span input').val());
                } else if(checkbox.length) {
                    _this.price = parseInt(checkbox.val());
                }
                
                _this.openNextStep();
              });
            };

            Wizard.prototype.openNextStep = function() {
                if(!this.price) {
                this.showError('Please select a price first');
              } else {
                this.steps
                    .find('.tab-pane.active').removeClass('active')
                  .next('.tab-pane').addClass('active')
                  .find('p.price').html(this.price);
                 
                this.nav
                    .find('li.active').removeClass('active')
                  .next().addClass('active');
              }
            };

            Wizard.prototype.showError = function(message) {
                this.nav.closest('.container').append('<p class="text-danger">' + message + '</p>');
            };

            var wizard = new Wizard;

    		// Highlight Donation Button
		    $('.btn-donate').click(function() {
			    $(".btn-donate").removeClass("active");
			    // $(".tab").addClass("active"); // instead of this do the below 
			    $(this).addClass("active");   
			});

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