const action = document.getElementById("action");
const menu = document.getElementById("menu")

menu.addEventListener("click" , ()=>{
  handle()
})


function handle(){
  menu.classList.toggle("is-active");
  action.classList.toggle("is-active");
}