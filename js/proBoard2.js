var verbRoots = [
    {"english":"likes",
    "mohawk":"nònwe\'s",
    "color":"red"},
    {"english":"remembers",
    "mohawk":"ehyá:ra\'s",
    "color":"red"},
    {"english":"looks for",
    "mohawk": "é:sak\'s",
    "color":"red"},
    {"english":"stays at",
    "mohawk": "í:teron",
    "color":"red"},
    {"english":"sews",
    "mohawk":"′níkhons",
    "color":"red"},
    {"english":"understands",
    "mohawk": "′nikonhrayén:ta\'s",
    "color":"blue"},
    {"english":"being sick",
    "mohawk": "nonhwáktani",
    "color":"blue"},
    {"english": "resting",
    "mohawk": "atoríhsen",
    "color":"blue"},
    {"english":"try hard",
    "mohawk":"ahkwíhsron",
    "color":"red"},
    {"english":"driving",
    "mohawk":"ató:ris",
    "color":"red"},
    {"english":"working",
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
    "color":"red"},
    {"english":"studies",
    "mohawk":"ateweyénstha",
    "color":"red"}


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
                        she: "yak",
                        it: "y",
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

for (i=0; i<pronounTest.length; i++){
    console.log(pronounTest[i].stemLetter);
if (pronounTest[i].color==="blue" && pronounTest[i].stemLetter==="c")
{
console.log(pronounTest[i].pronouns.I);
}}




var buttonStuff="";
var stemType = ""; 
var stem="";
var stemColor="";

verbRoots.forEach((verb)=>{
    buttonStuff += `<button class="verbGenerator" data-mohawk=${verb.mohawk} data-color=${verb.color}span style='color: ${verb.color}'>${verb.english}</span></button>`;
    
});




    var rootButtons=document.getElementById("rootButtons");
    rootButtons.innerHTML=buttonStuff;

    // using eventlistener here for verbGenerator buttons
    rootButtons.addEventListener('click',function(e){
        if(e.target.classList.contains('verbGenerator')){
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
            console.log("****THIS ONE!****");
            stemColor=verbRoots[r].color;
            meaning=verbRoots[r].english;
            
        }
    }
   console.log("Stem color is "+stemColor); 

    //match corresponding pronoun by person
    for (i=0; i<pronounTest.length; i++){
       /*  console.log("StemLetter of data is "+pronounTest[i].stemLetter); 
        console.log("StemColor of data is "+pronounTest[i].stemColor);
        console.log("We seek "+ stemLetter ,stemColor); */
    if (pronounTest[i].stemLetter === stemLetter && pronounTest[i].stemColor === stemColor)
    {
        console.log("Found letter and color");
        /* 0 */

        let pickList = pronounTest[i].pronouns;
        var item;
        if( pickList.hasOwnProperty(person) ) {
            item = pickList[person];
          
            /* console.log("You are looking for "+ item ); */
            colorInfoStart= "<span style='color:"+ stemColor +"'>"
            colorInfoEnd= "</span>";
        
            x.innerHTML= colorInfoStart + item + colorInfoEnd ;

  
        }

} 
        }
    }




function isConsonant(obj){
            if (["h","y","n","s","t","k","'", "′", "r"].includes(obj)) {
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

