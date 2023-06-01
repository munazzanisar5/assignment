window.onload=()=>{
  mobile_menu.style.display = "none";
}


let hamburg = document.querySelector(".hamburg");

let mobile_menu = document.querySelector(".mobile");

hamburg.onclick = function() {
    // mobile.style.display = "block";


    if (mobile_menu.style.display === "block") {
        mobile_menu.style.display = "none";
      } else {
        mobile_menu.style.display = "block";
      }
  }







  // Faq accordian
const faqs= document.querySelectorAll(".FAQs");
let dropdown = document.getElementById("icons")[0];
faqs.forEach(FAQ =>{
  FAQ.addEventListener("click", () =>{
    FAQ.classList.toggle("active");
    dropdown.style.transform= "rotate(180%)";
    if(FAQ.classList.toggle("active")){
      
    }
  })
})


