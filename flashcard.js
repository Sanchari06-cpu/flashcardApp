//This is a signle javascript file for full project

//HomePage

//Variables for Home Page

let dataSet = [                                               //initializing Arrey for the card question and answers.
                  { 
                      id : 1,
                      question : "Capital of Denmark", 
                      answer : "Copenhegen",
                  },
                  { 
                      id : 2,
                      question : "Capital of Sweden", 
                      answer : "Stockholm",
                  },
                  { 
                      id : 3,
                      question : "Capital of Germany", 
                      answer : "Berlin",
                  },
                  { 
                      id : 4,
                      question : "Capital of Italy", 
                      answer : "Rome",
                  },
                  { 
                      id : 5,
                      question : "Capital of France", 
                      answer : "Paris",
                  },
                  {
                      id : 6,
                      question : "Capital of Norway", 
                      answer : "Oslo",
                  },
                  {
                      id : 7,
                      question : "Capital of Latvia", 
                      answer : "Riga",
                  },
                                { 
                      id : 8,
                      question : "Capital of Slovakia", 
                      answer : "Bratislava",
                  },
                  { 
                      id : 9,
                      question : "Capital of Albania", 
                      answer : "Tirana",
                  },
                  { 
                      id : 10,
                      question : "Capital of Moldova", 
                      answer : "Chisinau",
                  },
                  { 
                      id : 11,
                      question : "Capital of Slovenia", 
                      answer : "Ljubljana",
                  },
                  { 
                      id : 12,
                      question : "Capital of Switzerland", 
                      answer : "Bern",
                  },
                  {
                      id : 13,
                      question : "Capital of Iceland", 
                      answer : "Reykjavík",
                  },
                  {
                      id : 14,
                      question : "Capital of Luxembourg", 
                      answer : "Luxembourg",
                  }
        
  ];

//Functions for HomePage
function SaveArrayinitial()        
{
    let flashCard = JSON.parse(localStorage.getItem("cards"));     // getting value of cards from local storage
    if(localStorage.getItem("cards") === null || flashCard.length == 0)  //checking if new cards are added
    {
    localStorage.setItem("cards", JSON.stringify(dataSet));          //saving dataSet back to local storage
    }
    else
    {
      dataSet=flashCard;    
        console.log(dataSet.length);
        console.log(flashCard.length);// dataSet updated with local storage
    }
   
}

//functions for menu buttons// side bar menu button

  function goToPlayerName()    
  {
    window.location.href="./FlashcardPlayerName.html";     
  }

function goToAddCard()                                    
  {
    

   window.location.href="./FlashcardAddPage.html";     

  }
function goToScoreCard()
  {
    

   window.location.href="./FlashcardScoreCard.html";

  }
function goToSettings()
  {
    

   window.location.href="./FlashcardSettings.html";       

  } 


function gohomepage()
{
   window.location.href="./FlashcardHomePage.html"; 
}

//side bar  menu button


//Play PAge



//functions for Player Name Page//

function showMulti()
{
  let checkbox = document.getElementById("multiDiv");   //for checkbox for multiplayer
  if (checkBox.checked == true) 
      {
          checkbox.classList.remove("hideBox");//animation to show multiplayer name
          ischecked = 1;
       }
  else  {
      checkbox.classList.add("hideBox");//animation to hide multiplayer name
       ischecked = 0;
       }
}

function goToPlay()                    
  {


   let nameValue = document.getElementById("name").value;    //reading player name for single player
   if (ischecked == 1)  //checking if multipalyer  needed
    {
        let nameValue2 = document.getElementById("multiName").value;   //reading player name for multiplayer
        
        if(nameValue == "" || nameValue2 == "")         //chechikg if both names are given
        {
            document.getElementById("message").innerText = "Please enter both names"    //alert message
            document.getElementById("message").classList.add("show");                   //animation for alert message
            setTimeout(hideMessage, 3000);                                              //message goes away after some delay
        }
        else{
        
        window.location.href="./FlashcardPlayPage.html?nameVal="+ nameValue + "&nameVal2=" + nameValue2 + "&Multiplayer=" + ischecked;   //play with multiplayer
        }
    }
    else {
            if(nameValue == "")     //checking if single player name is given
        {
             document.getElementById("message").innerText = "Please enter your name"   
            document.getElementById("message").classList.add("show");
            setTimeout(hideMessage, 3000);
        }
        else{
        
        window.location.href="./FlashcardPlayPage.html?nameVal="+ nameValue + "&Multiplayer=" + ischecked;   //play with single palyer
        }
         
        }
    
  }


