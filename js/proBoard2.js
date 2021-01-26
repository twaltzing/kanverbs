var verbRoots = [
    {"english":"A",
    "mohawk":"a",
    "color":"red"},
    {"english":"E",
    "mohawk":"e",
    "color":"red"},
    {"english":"I",
    "mohawk":"i",
    "color":"red"},
    {"english":"O",
    "mohawk":"o",
    "color":"red"},
    {"english":"C",
    "mohawk":"c",
    "color":"red"},

    {"english":"A",
    "mohawk":"a",
    "color":"blue"},
    {"english":"E",
    "mohawk":"e",
    "color":"blue"},
    {"english":"I",
    "mohawk":"i",
    "color":"blue"},
    {"english":"O",
    "mohawk":"o",
    "color":"blue"},
    {"english":"C",
    "mohawk":"c",
    "color":"blue"},

    {"english":"likes",
    "mohawk":"nònwe\'s",
    "color":"red"},
    {"english":"knows s.t.",
    "mohawk":"ateryén:tare",
    "color":"blue"},
    {"english":"healthy",
    "mohawk":"ata'karí:te",
    "color":"blue"},
    {"english":"remembers",
    "mohawk":"ehyá:ra\'s",
    "color":"red"},
    {"english":"looks for",
    "mohawk": "é:sak\'s",
    "color":"red"},
    {"english":"stays at",
    "mohawk": "ì:teron",
    "color":"red"},
    {"english":"sews",
    "mohawk":"′níkhons",
    "color":"red"},
    {"english":"understands",
    "mohawk": "′nikonhrayén:ta\'s",
    "color":"blue"},
    {"english":"sick",
    "mohawk": "nonhwáktani",
    "color":"blue"},
    {"english": "resting",
    "mohawk": "atoríhsen",
    "color":"blue"},
    {"english":"trying hard",
    "mohawk":"ahkwíhsron",
    "color":"red"},
    {"english":"driving",
    "mohawk":"ató:ris",
    "color":"red"},
    {"english":"happy",
    "mohawk":"atshennòn:ni",
    "color":"blue"},
    /* {"english":"working",
    "mohawk":"yó′ten\'s",
    "color":"blue"},
    {"english":"listening",
    "mohawk":"atahónhsatats",
    "color":"red"},
    {"english":"singing",
    "mohawk":"aterennótha",
    "color":"red"},
    {"english":"writing",
    "mohawk":"hyátons",
    "color":"red"},
    {"english":"drawing",
    "mohawk":"ráhstha",
    "color": "red"},
    {"english":"have a pet",
    "mohawk":"náhskwayen",
    "color":"blue"},
    {"english":"know st",
    "mohawk":"ateryèn'tare",
    "color":"blue"},
    {"english":"buying a car",
    "mohawk":"′serehtsherahnínons",
    "color":"red"}, */
    {"english":"studying",
    "mohawk":"ateweyénstha",
    "color":"red"},
    {"english":"angry",
    "mohawk":"na'kwén\'on",
    "color":"blue"},
    {"english":"sad",
    "mohawk":"′nikonhráksen",
    "color":"blue"},
    {"english":"awake",
    "mohawk":"yé:'on",
    "color":"blue"},
    {"english":"enjoying",
    "mohawk":"on'wéhskwani",
    "color":"blue"},
    {"english":"sleeping",
    "mohawk": "ítahs",
    "color": "blue"}



]


