"use strict";
var Contact = function() {
	
	var _form_validate = function () {

		$('#contact-form').validate({

			rules: {
				name: {
					required: true,
                },
                company: {
                    required: true,
                },
                email: {
                    required: true,
                    email: true
                },
                contact_no: {
                    required: true,
                },
                address: {
                    required: true
				},
				company_related: {
                    required: true
				},
				"services[]": {
                    required: true
                },
                people_quantity: {
                    required: true
                },
                call_time: {
                    required: true
                },
                call_timezone: {
                    required: true
				},
			},
	
			invalidHandler: function ( event, validator ) {

				event.preventDefault();

			},
			submitHandler: function ( _frm ) {

				var submit          = $('#contact-form submit');

				var name            = $('#contact-form [name="name"]').val();
				var company            = $('#contact-form [name="company"]').val();
				var email           = $('#contact-form [name="email"]').val();
				var contact_no           = $('#contact-form [name="contact_no"]').val();
				var address         = $('#contact-form [name="address"]').val();
				var company_related         = $('#contact-form [name="company_related"]').val();
				var services         = $('#contact-form [name="services[]"]').val();
				var others_specify         = $('#contact-form [name="others_specify"]').val();
				var people_quantity         = $('#contact-form [name="people_quantity"]').val();
				var call_time         = $('#contact-form [name="call_time"]').val();
				var call_timezone         = $('#contact-form [name="call_timezone"]').val();

				$.ajax({
					type: 'POST',
					url: 'php/contact.php',
					dataType: 'JSON',
					data: {
                        name: name,
                        company: company,
                        email: email,
						contact_no: contact_no,
						address: address,
						company_related: company_related,
						services: services,
						others_specify: others_specify,
						people_quantity: people_quantity,
						call_time: call_time,
						call_timezone: call_timezone,
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
                                'Thanks for contacting us.',
                                'success'
                            ).then((result) => {
                                $("#contact-form").trigger("reset");
                                $(".services-dropdown").val('').trigger('change')

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
	Contact.init();
});