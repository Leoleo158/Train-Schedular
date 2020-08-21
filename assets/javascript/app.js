$(document).ready(function(){
    var config = {
        apiKey: "AIzaSyBPCAxjycmuYaeY8RISjpPzUOSfmZIbQrQ",
        authDomain: "train-scheduler-68643.firebaseapp.com",
        databaseURL: "https://train-scheduler-68643.firebaseio.com",
        projectId: "train-scheduler-68643",
        storageBucket: "train-scheduler-68643.appspot.com",
        messagingSenderId: "934455543386"
    };
    firebase.initializeApp(config);

 // A variable to reference the database.
 var database = firebase.database();

 // Variables for the onClick event
 var name;
 var destination;
 var firstTrain;
 var frequency = 0;

 $("#add-train").on("click", function() {
    event.preventDefault();
    // Storing and retreiving new train data
    name = $("#train-name").val().trim();
    destination = $("#destination").val().trim();
    firstTrain = $("#first-train").val().trim();
    frequency = $("#frequency").val().trim();

    // Pushing to database
    database.ref().push({
        name: name,
        destination: destination,
        firstTrain: firstTrain,
        frequency: frequency,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    });
    $("form")[0].reset();
});