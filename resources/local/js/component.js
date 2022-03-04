$('document').ready(function () {
    $('#alertDivision').hide();
});

$('#cookiesAlertCloseButton').click(function () {
    $('#cookiesAlertCloseButton').alert('close');
});

$('#submitButton').click(function () {
    $('#supportFormDivision').hide();
    $('#alertDivision').show();
    $('#alertDivision').html('<div class="alert alert-success" role="alert">Thank You for Choosing Us. We will get back to you in 48 Hours.</p></div>');
    $('#submitButton').hide();
});

$('#supportEmail').on('input', function () {
    
    var userinput = $(this).val();
    var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;

    if (!pattern.test(userinput))
    {
        $('#emailValidationBadge').show();
        $('#emailValidationBadge').text('Please enter a valid Email Address');
        $('#submitButton').prop('disabled', true);
        $('#submitButton').hide();
    } else {
        $('#submitButton').prop('disabled', false);
        $('#submitButton').show();
        $('#emailValidationBadge').hide();
    }
    if ($('#supportAddress').val() === '' || $('#supportAddress').val() === undefined || $('#supportAddress').val() === null) {
        $('#submitButton').prop('disabled', true);
        $('#submitButton').hide();
        $('#addressValidationBadge').show();
        $('#addressValidationBadge').text('Please enter a valid Address');
    }
    if ($('#supportCity').val() === '' || $('#supportCity').val() === undefined || $('#supportCity').val() === null) {
        $('#submitButton').prop('disabled', true);
        $('#submitButton').hide();
        $('#cityValidationBadge').show();
        $('#cityValidationBadge').text('Please enter a valid City');
    }
    if ($('#supportState').val() === '' || $('#supportState').val() === undefined || $('#supportState').val() === null) {
        $('#submitButton').prop('disabled', true);
        $('#submitButton').hide();
        $('#stateValidationBadge').show();
        $('#stateValidationBadge').text('Please enter a valid State');
    } 
    if ($('#supportPhoneNo').val() === '' || $('#supportPhoneNo').val() === undefined || $('#supportPhoneNo').val() === null) {
        $('#submitButton').prop('disabled', true);
        $('#submitButton').hide();
        $('#phoneNoValidationBadge').show();
        $('#phoneNoValidationBadge').text('Please enter a valid Phone No');
    }
    if ($('#supportZip').val() === '' || $('#supportZip').val() === undefined || $('#supportZip').val() === null) {
        $('#submitButton').prop('disabled', true);
        $('#submitButton').hide();
        $('#zipValidationBadge').show();
        $('#zipValidationBadge').text('Please enter a valid Zip Code');
    }
});

$('#supportZip').on('input', function () {
    
    var userinput = $(this).val();
    var pattern = /^\b[0-9]{6}\b$/i;

    if (!pattern.test(userinput))
    {
        $('#zipValidationBadge').show();
        $('#zipValidationBadge').text('Please enter a valid Zip Code');
        $('#submitButton').prop('disabled', true);
        $('#submitButton').hide();
    } else {
        $('#submitButton').prop('disabled', false);
        $('#submitButton').show();
        $('#zipValidationBadge').hide();
    }
    if($('#supportEmail').val() === '' || $('#supportEmail').val() === undefined || $('#supportEmail').val() === null) {
        $('#submitButton').prop('disabled', true);
        $('#submitButton').hide();
        $('#emailValidationBadge').show();
        $('#emailValidationBadge').text('Please enter a valid Email Address');
    } 
    if ($('#supportAddress').val() === '' || $('#supportAddress').val() === undefined || $('#supportAddress').val() === null) {
        $('#submitButton').prop('disabled', true);
        $('#submitButton').hide();
        $('#addressValidationBadge').show();
        $('#addressValidationBadge').text('Please enter a valid Address');
    }
    if ($('#supportCity').val() === '' || $('#supportCity').val() === undefined || $('#supportCity').val() === null) {
        $('#submitButton').prop('disabled', true);
        $('#submitButton').hide();
        $('#cityValidationBadge').show();
        $('#cityValidationBadge').text('Please enter a valid City');
    }
    if ($('#supportState').val() === '' || $('#supportState').val() === undefined || $('#supportState').val() === null) {
        $('#submitButton').prop('disabled', true);
        $('#submitButton').hide();
        $('#stateValidationBadge').show();
        $('#stateValidationBadge').text('Please enter a valid State');
    } 
    if ($('#supportPhoneNo').val() === '' || $('#supportPhoneNo').val() === undefined || $('#supportPhoneNo').val() === null) {
        $('#submitButton').prop('disabled', true);
        $('#submitButton').hide();
        $('#phoneNoValidationBadge').show();
        $('#phoneNoValidationBadge').text('Please enter a valid Phone No');
    }
});

