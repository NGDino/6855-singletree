$(function() {
    console.log('ready')
    $('.carousel').carousel({
        interval: false,
    })

    $('#inquiry-form').on('submit', function(event) {
        event.preventDefault(); // prevent reload
        
        var formData = new FormData(this);
        formData.append('service_id', 'service_tyix8du');
        formData.append('template_id', 'portfolio_template');
        formData.append('user_id', 'user_n0ZXlyXiFHLSvNhfhMQHr');
    
        $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
            type: 'POST',
            data: formData,
            contentType: false, // auto-detection
            processData: false // no need to parse formData to string
        }).done(function() {
            alert('Your mail is sent!');
        }).fail(function(error) {
            alert('Oops... ' + JSON.stringify(error));
        });
    });
});

