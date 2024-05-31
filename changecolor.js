const getcolor=()=>{
    const randomno = Math.floor(Math.random()*16777215);
    const randomcolor = "#" + randomno.toString(16);
    document.querySelector("body").style.backgroundColor=randomcolor;
    document.querySelector(".color-no").innerText=randomcolor;
    document.querySelector("button").style.backgroundColor=randomcolor;
    
}
//event call..
document.querySelector("button").addEventListener("click",getcolor);
//initial call..
getcolor();  