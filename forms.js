$(document).ready(function(){
    var errors = $("#errors");
    errors.hide();
    var form = $('#employeForm');
    var errorMessae = '';
    form.on('submit',function() {
        errors.hide();
        if($('#Lname').val().length > 8) {
            errorMessae = 'Should not be more than eight characters';
            errors.val(errorMessae).show();
            return false;
        }
        if(parseInt($('#age').val()) > 35){
            errorMessae = 'Age Should not be more than 35';
            errors.val(errorMessae).show();
            return false;
        }
        alert('ready to submit');
    });
});