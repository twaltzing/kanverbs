var stemType = ""; 
 
var pronounList = [ 
    [ "a",
        {"person":"I",
        "mohawk":"k",
        "color":"red"} ,
        {"person":"you",
        "mohawk":"s",
        "color":"red"},
        {"person":"he",
        "mohawk":"r",
        "color":"red"},
        {"person":"she",
        "mohawk":"yon",
        "color":"red"},
        
    ] ,
    [ "c",
    {"person":"I",
    "mohawk":"ke",
    "color":"red"} ,
    
    {"person":"you",
    "mohawk":"se",
    "color":"red"},

    {"person":"he",
        "mohawk":"ra",
        "color":"red"},

        {"person":"she",
        "mohawk":"ye",
        "color":"red"}
]   
]

var verbRoots = [
    {"english":"likes",
    "mohawk":"nònwe&#39;s"},
    {"english":"remembers",
    "mohawk":"ehyá:ra&#39;s"},
    {"english":"looks for",
    "mohawk": "é:sak&#39;s"},
    {"english":"stays at",
    "mohawk": "í:teron"},
    {"english":"sews",
    "mohawk":"&#39;níkhons"}
]

var buttonStuff="";

verbRoots.forEach((verb)=>{
    buttonStuff += `<button class="verbGenerator" data-mohawk=${verb.mohawk}>${verb.english}</button>`;
});




    var rootButtons=document.getElementById("rootButtons");
    rootButtons.innerHTML=buttonStuff;

    // using eventlistener here for verbGenerator buttons
    rootButtons.addEventListener('click',function(e){
        if(e.target.classList.contains('verbGenerator')){
            fillRoot(e.target.getAttribute('data-mohawk'))
        }
    })  

    

function fillRoot(verb){
    /* console.log(verb) */
    var s = document.getElementById("stem");
    console.log(s);
    s.value = verb;
    }


function showButtons(group){
    var a=document.getElementById("singulars");
    var b=document.getElementById("duals");
    var c=document.getElementById("plurals");
    a.style.display="none";
    b.style.display="none";
    c.style.display="none";
    var y = document.getElementById(group);
    y.style.display = "block";
    console.log('showingButtons');
}


function showPro(person) {
   //clear pronoun display box
    var x = document.getElementById("prefixes");
    x.innerHTML="";
    //get root type

    stemLetter=document.getElementById("stem").value[0];

    var consonant=isConsonant(stemLetter);
    console.log("StemLetter is now "+stemLetter);
 
    //match corresponding pronoun by person
for (i=0; i<pronounList.length; i++){
    // match stem
    if (pronounList[i][0]===stemLetter) {
        for (j=0; j<pronounList[i].length; j++){
            if (pronounList[i][j].person === person) {
                x.innerHTML=pronounList[i][j].mohawk;
            }
        }
        }
    }
}



function showPersonButtons(stem){
    // display buttons
    console.log("Okay");
    var personButtons = document.getElementById("pButtons");
    personButtons.innerHTML="<button class='pButton' onClick='displayPronouns('ItoIt')'>I to it</button>"; 
    // more buttons here for all persons
    }



function isConsonant(obj){
            if (["h","n","s","t","k","'"].includes(obj)) {
                stemLetter="c";
            }
        }

