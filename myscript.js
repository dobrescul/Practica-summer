$(document).ready(function() {
    $("#btn1").click(function(e) {
        validateForm();
        e.stopPropagation();
        e.preventDefault();

    });

});

function inputValid(input) {
    input.removeClass("error");
}

function inputInvalid(input) {
    input.addClass("error");
}


function validateForm() {

    var email = $("#email");
    var username = $("#username");
    var password = $("#password");
    var confirm = $("#confirm");    
    var age = $("#age");
    
    

  		validateInput(email);
        validateInput(username);
        validateInput(password);
        validateInput(confirm);       
      
          	  

}


function validateInput(input) {
        if (typeof input.val() === 'undefined' || input.val().length === 0) {
                inputInvalid(input); 
                   alert("something is not right");


            } else {
                inputValid(input);
                alert("nu e panica man");

               }

}
