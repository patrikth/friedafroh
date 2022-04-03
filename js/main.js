$(document).ready(function () {

$('#contactform').validate({
    rules: {
        name: {
            required: true
        },
        email: {
            required: true,
            email: true
        },
        comment: {
            required: true
        }
    },
    highlight: function (element) {
        $(element).closest('.form-group').removeClass('has-success').addClass('has-error');
    },
    success: function (element) {
        element.closest('.form-group').removeClass('has-error').addClass('has-success');
        element.detach();
    },
    submitHandler: function(form) {
        $(form).ajaxForm();
        $(form).ajaxSubmit();
        $(form)[0].reset();
        $('.alert-success').removeClass('hidden').addClass('show');
    }
});
});
