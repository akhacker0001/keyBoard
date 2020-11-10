
var button = document.querySelectorAll("button");
for (let i = 0; i < button.length; i++) {
   button[i].addEventListener("click",function(){
       button[i].classList.add("prassed")
       setTimeout(function(){
           button[i].classList.remove("prassed")
       }, 100)
   })
}
