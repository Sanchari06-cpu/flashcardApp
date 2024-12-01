
let i = getRandom();
let dataSet = [
                { 
                    id : 1,
                    question : "Capital of Denmark", 
                    answer : "Copenhegen",
                    status : "",
                    score : "0",
                    playerName : ""
                },
                { 
                    id : 2,
                    question : "Capital of Sweden", 
                    answer : "Stockholm",
                    status : "",
                    score : "0",
                    playerName : ""
                },
                { 
                    id : 3,
                    question : "Capital of Germany", 
                    answer : "Berlin",
                    status : "",
                    score : "0",
                    playerName : ""
                },
                { 
                    id : 4,
                    question : "Capital of Italy", 
                    answer : "Venice",
                    status : "",
                    score : "0",
                    playerName : ""
                },
                { 
                    id : 5,
                    question : "Capital of France", 
                    answer : "Paris",
                    status : "",
                    score : "0",
                    playerName : ""
                }
              ];
function getRandom() 
{

    let num = Math.random()*4+1;
    return Math.ceil(num);
}
function displayQuestion()
{
    document.getElementById("cardContent").innerHTML= dataSet[i].question;

}
function displayAnswer()
{
    document.getElementById("card").classList.toggle("flipped");
    document.getElementById("cardContent").innerHTML= dataSet[i].answer;

}
function gonext()
{

    
    i = getRandom();
    displayQuestion();

}