"use strict";
var Subscribe = function() {
	
	var _form_validate = function () {

		$('#subscribe-form').validate({

			rules: {
                email: {
                    required: true,
                    email: true
                },
			},
	
			invalidHandler: function ( event, validator ) {

				event.preventDefault();

			},
			submitHandler: function ( _frm ) {

				var submit          = $('#subscribe-form submit');

				var email           = $('#subscribe-form [name="email"]').val();
				

				$.ajax({
					type: 'POST',
					url: 'php/subscribe.php',
					dataType: 'JSON',
					data: {
                        email: email,
					},
					cache: false,
					beforeSend: function(result) {
						$(".se-pre-con").fadeIn("slow")
                    },
                    complete: function(){
                        $(".se-pre-con").fadeOut("slow");
                    },
					success: function(result) {
						if(result.sendstatus == 1) {

                            Swal.fire(
                                'Good job!',
                                'Thanks for subscribing.',
                                'success'
                            ).then((result) => {
                                $("#subscribe-form").trigger("reset");
                            });

						} else {

                            Swal.fire(
                                'Oops!',
                                'Sorry, something is wrong.',
                                'error'
                            );

						}
					}
				});
			}
		});
	}

	return {

		//main function to initiate the module
		init: function() {
			_form_validate();
		},

	};

}();

jQuery(document).ready(function() {
	Subscribe.init();
});