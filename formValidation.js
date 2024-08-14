$(document).ready(function() {
    var input = document.querySelector("#phone");
    var iti = window.intlTelInput(input, {
        initialCountry: "ua", 
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.13/js/utils.js",
    });

    $("#phone").on("input", function() {
        this.value = this.value.replace(/[^\d\s()+-]/g, '');
    });

    $('#phone-form').on('submit', function (e) {
        
        e.preventDefault();

        $('input').css('border-color', '');

        const phone = $('#phone').val().trim();
        const name = $('#name').val().trim();

        if (name === '') {
            $('#name').css('border-color', 'red');
        }
        if (phone === '') {
            $('#phone').css('border-color', 'red');
        }

        if (name !== '' && phone !== '') {
            this.submit();
        }
    });
});