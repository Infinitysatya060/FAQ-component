var question =document.querySelectorAll(".question");
var answer = document.querySelectorAll(".answer");
var button = document.querySelectorAll(".btn1");

question.forEach( question =>{
    question.addEventListener("click",()=>{
        const faq =question.nextElementSibling;
        faq.classList.toggle("active");
     
        
        })
});

