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
                      answer : "Rome",
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
  
  let i = getRandom();
  
  function getRandom() 
  {
  
      let num = Math.random()*5 -1;
      console.log(Math.ceil(num));
      return Math.ceil(num);
  }
  
  function displayQuestion()
  {
  
  document.getElementById("cardContent").innerHTML = dataSet[i].question;
  }
  
  function displayAnswer()
  {
  
  document.getElementById("card").classList.toggle("flipped");
  document.getElementById("answerContent").innerHTML = dataSet[i].answer;
  }
  function gonext1()
  {    
  
      document.getElementById("cardcontainer").classList.toggle("active");
      i = getRandom();
      const myTimeout = setTimeout(flyback, 1000);
  
  }
  
  function flyback()
      {
       console.log("in");   
      document.getElementById("cardcontainer").classList.toggle("active");
      displayQuestion();
      }
  
  
  function gonext2()
  {    
      document.getElementById("card").classList.toggle("flipped");
      gonext1();
  
  }

  function goToPlay()
  {
    window.location.href="./flashcard App2"
  }