var pronounTest = [
    {
    stemColor: "red",
    stemLetter: "c",
    pronouns:{   
        I: "ke",
        you: "se",
        he: "ra",
        she: "ye",
        it: "ka",
        we2inc: "teni",
        we2exc: "yakeni",
        youtwo: "seni",
        MF2: "ni",
        F2: "keni",
        we3inc: "tewa",
        we3exc: "yakwa",
        you3: "sewa",
        MF3: "rati",
        F3: "konti"
        }      
    }, 

    {
        stemColor: "red",
        stemLetter: "a",
        pronouns:{   
            I: "k",
            you: "s",
            he: "r",
            she: "yon",
            it: "w",
            we2inc: "ty",
            we2exc: "yaky",
            youtwo: "tsy",
            MF2: "(h)y",
            F2: "ky",
            we3inc: "tew",
            we3exc: "yakw",
            you3: "sew",
            MF3: "ron",
            F3: "kon"
            }      
        },

        {
        stemColor: "red",
        stemLetter: "e",
        pronouns:{   
            I: "k",
            you: "s",
            he: "r",
            she: "yak",
            it: "w",
            we2inc: "ten",
            we2exc: "yaken",
            youtwo: "sen",
            MF2: "n",
            F2: "ken",
            we3inc: "tew",
            we3exc: "yakw",
            you3: "sew",
            MF3: "ronn",
            F3: "konn"
            }      
        },
        {
            stemColor: "blue",
            stemLetter: "e",
            pronouns:{   
                I: "wak",
                you: "s",
                he: "raw",
                she: "yakaw",
                it: "yaw",
                we2inc: "yonkeni",
                we2exc: "yonkeni",
                youtwo: "sen",
                MF2: "ron",
                F2: "yon",
                we3inc: "yonkw",
                we3exc: "yonkw",
                you3: "sew",
                MF3: "ron",
                F3: "yon"
                }      
            },

        {
            stemColor: "red",
            stemLetter: "i",
            pronouns:{   
                I: "k",
                you: "s",
                he: "ren",
                she: "ye",
                it: "ken",
                we2inc: "ten",
                we2exc: "yaken",
                youtwo: "sen",
                MF2: "n",
                F2: "ken",
                we3inc: "tewen",
                we3exc: "yakwen",
                you3: "sewen",
                MF3: "rat",
                F3: "kont"
                }      
            },

            {
                stemColor: "blue",
                stemLetter: "i",
                pronouns:{   
                    I: "wak",
                    you: "sen",
                    he: "ro",
                    she: "yako",
                    it: "yo",
                    we2inc: "yonken",
                    we2exc: "yonken",
                    youtwo: "sen",
                    MF2: "rot",
                    F2: "yot",
                    we3inc: "yonkwen",
                    we3exc: "yonkwen",
                    you3: "sewen",
                    MF3: "rot",
                    F3: "yot"
                    }      
                },

            {
                stemColor: "blue",
                stemLetter: "c",
                pronouns:{   
                    I: "wake",
                    you: "sa",
                    he: "ro",
                    she: "yako",
                    it: "yo",
                    we2inc: "yonkeni",
                    we2exc: "yonkeni",
                    youtwo: "seni",
                    MF2: "roti",
                    F2: "yoti",
                    we3inc: "yonkwa",
                    we3exc: "yonkwa",
                    you3: "sewa",
                    MF3: "roti",
                    F3: "yoti"
                    }      
                },

                {
                    stemColor: "blue",
                    stemLetter: "a",
                    pronouns:{   
                        I: "wak",
                        you: "s",
                        he: "ro",
                        she: "yako",
                        it: "yo",
                        we2inc: "yonky",
                        we2exc: "yonky",
                        youtwo: "tsy",
                        MF2: "ron",
                        F2: "yon",
                        we3inc: "yonkw",
                        we3exc: "yonkw",
                        you3: "sew",
                        MF3: "ron",
                        F3: "yon"
                        }      
                    },

                    {
                        stemColor: "blue",
                        stemLetter: "o",
                        pronouns:{   
                            I: "wak",
                            you: "s",
                            he: "ra",
                            she: "yaka",
                            it: "ya",
                            we2inc: "yonken",
                            we2exc: "yonken",
                            youtwo: "sen",
                            MF2: "ron",
                            F2: "yon",
                            we3inc: "yonky",
                            we3exc: "yonky",
                            you3: "tsy",
                            MF3: "ron",
                            F3: "yon"
                            }      
                        },
                        {
                            stemColor: "red",
                            stemLetter: "o",
                            pronouns:{   
                                I: "k",
                                you: "(h)s",
                                he: "(h)r",
                                she: "yak",
                                it: "y",
                                we2inc: "ten",
                                we2exc: "yaken",
                                youtwo: "sen",
                                MF2: "(h)n",
                                F2: "ken",
                                we3inc: "ty",
                                we3exc: "yaky",
                                you3: "tsy",
                                MF3: "ronn",
                                F3: "konn"
                                }      
                            }

]

/* for (i=0; i<pronounTest.length; i++){
    console.log(pronounTest[i].stemLetter);
if (pronounTest[i].color==="blue" && pronounTest[i].stemLetter==="c")
{
console.log(pronounTest[i].pronouns.I);
}} */


const verbRootsList=[];
function extractRoots(){
    for (i=0; i<verbRoots.length; i++){
    verbRootsList.push(verbRoots[i].english);
    }
    verbRootsList.sort();
    return verbRootsList;
}



var buttonStuff="";
var stemType = ""; 
var stem="";
var stemColor="";
var list = extractRoots(verbRoots);
list.sort;
/* remove duplicate letters to produce plain-root buttons at top */

