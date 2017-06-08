
window.onload = function() {

    // Do something when view loads
    //alert("Siden er loadet!");
    console.log("Siden er loadet!");
};



// Clicked login
$("#dumKnap").click(function(e) {
 
    // uden jquery
    //var input = document.getElementById('inputFelt').value;

    // med jquery
    var input = $("#inputFelt").val();

    alert("Du har skrevet: " + input);
});

//On form submit
$('#box').on('submit', function(e) {

    e.preventDefault(); // undgå page refresh hvis type = submit ved form

    console.log("Submit pressed");

    sendKnap(e);
});


// Brug af simplet brug AJAX POST
function sendKnap(e){

    //collects data from all the form inputs
    var ajaxData = new FormData($('#box').get(0));

    ajaxData.append('password', $('#passwordInput').val() );
    ajaxData.append('email', $('#mailInput').val() );

    // server comunication here 
    $.ajax({
        url: "Home/Login",
        type: $('#box').attr('method'), // "GET" or "POST"
        data: ajaxData,                 //  data: { "email=" : email, "password=" : password},
        dataType: 'json', 
        cache: false,
        contentType: false,
        processData: false,
        complete: function() {

            console.log("Done making the call");
        },
        success: function(response) {

            responeHandler(response);
        },
        error: function(data, status, error) {

            console.log(data.responseText);

            alert(data.responseText);
        }
    });
}

//Handler response here!
function responeHandler(result) {
    // code that depends on `result`
    console.log("Response is: ");
    console.log(result);

    alert(result);
}

// Clicked hentNavn
$("#hentNavn").click(function(e) {
 
    hentNavn(e);
});

// Brug af simplet brug AJAX GET
function hentNavn(e){

    //collects data from all the form inputs
    var data = $("#inputFelt").val();

    // server comunication here 
    $.ajax({
        url: "Home/Navn",
        type: 'GET', // "GET" or "POST"
        data: "nr=" + data,                 //  data: { "email=" : email, "password=" : password},
        dataType: 'text/plain', 
        cache: false,
        contentType: false,
        processData: false,
        complete: function() {

            console.log("Done making the call");
        },
        success: function(response) {

            responeHandler(response);
        },
        error: function(data, status, error) {

            console.log(data.responseText);

            alert(data.responseText);
        }
    });
}