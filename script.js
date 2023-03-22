// var count  
var countElement = document.querySelector("#jane")

function changeName(element) {
    // document.querySelector("#jane")
    countElement.innerText = "Tillman Pugh"
}





function hideName(element) {
    document.getElementById("bye-todd").style.visibility = "hidden";
    document.getElementById("bye-todd2").style.visibility = "hidden";
    
}


function    hideName2(element) {
    document.getElementById("bye-phil").style.visibility = "hidden";
    document.getElementById("bye-phil2").style.visibility = "hidden";
}


    var count = 2

function minus1(element) {

    var countMinus = document.getElementById("requests-number");
    if(count >= 0){
        countMinus.innerText = count;
    }
    count --
    
}

var count = 2

function minus2(element) {
    
    var countMinus = document.getElementById("requests-number")
    if(count >= 0){
        countMinus.innerText = count;
    }
    count --

}




function handleClickEvent1(){
    hideName();
    // hideName2();
    minus1();
}

function handleClickEvent2(){
    // hideName();
    hideName2();
    minus2();
}