function hideMessage()       // alert message
{

    document.getElementById("message").classList.remove("show"); //hide message
}


//Variables for Play Page
  
let randomIndex = getRandom();     //this function is to get by which we can shuffle the card the result of the function is stored in a variable
let scoreCard = [                  //intializing scorecard
 {
    playerName : "",
    remember : 0,                  //player scorecard
    forgot : 0,
    score :  0
  },
   {
    playerName : "",
    remember : 0,
    forgot : 0,
    score :  0
  }
];
let turns = 0;                     //intializing variable how many times can be play    
let isMultiplayer = 0;             // a flag variable to show if mutliplayer or not
let playerNo = 0;                  //which player is taking turn
let ischecked =0;                    //Variables for Player Name Page



//function for play page

function getNameValFromCurrentURL() {
    
    const urlParams = new URLSearchParams(window.location.search);   //reading the url parameters for names
    scoreCard[0].playerName = urlParams.get("nameVal") ;             //assining single palyer name
    scoreCard[1].playerName = urlParams.get("nameVal2") ;            //assining multiplayer name
    
}


  function getRandom() 
  {
  
      console.log(dataSet.length);
      let num = Math.random()*(dataSet.length-1) -1;
      return Math.ceil(num);
  }

function loadValues()
{
    SaveArrayinitial();  
    displayQuestion();
    multiPlayer();
    updateScorecard();

 }


  function displayQuestion()
  {
  
  document.getElementById("cardContent").innerHTML = dataSet[randomIndex].question;
  }
  
  function displayAnswer()
  {
  
  document.getElementById("card").classList.toggle("flipped");
  document.getElementById("answerContent").innerHTML = dataSet[randomIndex].answer;
  }
  function goNext1()
  {    
  
      document.getElementById("cardcontainer").classList.toggle("active");
      randomIndex = getRandom();
      turns = turns+1;

      
      if(isMultiplayer==1)
      {
        playerNo = turns % 2;

        if(playerNo == 0)
        {
            document.getElementById("scorecard1").classList.add("moving");
            document.getElementById("scorecard2").classList.remove("moving");
        }
        
        if(playerNo == 1)
        {
            document.getElementById("scorecard2").classList.add("moving");
            document.getElementById("scorecard1").classList.remove("moving");
        }
      }
      const myTimeout = setTimeout(flyback, 1000);   // delay for flipping back to next card
        
  }
  
  function flyback()
      {
       
      document.getElementById("cardcontainer").classList.toggle("active"); //animation for remmeber button
      displayQuestion();
      }
  
  
  function gonext2()
  {    
      document.getElementById("card").classList.toggle("flipped");   //animation for forgot button
      goNext1();
  
  }


 function multiPlayer(){
    const urlParams = new URLSearchParams(window.location.search);
     isMultiplayer = urlParams.get("Multiplayer");
         console.log(isMultiplayer);
    if (isMultiplayer == 0 || isMultiplayer == null)
    {

    document.getElementById("scorecard2").classList.add("hidden");
    document.getElementById("scorecard1").classList.add("single");
     }
    if(isMultiplayer == 1)
     {
        document.getElementById("scorecard1").classList.add("moving");
    }
}

function updateScorecard(){                
    getNameValFromCurrentURL();
    document.getElementById("score0").innerHTML = "" + scoreCard[0].score;
    document.getElementById("rems0").innerHTML = "" + scoreCard[0].remember;
    document.getElementById("fors0").innerHTML = "" + scoreCard[0].forgot;
    document.getElementById("names0").innerHTML = "" + scoreCard[0].playerName;
    document.getElementById("score1").innerHTML = "" + scoreCard[1].score;
    document.getElementById("rems1").innerHTML = "" + scoreCard[1].remember;
    document.getElementById("fors1").innerHTML = "" + scoreCard[1].forgot;
    document.getElementById("names1").innerHTML = "" + scoreCard[1].playerName;
    saveScore();
    }


