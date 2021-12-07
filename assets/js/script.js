var userName = document.querySelector("#userName");
var headerText = document.querySelector("#headerText");
var startBtn = document.querySelector("#start-btn");
var homePage = document.querySelector("#home-page");
var lionImg = document.querySelector("#lion");


 function startQuiz() {
    
    //removing elements from first page
    homePage.remove()
    lionImg.remove()

    //showing the username in console 
    console.log(userName.value);

    //create new content 
   const firstQuestionHolder = document.createElement('div');

   const firstQuestion = document.createTextNode("TESTING");

   firstQuestionHolder.appendChild(firstQuestion);

    // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("home-page");
  document.body.insertBefore(firstQuestionHolder, currentDiv);
    
    

   
};


//Event Listener at End of JS 

startBtn.addEventListener('click', startQuiz);