list.splice(0,10);
var letters=["c","a","e","i","o"];
list=[...letters, ...list];
list.toLowerCase;


/* for each English word in the sorted list, produce the corresponding button */
list.forEach((englishWord)=>{
    verbRoots.forEach((verb)=>{
        console.log( verb.english.toLowerCase() , englishWord);
            if (englishWord === verb.english.toLowerCase()){ 
                /* console.log(verb.english +":" + englishWord); */
                buttonStuff += `<button class="verbGenerator" data-mohawk=${verb.mohawk} data-color=${verb.color}span style='color: ${verb.color}'>${verb.english}</span></button>`;
            }
            })


    
        }) ;





    var rootButtons=document.getElementById("rootButtons");
    rootButtons.innerHTML=buttonStuff;

    // using eventlistener here for verbGenerator buttons
    rootButtons.addEventListener('click',function(e){
        if(e.target.classList.contains('verbGenerator')){

            var firstRoot = e.target.getAttribute('data-mohawk');

            fillRoot(e.target.getAttribute('data-mohawk'));
            document.getElementById("prefixes").innerHTML="";

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

   document.getElementById("stem").style.display="block";
    document.getElementById("altStem").style.display="none";

        //clear pronoun display box
    var x = document.getElementById("prefixes");

    x.innerHTML="";
    //get root type
    stemLetter=document.getElementById("stem").value[0];
    //group all consonants as c stems
    var consonant=isConsonant(stemLetter);
    console.log("StemLetter is now "+stemLetter);

    //get the stem we're working with
    stem=document.getElementById("stem").value;
    console.log("Stem is "+stem);

/*     console.log(verbRoots[1].color);
    stemColor=verbRoots[1].color;
    console.log(stemColor+" is the color"); */

    for (r=0; r<verbRoots.length; r++) {
        /* console.log("Root "+r+" is "+verbRoots[r].mohawk); */
        //find the stem color
        if (verbRoots[r].mohawk===stem){
            stemColor=verbRoots[r].color;
            meaning=verbRoots[r].english;
            
        }
    }
   console.log("Stem color is "+stemColor); 

    //match corresponding pronoun by person
    for (i=0; i<pronounTest.length; i++){

    if (pronounTest[i].stemLetter === stemLetter && pronounTest[i].stemColor === stemColor)
    {
        console.log("Found letter and color");
        /* 0 */

        let pickList = pronounTest[i].pronouns;
        var item;
        if( pickList.hasOwnProperty(person) ) {
            item = pickList[person];

/*Sound exception where o kills a */



if(item==="ro" && (stemLetter==="a" || stemLetter==="i"))  {
    killFirstLetter(stem); 
} 
if (item==="yako" && (stemLetter==="a"|| stemLetter==="i")){
    killFirstLetter(stem);
}
if (item==="yo" && (stemLetter==="a"|| stemLetter==="i")){
    killFirstLetter(stem);
}

/* ends in -wen before i kills the i */
let ending = item.substr(-2);
console.log (ending);
if (ending==="en" && stem[0]==="i"){
    killFirstLetter(stem);
}
if (item.substr(-3)==="ren" && stem[0]==="ì"){
    killFirstLetter(stem);
    item = "rèn";
}

if (item.substr(-2)==="ye" && stem[0]==="ì"){
    killFirstLetter(stem);
    item = "yè";
}

/* Call fillRoot to replace box, but how do you know what root to fill?? */
          
            /* console.log("You are looking for "+ item ); */
            colorInfoStart= "<span style='color:"+ stemColor +"'>"
            colorInfoEnd= "</span>";
        /* insert the pronoun into the box */
            x.innerHTML= colorInfoStart + item + colorInfoEnd ;

  
        }

} 
        }
    }




function isConsonant(obj){
            if (["h","n","s","t","k","'", "′", "r", "y"].includes(obj)) {
                stemLetter="c";

            if (["á", "à"].includes(obj)) {
                    stemLetter="a";
                }

            }
            if (["í", "ì"].includes(obj)) {
                stemLetter="i";
            }

            if (["é", "è"].includes(obj)) {
                stemLetter="e";
            }

            if (["ó", "ò"].includes(obj)) {
                stemLetter="o";
            }

        }

function killFirstLetter(stem){
    stemExc = stem.slice(1);
    console.log("new stem is "+stemExc);
    /* make a new div for this */
    document.getElementById("altStem").value=stemExc;
    document.getElementById("altStem").style.display="block";
    document.getElementById("stem").style.display="none";

}
