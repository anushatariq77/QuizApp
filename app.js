var questionsArray=[
    {
        question:"What is the tulip capital of the world?",
        answer:"Netherlands",
        options:[
            "USA",
            "Green land",
            "Netherlands",
            "Switzerland"
        ]
    },
    {
        question:"Which is known as the leap day or leap year day?",
        answer:"Feb 29",
        options:[
          "Feb 29",
          "Feb 28",
          "March 01",
          "Feb 01"
        ]
    },
    {
        question:"Which was the first country to give a robot citizenship?",
        answer:"Saudi Arabia",
        options:[
            "UAE",
            "Saudi Arabia",
            "Qatar",
            "USA"
        ]
    },
    {
        question:"What is the world’s fastest-sinking city?",
        answer:"Jakarta",
        options:[
          "Jakarta",
          "Manila",
          "Shanghai",
          "None of These"
        ]
    },
    {
        question:"Which country Built A 250-Acre Solar Farm Shaped Like A Giant Panda?",
        answer:"China",
        options:[
            "Japan",
            "China",
            "South Korea",
            "None of These"
        ]
    },
]

function showQuestion(e){
    var questionElement=document.getElementById("questionElement")
    questionElement.innerHTML=questionsArray[e].question
    var optionElement=document.getElementsByClassName("optionElement")
    
    for(var i=0;i<optionElement.length;i++){
        optionElement[i].innerHTML=questionsArray[e].options[i]
    }
}
 var questioncount=0;
 var score=0;

 function nextQuestion(){
    validate(questioncount)
    questioncount++;
    removeActiveClass()
    if(questionsArray[questioncount]!=null){
        showQuestion(questioncount) 
    }
    else{
        console.log("finish")
        var card=document.getElementsByClassName("card")[0]
        card.style.display="none"
        var a=document.createElement("h1")
        var text=document.createTextNode("Your Score is : "+score+"/50")
        a.appendChild(text)
        document.getElementsByClassName("score")[0].appendChild(a)
    }
 }
 function putActive(e){
     removeActiveClass()
  e.classList.add("active")
}
function removeActiveClass(){
    var active=document.getElementsByClassName("active")
    for(var i=0;i<active.length;i++){
        active[i].classList.remove("active")
    }
}
function validate(e){
    var active=document.getElementsByClassName("active")[0]
    var a=active.innerHTML
    if(a==questionsArray[e].answer){
        score=score+10;
    }
}