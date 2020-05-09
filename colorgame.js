var numsquares=6;
var colors= generaterandomcolors(numsquares);


var squares=document.querySelectorAll(".square");
var pickedcolor= pickcolor();
var colordisplay=document.getElementById("colordisplay");
var messagedisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetbutton=document.querySelector("#reset");
var modebuttons=document.querySelectorAll(".mode");

for(var i=0;i<modebuttons.length;i++){
    modebuttons[i].addEventListener("click",function(){
        modebuttons[0].classList.remove("selected");
        modebuttons[1].classList.remove("selected");
        this.classList.add("selected");
    });
}

easybtn.addEventListener("click",function(){
    hardbtn.classList.remove("selected");
    easybtn.classList.add("selected");
    numsquares=3;
    colors=generaterandomcolors(numsquares);
    pickedcolor=pickcolor();
    colordisplay.textContent=pickedcolor;
    for(var i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.backgroundColor=colors[i];
        } else{
            squares[i].style.display="none";
        }
    }
});


hardbtn.addEventListener("click",function(){
    hardbtn.classList.add("selected");
    easybtn.classList.remove("selected");
    numsquares=6;
    colors=generaterandomcolors(numsquares);
    pickedcolor=pickcolor();
    colordisplay.textContent=pickedcolor;
    for(var i=0;i<squares.length;i++){
            squares[i].style.display="block";
    }
    });

resetbutton.addEventListener("click", function(){
    //generate all new colorss
    colors=generaterandomcolors(numsquares);
    //pick a new random color from array
    pickedcolor=pickcolor();
    //change colordisplay to match picked color
    colordisplay.textContent=pickedcolor;
    this.textContent="New Colors";

    messagedisplay.textContent="";
    //change colors of squares
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor=colors[i];
    }
    h1.style.backgroundColor="steelblue";
})

colordisplay.textContent = pickedcolor;


for(var i=0; i<squares.length; i++){
    //add initial colors to quares
    squares[i].style.backgroundColor=colors[i];

    //add click listeners to square
    squares[i].addEventListener("click",function(){
    
    //grab color of clicked square
    var clickedcolor=this.style.backgroundColor;

    //compare color to pickedcolor
    if(clickedcolor===pickedcolor){
       messagedisplay.textContent="Correct!!";
       resetbutton.textContent="Play Again?";
       changecolors(clickedcolor);
       h1.style.backgroundColor=clickedcolor;
    }else{
    this.style.backgroundColor="#232323";
    messagedisplay.textContent="Try Again";
    }
    });
}


function changecolors(color){
    //loop through all squares
    for(var i=0;i<colors.length;i++)

    //change each color to match color
    squares[i].style.backgroundColor=color;
}


function pickcolor(){
    var random= Math.floor(Math.random() * colors.length);
    return colors[random];
}

 
function generaterandomcolors(num){
//make an array 
var arr=[]
//repeat num times
for(var i=0; i<num; i++){
    arr.push(randomcolor())
}
//return that array
return arr;
}

function randomcolor(){
    //pick a "red" from 0 - 255
    var r= Math.floor(Math.random() * 256);
    //pick a "green from 0 - 255
    var g= Math.floor(Math.random() * 256);
    //pick a "blue" from 0 - 255
    var b= Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}