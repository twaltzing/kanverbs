
const roots =[
    { "root": "nònwe's",
        "color": "red",
        "english": "likes"
        },
    { "root": "atoris",
        "color": "red",
        "english": "drives"
        }, 
    { "root": "ateweyénhstha",
        "color": "red",
        "english": "studies"
        }  
]



var btnI = document.getElementById("I");
var btnYou = document.getElementById('you');
var btnHe = document.getElementById('he');
var btnShe = document.getElementById('she');
var btnFluffy = document.getElementById("fluffy");

btnI.addEventListener('click', showPro(color, "I"));


var prefixBox = document.getElementById("prefix");




function showPro(root, person){
    var color = root[color];
        console.log("Root color is " +color);
    var stem = "c";
    //assume everything's a C stem
    if (root[stem][0].toLowerCase="a"){
        // it's an a-stem
        stem="a";
    }
    if (root[stem][0].toLowerCase="e"){
        // it's an a-stem
        stem="e";
    }
    if (root[stem][0].toLowerCase="i"){
        // it's an a-stem
        stem="i";
    }
    if (root[stem][0].toLowerCase="o"){
        // it's an a-stem
        stem="o";
    } 
    console.log("Stem is "+ stem);

}