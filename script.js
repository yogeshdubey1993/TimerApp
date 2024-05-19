let Timer = document.getElementById("safeTimer");
let button = document.createElement("button");
button.textContent = "Start";
let buttontwo = document.createElement("button");
// buttontwo.id = "stop";
buttontwo.textContent = "Stop";
let buttonthree = document.createElement("button");
buttonthree.textContent = "Reset";
button.addEventListener("click",function(){
    let count = 0;
    let id;
id = setInterval(function(){
    count++;
    document.querySelector("p").textContent = count;
}, 1000);
});
buttontwo.addEventListener("click",function(){
    clearInterval();
});
buttonthree.addEventListener("click",function(){
document.querySelector("p").textContent = 0;
});
Timer.append(button,buttontwo,buttonthree);