function saveScore()
{
        
    localStorage.setItem("players", JSON.stringify(scoreCard));
    console.log(scoreCard);   
 }

function forgot()  // for forgot button
{
  displayAnswer();
  scoreCard[playerNo].forgot = scoreCard[playerNo].forgot + 1;
  updateScorecard();
}
function remember()   //for remember button
{
  

  scoreCard[playerNo].remember = scoreCard[playerNo].remember + 1;
  scoreCard[playerNo].score= scoreCard[playerNo].score +1 ;
  updateScorecard();
  goNext1();
}

//Score Card Page
//function for scorecard page

function retrieveScore()
{
         getScore(); 
         updateReport();
 }
function getScore()
{
    let savedScore = localStorage.getItem("players");
         scoreCard= JSON.parse(savedScore);
         console.log(scoreCard);
}
function updateReport()    // for multiplayer scorecard
{
    document.getElementById("nameT1").innerHTML = scoreCard[0].playerName;
    document.getElementById("remT1").innerHTML = scoreCard[0].remember;
    document.getElementById("forT1").innerHTML = scoreCard[0].forgot;
    document.getElementById("scrT1").innerHTML = scoreCard[0].score;
    document.getElementById("nameT2").innerHTML = scoreCard[1].playerName;
    document.getElementById("remT2").innerHTML = scoreCard[1].remember;
    document.getElementById("forT2").innerHTML = scoreCard[1].forgot;
    document.getElementById("scrT2").innerHTML = scoreCard[1].score;
    if (scoreCard[1].playerName == null)
    {
    
    document.getElementById("player2Scoretable").classList.remove("showPlayer2score");
    document.getElementById("player2Scoretable").classList.add("hidePlayer2score");

     } else
    {
    
    document.getElementById("player2Scoretable").classList.remove("hidePlayer2score");
    document.getElementById("player2Scoretable").classList.add("showPlayer2score");

     }
    
}


//Settings Page

//function for Settings Page

function downloadScoreData()
{
   let savedScore = localStorage.getItem("players");
   let downloadScore = JSON.parse(savedScore);
    alert(JSON.stringify(downloadScore));
}
function downloadCardData()
{
    let savedCard = localStorage.getItem("cards");
    let downloadCard = JSON.parse(savedCard);
    alert (JSON.stringify(downloadCard));
}




//Add Card

//Variables for Add Card Page
let newCard = {
                      id : 0,
                      question : "",   // for adding object to add new card.
                      answer : "",
                  };

//Functions for Add Card Page


function saveQuestion()
{
   newCard.question = document.getElementById("addQuestion").value;  // aadding new question card
   document.getElementById("card").classList.toggle("flipped");
}
function saveAnswer()
{
    newCard.answer = document.getElementById("addAnswer").value;     //adding new card answer
   addCardSave();
     
}

//Meliha Add Page
function addCardSave()   
{
    
    let typeQuestion = newCard.question;   //intializing new question card
    let typeAnswer= newCard.answer;       
    dataSet = JSON.parse(localStorage.getItem("cards"));
    
            newCard.id = dataSet.length + 1 ;   //pushing the array and adding it in local storage

   
    if (typeQuestion !== "" && typeAnswer !== "")       // input for giving question  and answer
        {   
            
            console.log("Flashcards before adding:", dataSet);
            dataSet.push(newCard);
            console.log("New flashcard added:", newCard);
            localStorage.setItem("cards", JSON.stringify(dataSet));
            console.log("Flashcards saved to localStorage:", JSON.parse(localStorage.getItem("cards")));
            console.log("Updated flashcards array:", dataSet);
            document.getElementById("message").innerText = "Flashcard saved successfully!";   // show alert messaage after saving the answer
            document.getElementById("addQuestion").value = "";
            document.getElementById("addAnswer").value = "";
        } else {
            document.getElementById("message").innerText = "Please enter both a question and an answer";
        }
      
        document.getElementById("message").classList.add("show");   // alert message and timing
        setTimeout(hideMessage, 3000);

}

