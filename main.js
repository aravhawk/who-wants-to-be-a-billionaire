var config = {
    apiKey: "AIzaSyANEvV2iSFsAGl5gCiv6338w2EnZmxRj80",
    authDomain: "who-wants-to-be-a-billionaire.firebaseapp.com",
    databaseURL: "https://console.firebase.google.com/u/0/project/who-wants-to-be-a-billionaire/firestore/data/",
    projectId: "who-wants-to-be-a-billionaire",
    storageBucket: "who-wants-to-be-a-billionaire.appspot.com",
    messagingSenderId: "63964723780",
    appId: "1:63964723780:web:5daf18ad22674a69a3da11",
    measurementId: "G-QCT05GGDD7"
};

function writeData(email, money, date){
    db.collection('scores').add({
        email: email,
        money: money,
        date: date
    });
}

function addQuestion1Money(){
    window.localStorage.setItem('money', "$100,000");
    window.location.replace("question2.html");
}

function getQuestion1Wrong(){
    window.localStorage.setItem('money', "$0");

    // get values from localStorage and store in variables
    email = window.localStorage.getItem('email');
    money = window.localStorage.getItem('money');
    date = window.localStorage.getItem('date');

    // save game data to firebase rtdb and go to winner screen
    writeData(email, money, date);

    setTimeout(()=> {
        window.location.replace("you-lose.html");
        document.getElementById("dont-worry-message").innerHTML = "Yes, I know, you didn't get any questions right, but you can always try again.";
    }, 2000);
}

function addQuestion2Money(){
    window.localStorage.setItem('money', "$200,000");
    window.location.replace("question3.html");
}

function getQuestion2Wrong(){
    window.localStorage.setItem('money', "$100,000")

    // get values from localStorage and store in variables
    email = window.localStorage.getItem('email');
    money = window.localStorage.getItem('money');
    date = window.localStorage.getItem('date');

    // save game data to firebase rtdb and go to winner screen
    writeData(email, money, date);

    setTimeout(()=> {
        window.location.replace("you-lose.html");
        document.getElementById("dont-worry-message").innerHTML = "Yes, I know, you didn't win $1 BILLION, but you can always try again, and you still earned " + money + ".";
    }, 2000);
}

function addQuestion3Money(){
    window.localStorage.setItem('money', "$300,000");
    window.location.replace("question4.html");
}

function getQuestion3Wrong(){
    window.localStorage.setItem('money', "$200,000");
    
    // get values from localStorage and store in variables
    email = window.localStorage.getItem('email');
    money = window.localStorage.getItem('money');
    date = window.localStorage.getItem('date');

    // save game data to firebase rtdb and go to winner screen
    writeData(email, money, date);

    setTimeout(()=> {
        window.location.replace("you-lose.html");
        document.getElementById("dont-worry-message").innerHTML = "Yes, I know, you didn't win $1 BILLION, but you can always try again, and you still earned " + money + ".";
    }, 2000);
}

function addQuestion4Money(){
    window.localStorage.setItem('money', "$500,000");
    window.location.replace("question5.html");
}

function getQuestion4Wrong(){
    window.localStorage.setItem('money', "$300,000");
    
    
    // get values from localStorage and store in variables
    email = window.localStorage.getItem('email');
    money = window.localStorage.getItem('money');
    date = window.localStorage.getItem('date');

    // save game data to firebase rtdb and go to winner screen
    writeData(email, money, date);

    setTimeout(()=> {
        window.location.replace("you-lose.html");
        document.getElementById("dont-worry-message").innerHTML = "Yes, I know, you didn't win $1 BILLION, but you can always try again, and you still earned " + money + ".";
    }, 2000);
}

function addQuestion5Money(){
    window.localStorage.setItem('money', "$1,000,000");
    window.location.replace("question6.html");
}