$('#buyNowButton').click(function () {
    $('#buyNowSuccess').text('Thank You For shopping with us. Please visit us again.');
    $('#buyNowButton').prop('disabled', true);
    $('#buyNowButton').hide();
});

$('#supportPhoneNo').on('input', function () {
    
    var userinput = $(this).val();
    var pattern = /^\b[0-9]{10}\b$/i;

    if (!pattern.test(userinput))
    {
        $('#phoneNoValidationBadge').show();
        $('#phoneNoValidationBadge').text('Please enter a valid Phone No');
        $('#submitButton').prop('disabled', true);
        $('#submitButton').hide();
    } else {
        $('#submitButton').prop('disabled', false);
        $('#submitButton').show();
        $('#phoneNoValidationBadge').hide();
    }
        
    if($('#supportEmail').val() === '' || $('#supportEmail').val() === undefined || $('#supportEmail').val() === null) {
        $('#submitButton').prop('disabled', true);
        $('#submitButton').hide();
        $('#emailValidationBadge').show();
        $('#emailValidationBadge').text('Please enter a valid Email Address');
    }
    if ($('#supportAddress').val() === '' || $('#supportAddress').val() === undefined || $('#supportAddress').val() === null) {
        $('#submitButton').prop('disabled', true);
        $('#submitButton').hide();
        $('#addressValidationBadge').show();
        $('#addressValidationBadge').text('Please enter a valid Address');
    }
    if ($('#supportCity').val() === '' || $('#supportCity').val() === undefined || $('#supportCity').val() === null) {
        $('#submitButton').prop('disabled', true);
        $('#submitButton').hide();
        $('#cityValidationBadge').show();
        $('#cityValidationBadge').text('Please enter a valid City');
    }
    if ($('#supportState').val() === '' || $('#supportState').val() === undefined || $('#supportState').val() === null) {
        $('#submitButton').prop('disabled', true);
        $('#submitButton').hide();
        $('#stateValidationBadge').show();
        $('#stateValidationBadge').text('Please enter a valid State');
    } 
    if ($('#supportZip').val() === '' || $('#supportZip').val() === undefined || $('#supportZip').val() === null) {
        $('#zipValidationBadge').show();
        $('#zipValidationBadge').text('Please enter a valid Zip Code');
        $('#submitButton').prop('disabled', true);
        $('#submitButton').hide();
    }
});

$('#supportCity').on('input', function () {
        
    if($('#supportEmail').val() === '' || $('#supportEmail').val() === undefined || $('#supportEmail').val() === null) {
        $('#submitButton').prop('disabled', true);
        $('#submitButton').hide();
        $('#emailValidationBadge').show();
        $('#emailValidationBadge').text('Please enter a valid Email Address');
    }
    if ($('#supportAddress').val() === '' || $('#supportAddress').val() === undefined || $('#supportAddress').val() === null) {
        $('#submitButton').prop('disabled', true);
        $('#submitButton').hide();
        $('#addressValidationBadge').show();
        $('#addressValidationBadge').text('Please enter a valid Address');
    }
    if ($('#supportCity').val() === '' || $('#supportCity').val() === undefined || $('#supportCity').val() === null) {
        $('#submitButton').prop('disabled', true);
        $('#submitButton').hide();
        $('#cityValidationBadge').show();
        $('#cityValidationBadge').text('Please enter a valid City');
    } else {
        $('#submitButton').prop('disabled', false);
        $('#submitButton').show();
        $('#cityValidationBadge').hide();   
    }
    if ($('#supportState').val() === '' || $('#supportState').val() === undefined || $('#supportState').val() === null) {
        $('#submitButton').prop('disabled', true);
        $('#submitButton').hide();
        $('#stateValidationBadge').show();
        $('#stateValidationBadge').text('Please enter a valid State');
    } 
    if ($('#supportZip').val() === '' || $('#supportZip').val() === undefined || $('#supportZip').val() === null) {
        $('#zipValidationBadge').show();
        $('#zipValidationBadge').text('Please enter a valid Zip Code');
        $('#submitButton').prop('disabled', true);
        $('#submitButton').hide();
    }
    if ($('#supportPhoneNo').val() === '' || $('#supportPhoneNo').val() === undefined || $('#supportPhoneNo').val() === null) {
        $('#phoneNoValidationBadge').show();
        $('#phoneNoValidationBadge').text('Please enter a valid Zip Code');
        $('#submitButton').prop('disabled', true);
        $('#submitButton').hide();
    }
});

