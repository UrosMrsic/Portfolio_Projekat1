const pitanja = [["Koje godine je rođen Nikola Tesla?", "1856"], ["Gde je rođen Nikola Tesla?", "Smiljan"], ["Koje godine je umro Nikola Tesla?", "1943"], ["Najpoznatiji Teslin izum je?", "Teslin transformator"], ["Smrtni neprijatelj Nikole Tesle (jk)", "Edison"]]
var brPitanja = 1;
var rezultat = 0;

function zapocniKviz(){
    document.getElementById("start").remove();
    document.getElementById("div").classList.remove("d-none");
}

function clickbtn(){
    proveri();
    pitanja.shift();
    brPitanja++;
    postavka();
}

function postavka(){
    if(pitanja.length != 0){
        document.getElementById("pitanje").innerHTML = pitanja[0][0];
        document.getElementById("brPitanja").innerHTML = "Pitanje " + brPitanja;
    }
    else{
        document.getElementById("brPitanja").innerHTML = "Završen kviz";
        document.getElementById("pitanje").innerHTML = "Vaš rezultat je: " + rezultat;
        document.getElementById("text-field").remove();
        document.getElementById("button").remove();
        document.getElementById("button2").classList.remove("d-none");
    }
}

function proveri(){
    if(document.getElementById("text-field").value == pitanja[0][1]){
        rezultat++;
    }
    document.getElementById("text-field").value = "";
}