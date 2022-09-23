const chars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbs = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let symbols=true;
let numbers=true;
let len=14;
function toggleSymbols(){
    let t=document.getElementById("symbols");
    if(symbols){
        t.style.textAlign="left";
        t.style.backgroundColor="grey";
        t.style.opacity="0.7";
    }else{
        t.style.textAlign="right";
        t.style.backgroundColor="greenyellow";
        t.style.opacity="1";
    }
    symbols=!symbols;
}
function toggleNumbers(){
    let t=document.getElementById("numbers");
    if(numbers){
        t.style.textAlign="left";
        t.style.backgroundColor="grey";
        t.style.opacity="0.7";
    }else{
        t.style.textAlign="right";
        t.style.backgroundColor="greenyellow";
        t.style.opacity="1";
    }
    numbers=!numbers;
}
function adjustlen(){
    len=document.getElementById("slider").value;
    document.getElementById("slider-value").textContent=len;
}
function generate(){
    const out=document.getElementById("output");
    while (out.firstChild) {
        out.removeChild(out.lastChild);
    }
    let characters=[];
    chars.forEach((item)=>{characters.push(item)});
    if(numbers){nums.forEach((item)=>{characters.push(item)})}
    if(symbols){symbs.forEach((item)=>{characters.push(item)})}
    let pass1="";
    for(let i=0;i<len;i++){
        pass1+=characters[Math.floor(Math.random()*characters.length)];
    }
    let pass2="";
    for(let i=0;i<len;i++){
        pass2+=characters[Math.floor(Math.random()*characters.length)];
    }
    const but1=document.createElement("button");
    but1.appendChild(document.createTextNode(pass1));
    but1.addEventListener("click",()=>{navigator.clipboard.writeText(pass1);})
    const but2=document.createElement("button");
    but2.appendChild(document.createTextNode(pass2));
    but2.addEventListener("click",()=>{navigator.clipboard.writeText(pass2);})
    out.appendChild(but1);
    out.appendChild(but2);
}
