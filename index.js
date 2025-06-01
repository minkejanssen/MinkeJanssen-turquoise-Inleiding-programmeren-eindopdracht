// const voor de divs selecteren in de html // 
const startijskoffie = document.getElementById("startijskoffie");
const stap1 = document.getElementById("stap1");
const stap2 = document.getElementById("stap2");
const klaar = document.getElementById("klaar")

// const voor buttons selecteren in de html // 
const startknop = document.querySelector("button")
const verderknop1 = document.getElementById("verderknop1")
const verderknop2 = document.getElementById("verderknop2")

// const voor afbeeldingen of audio selecteren in de html // 
const afbeeldinghavermelk = document.getElementById("havermelk")
const afbeeldingkoemelk = document.getElementById("koemelk")
const afbeeldingsiroopvanille= document.getElementById("Vanille")
const afbeeldingsiroopkaramel= document.getElementById("Karamel")
const geluid1 = document.getElementById("geluid1")
const geluid2 = document.getElementById("geluid2")

// DOM manipulatie voor de titel van de pagina //
const h1 = document.querySelector("h1")
 h1.style.color = "darkgreen";

 
let order = document.querySelector("p");


// if else/classlist om melktypes te selecteren, als koemelk is geselecteerd dan is havermelk niet geselecteerd en andersom, zelfde geldt voor siroop//
//https://www.w3schools.com/jsref/prop_element_classlist.asp, hulp om een classlist toe te voegen//
// add zorgt ervoor dat de melk of siroop wordt geselecteerd en remove zorgt ervoor dat niet beide melksoorten of siroopsoorten worden geselecteerd, maar een van de twee//
function selecteerMelk(melktype) {
    if (melktype == "koe") {
        afbeeldingkoemelk.classList.add("selecteer-rand");
        afbeeldinghavermelk.classList.remove("selecteer-rand");
    } else if (melktype== "haver") {
        afbeeldinghavermelk.classList.add("selecteer-rand");
        afbeeldingkoemelk.classList.remove("selecteer-rand");
    }
}

function selecteerSiroop(sirooptype) {
    if (sirooptype == "vanille") {
        afbeeldingsiroopvanille.classList.add("selecteer-rand");
        afbeeldingsiroopkaramel.classList.remove("selecteer-rand");
    } else if (sirooptype== "karamel") {
        afbeeldingsiroopkaramel.classList.add("selecteer-rand");
        afbeeldingsiroopvanille.classList.remove("selecteer-rand");
    }
}

// hulp van de powerpoint slide, een tekstje laten veranderen als je op tekst klikt//
function veranderTekst() {
    order.textContent = "Maak een ijskoffie met karamel en oatmelk"
}

//Hulp om elementen te laten verdwijnen: ChatGPT, prompt: "hoe zorg je ervoor met javascript dat elementen verdwijnen en nieuwe terugkomen?" + ''En met groep elementen?"
function vervangGroepen(stap){
    if (stap == "start") {  
        console.log ("start")      
        startijskoffie.style.display = "none";
        stap1.style.display = "block";
    } else if (stap == "melk") {
        console.log("melk")
        stap1.style.display = "none";
        stap2.style.display = "block";
    } else if ( stap == "siroop") {
        console.log("siroop")
        stap2.style.display = "none";
        klaar.style.display = "block";
    } else if (stap == "klaar"){
        console.log("klaar")
        klaar.style.display = "none";
        startijskoffie.style.display = "block"; 
    }
}

order.addEventListener("click", veranderTekst);

// eventlistener als je op een afbeelding van siroop of melk klikt dan wordt de functie van bijv. de koemelk selecteren uitgevoerd//
afbeeldinghavermelk.addEventListener("click", function() {
    selecteerMelk("haver"); 
});

afbeeldingkoemelk.addEventListener("click", function(){
    selecteerMelk("koe")
});

afbeeldingsiroopkaramel.addEventListener("click", function(){
    selecteerSiroop("karamel"); 
});

afbeeldingsiroopvanille.addEventListener("click", function(){
    selecteerSiroop("vanille")
});

// eventlisteners voor de functie verder gaan en terug naar begin als je op een button klikt// 
startknop.addEventListener("click", function(){
    vervangGroepen("start");
});


verderknop1.addEventListener("click", function(){
    vervangGroepen("melk");
});

verderknop2.addEventListener("click", function(){
    vervangGroepen("siroop");
});

opnieuwknop.addEventListener("click", function(){
    vervangGroepen("klaar");
});

// geluid als je op een afbeelding klikt. hulp van chatGPT, prompt: "hoe voeg je een geluid toe als je op een afbeelding klikt in javascript?"//
koffie.addEventListener("click", function (){
    geluid1.currentTime = 0;
    geluid1.play();
});

ijskoffieklaar.addEventListener("click", function (){
    geluid2.currentTime = 0;
    geluid2.play();
});