$('#supportAddress').on('input', function () {
        
    if($('#supportEmail').val() === '' || $('#supportEmail').val() === undefined || $('#supportEmail').val() === null) {
        $('#submitButton').prop('disabled', true);
        $('#submitButton').hide();
        $('#emailValidationBadge').show();
        $('#emailValidationBadge').text('Please enter a valid Email Address');
    }
    if ($('#supportAddress').val() === '' || $('#supportAddress').val() === undefined || $('#supportAddress').val() === null) {
        $('#submitButton').prop('disabled', true);
        $('#submitButton').hide();
        $('#addressValidationBadge').show();
        $('#addressValidationBadge').text('Please enter a valid Address');
    } else {
        $('#submitButton').prop('disabled', false);
        $('#submitButton').show();
        $('#addressValidationBadge').hide();   
    }
    if ($('#supportCity').val() === '' || $('#supportCity').val() === undefined || $('#supportCity').val() === null) {
        $('#submitButton').prop('disabled', true);
        $('#submitButton').hide();
        $('#cityValidationBadge').show();
        $('#cityValidationBadge').text('Please enter a valid City');
    }
    if ($('#supportState').val() === '' || $('#supportState').val() === undefined || $('#supportState').val() === null) {
        $('#submitButton').prop('disabled', true);
        $('#submitButton').hide();
        $('#stateValidationBadge').show();
        $('#stateValidationBadge').text('Please enter a valid State');
    } 
    if ($('#supportZip').val() === '' || $('#supportZip').val() === undefined || $('#supportZip').val() === null) {
        $('#zipValidationBadge').show();
        $('#zipValidationBadge').text('Please enter a valid Zip Code');
        $('#submitButton').prop('disabled', true);
        $('#submitButton').hide();
    }
    if ($('#supportPhoneNo').val() === '' || $('#supportPhoneNo').val() === undefined || $('#supportPhoneNo').val() === null) {
        $('#phoneNoValidationBadge').show();
        $('#phoneNoValidationBadge').text('Please enter a valid Zip Code');
        $('#submitButton').prop('disabled', true);
        $('#submitButton').hide();
    }
});

$('#supportState').on('input', function () {
        
    if($('#supportEmail').val() === '' || $('#supportEmail').val() === undefined || $('#supportEmail').val() === null) {
        $('#submitButton').prop('disabled', true);
        $('#submitButton').hide();
        $('#emailValidationBadge').show();
        $('#emailValidationBadge').text('Please enter a valid Email Address');
    }
    if ($('#supportAddress').val() === '' || $('#supportAddress').val() === undefined || $('#supportAddress').val() === null) {
        $('#submitButton').prop('disabled', true);
        $('#submitButton').hide();
        $('#addressValidationBadge').show();
        $('#addressValidationBadge').text('Please enter a valid Address');
    }
    if ($('#supportCity').val() === '' || $('#supportCity').val() === undefined || $('#supportCity').val() === null) {
        $('#submitButton').prop('disabled', true);
        $('#submitButton').hide();
        $('#cityValidationBadge').show();
        $('#cityValidationBadge').text('Please enter a valid City');
    }
    if ($('#supportState').val() === '' || $('#supportState').val() === undefined || $('#supportState').val() === null) {
        $('#submitButton').prop('disabled', true);
        $('#submitButton').hide();
        $('#stateValidationBadge').show();
        $('#stateValidationBadge').text('Please enter a valid State');
    } else {
        $('#submitButton').prop('disabled', false);
        $('#submitButton').show();
        $('#stateValidationBadge').hide();   
    }
    if ($('#supportZip').val() === '' || $('#supportZip').val() === undefined || $('#supportZip').val() === null) {
        $('#zipValidationBadge').show();
        $('#zipValidationBadge').text('Please enter a valid Zip Code');
        $('#submitButton').prop('disabled', true);
        $('#submitButton').hide();
    }
    if ($('#supportPhoneNo').val() === '' || $('#supportPhoneNo').val() === undefined || $('#supportPhoneNo').val() === null) {
        $('#phoneNoValidationBadge').show();
        $('#phoneNoValidationBadge').text('Please enter a valid Zip Code');
        $('#submitButton').prop('disabled', true);
        $('#submitButton').hide();
    }
});
