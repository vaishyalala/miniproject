$(document).ready(function () {
    'use strict';

    var usernameError = true,
        emailError = true,
        passwordError = true,
        passConfirm = true;

    // Detect browser for CSS purpose
    if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
        $('.form form label').addClass('fontSwitch');
    }

    // Form validation
    $('input').blur(function () {
        // User Name
        if ($(this).hasClass('name')) {
            if ($(this).val().length === 0) {
                $(this).siblings('span.error').text('Please type your full name').fadeIn().parent('.form-group').addClass('hasError');
                usernameError = true;
            } else if ($(this).val().length > 1 && $(this).val().length <= 6) {
                $(this).siblings('span.error').text('Please type at least 6 characters').fadeIn().parent('.form-group').addClass('hasError');
                usernameError = true;
            } else {
                $(this).siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
                usernameError = false;
            }
        }
        
        // Email
        if ($(this).hasClass('email')) {
            if ($(this).val().length == '') {
                $(this).siblings('span.error').text('Please type your email address').fadeIn().parent('.form-group').addClass('hasError');
                emailError = true;
            } else {
                $(this).siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
                emailError = false;
            }
        }
        
        // Password
        if ($(this).hasClass('pass')) {
            if ($(this).val().length < 8) {
                $(this).siblings('span.error').text('Please type at least 8 characters').fadeIn().parent('.form-group').addClass('hasError');
                passwordError = true;
            } else {
                $(this).siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
                passwordError = false;
            }
        }
        
        // Password confirmation
        if ($('.pass').val() !== $('.passConfirm').val()) {
            $('.passConfirm').siblings('.error').text('Passwords don\'t match').fadeIn().parent('.form-group').addClass('hasError');
            passConfirm = true;
        } else {
            $('.passConfirm').siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
            passConfirm = false;
        }
    });

    // Form switch
    $('a.switch').click(function (e) {
        e.preventDefault();
        $(this).parents('.form-peice').toggleClass('switched').siblings('.form-peice').toggleClass('switched');
    });

    // Form submission
    $('.login-form').submit(function (e) {
        e.preventDefault();
        // Mocking a successful login
        $('.brand').addClass('active');
        $('.brand .heading').addClass('active');
        $('.form').fadeOut(500);
        $('.success-msg').fadeIn(500);
    });

    $('.signup-form').submit(function (e) {
        e.preventDefault();
        // Mocking a successful signup
        $('.brand').addClass('active');
        $('.brand .heading').addClass('active');
        $('.form').fadeOut(500);
        $('.success-msg').fadeIn(500);
    });
});