function getQuestion5Wrong(){
    window.localStorage.setItem('money', "$500,000");
    
    
    // get values from localStorage and store in variables
    email = window.localStorage.getItem('email');
    money = window.localStorage.getItem('money');
    date = window.localStorage.getItem('date');

    // save game data to firebase rtdb and go to winner screen
    writeData(email, money, date);

    setTimeout(()=> {
        window.location.replace("you-lose.html");
        document.getElementById("dont-worry-message").innerHTML = "Yes, I know, you didn't win $1 BILLION, but you can always try again, and you still earned " + money + ".";
    }, 2000);
}

function addQuestion6Money(){
    window.localStorage.setItem('money', "$2,000,000");
    window.location.replace("question7.html");
}

function getQuestion6Wrong(){
    window.localStorage.setItem('money', "$1,000,000");
    
    
    // get values from localStorage and store in variables
    email = window.localStorage.getItem('email');
    money = window.localStorage.getItem('money');
    date = window.localStorage.getItem('date');

    // save game data to firebase rtdb and go to winner screen
    writeData(email, money, date);

    setTimeout(()=> {
        window.location.replace("you-lose.html");
        document.getElementById("dont-worry-message").innerHTML = "Yes, I know, you didn't win $1 BILLION, but you can always try again, and you still earned " + money + ".";
    }, 2000);
}

function addQuestion7Money(){
    window.localStorage.setItem('money', "$4,000,000");
    window.location.replace("question8.html");
}

function getQuestion7Wrong(){
    window.localStorage.setItem('money', "$2,000,000");
    
    
    // get values from localStorage and store in variables
    email = window.localStorage.getItem('email');
    money = window.localStorage.getItem('money');
    date = window.localStorage.getItem('date');

    // save game data to firebase rtdb and go to winner screen
    writeData(email, money, date);

    setTimeout(()=> {
        window.location.replace("you-lose.html");
        document.getElementById("dont-worry-message").innerHTML = "Yes, I know, you didn't win $1 BILLION, but you can always try again, and you still earned " + money + ".";
    }, 2000);
}

function addQuestion8Money(){
    window.localStorage.setItem('money', "$8,000,000");
    window.location.replace("question9.html");
}

function getQuestion8Wrong(){
    window.localStorage.setItem('money', "$4,000,000");
    
    
    // get values from localStorage and store in variables
    email = window.localStorage.getItem('email');
    money = window.localStorage.getItem('money');
    date = window.localStorage.getItem('date');

    // save game data to firebase rtdb and go to winner screen
    writeData(email, money, date);

    setTimeout(()=> {
        window.location.replace("you-lose.html");
        document.getElementById("dont-worry-message").innerHTML = "Yes, I know, you didn't win $1 BILLION, but you can always try again, and you still earned " + money + ".";
    }, 2000);
}

function addQuestion9Money(){
    window.localStorage.setItem('money', "$16,000,000");
    window.location.replace("question10.html");
}

function getQuestion9Wrong(){
    window.localStorage.setItem('money', "$8,000,000");
    
    
    // get values from localStorage and store in variables
    email = window.localStorage.getItem('email');
    money = window.localStorage.getItem('money');
    date = window.localStorage.getItem('date');

    // save game data to firebase rtdb and go to winner screen
    writeData(email, money, date);

    setTimeout(()=> {
        window.location.replace("you-lose.html");
        document.getElementById("dont-worry-message").innerHTML = "Yes, I know, you didn't win $1 BILLION, but you can always try again, and you still earned " + money + ".";
    }, 2000);
}

function addQuestion10Money(){
    window.localStorage.setItem('money', "$32,000,000");
    window.location.replace("question11.html");
}

function getQuestion10Wrong(){
    window.localStorage.setItem('money', "$16,000,000");
    
    
    // get values from localStorage and store in variables
    email = window.localStorage.getItem('email');
    money = window.localStorage.getItem('money');
    date = window.localStorage.getItem('date');

    // save game data to firebase rtdb and go to winner screen
    writeData(email, money, date);

    setTimeout(()=> {
        window.location.replace("you-lose.html");
        document.getElementById("dont-worry-message").innerHTML = "Yes, I know, you didn't win $1 BILLION, but you can always try again, and you still earned " + money + ".";
    }, 2000);
}

function addQuestion11Money(){
    window.localStorage.setItem('money', "$64,000,000");
    window.location.replace("question12.html");
}

function getQuestion11Wrong(){
    window.localStorage.setItem('money', "$32,000,000");
    
    
    // get values from localStorage and store in variables
    email = window.localStorage.getItem('email');
    money = window.localStorage.getItem('money');
    date = window.localStorage.getItem('date');

    // save game data to firebase rtdb and go to winner screen
    writeData(email, money, date);

    setTimeout(()=> {
        window.location.replace("you-lose.html");
        document.getElementById("dont-worry-message").innerHTML = "Yes, I know, you didn't win $1 BILLION, but you can always try again, and you still earned " + money + ".";
    }, 2000);
}

function addQuestion12Money(){
    window.localStorage.setItem('money', "$125,000,000");
    window.location.replace("question13.html");
}

function getQuestion12Wrong(){
    window.localStorage.setItem('money', "$64,000,000");
    
    
    // get values from localStorage and store in variables
    email = window.localStorage.getItem('email');
    money = window.localStorage.getItem('money');
    date = window.localStorage.getItem('date');

    // save game data to firebase rtdb and go to winner screen
    writeData(email, money, date);

    setTimeout(()=> {
        window.location.replace("you-lose.html");
        document.getElementById("dont-worry-message").innerHTML = "Yes, I know, you didn't win $1 BILLION, but you can always try again, and you still earned " + money + ".";
    }, 2000);
}

function addQuestion13Money(){
    window.localStorage.setItem('money', "$250,000,000");
    window.location.replace("question14.html");
}

function getQuestion13Wrong(){
    window.localStorage.setItem('money', "$125,000,000");
    
    
    // get values from localStorage and store in variables
    email = window.localStorage.getItem('email');
    money = window.localStorage.getItem('money');
    date = window.localStorage.getItem('date');

    // save game data to firebase rtdb and go to winner screen
    writeData(email, money, date);

    setTimeout(()=> {
        window.location.replace("you-lose.html");
        document.getElementById("dont-worry-message").innerHTML = "Yes, I know, you didn't win $1 BILLION, but you can always try again, and you still earned " + money + ".";
    }, 2000);
}

function addQuestion14Money(){
    window.localStorage.setItem('money', "$500,000,000");
    window.location.replace("question15.html");
}

function getQuestion14Wrong(){
    window.localStorage.setItem('money', "$250,000,000");
    
    
    // get values from localStorage and store in variables
    email = window.localStorage.getItem('email');
    money = window.localStorage.getItem('money');
    date = window.localStorage.getItem('date');

    // save game data to firebase rtdb and go to winner screen
    writeData(email, money, date);

    setTimeout(()=> {
        window.location.replace("you-lose.html");
        document.getElementById("dont-worry-message").innerHTML = "Yes, I know, you didn't win $1 BILLION, but you can always try again, and you still earned " + money + ".";
    }, 2000);
}

function addQuestion15Money(){
    window.localStorage.setItem('money', "$1,000,000,000");

    // get values from localStorage and store in variables
    email = window.localStorage.getItem('email');
    money = window.localStorage.getItem('money');
    date = window.localStorage.getItem('date');

    // save game data to firebase rtdb and go to winner screen
    writeData(email, money, date);

    setTimeout(()=> {
        window.location.replace("you-win.html");
    }, 2000);
}

function getQuestion15Wrong(){
    window.localStorage.setItem('money', "$500,000,000");
    
    
    // get values from localStorage and store in variables
    email = window.localStorage.getItem('email');
    money = window.localStorage.getItem('money');
    date = window.localStorage.getItem('date');

    // save game data to firebase rtdb and go to winner screen
    writeData(email, money, date);

    setTimeout(()=> {
        window.location.replace("you-lose.html");
        document.getElementById("dont-worry-message").innerHTML = "Yes, I know, you didn't win $1 BILLION, but you can always try again, and you still earned " + money + ".";
    }, 2000);
}