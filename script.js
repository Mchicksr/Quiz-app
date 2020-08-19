
function main() {
  
  const STORE = {
    currentQuestions:0,
    score:0,
    questions: 
   [
    
     {
       name: 'What year did the beatles begin',
       answers: ['1940', '1957', '1967'],
       correctAnswer: '1957'
     },
     {
       name: 'What was Dababy\'s first no. 1 Album',
       answers: [ 'Rockstar', 'B.O.P', 'suge'],
       correctAnswer: 'Rockstar'
     },
     {
       name: 'What artist did logic name an album series after',
       answers: ['Rick Ross', 'muddy waters', 'frank sinatra'],
       correctAnswer: 'frank sinatra'
     },
     {
       name: 'Who was the first lead singer of journey',
       answers: ['Steve Perry', 'Neal Schon', 'Jonathan Cain'],
       correctAnswer: 'Steve Perry'
     },
     {
       name: 'What country is Sia from?',
       answers: ['Australia', 'Canada', 'USA'],
       correctAnswer: 'Australia'
    
     },
   ]
  };
  //let score = 0;
  //1.Template Generators
  function generatorHTML() {
    let question = STORE.questions[STORE.currentQuestions];

    return `
      <div class="box">
      <div class="modal">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close">&times;</button>
            <h2 class="answer-result"></h2>
          </div>
          <div class="modal-body">
            <p class="answer-result:></p>
          </div>
          <div class="modal-footer">
            <button type="button" class="close">Close</button>
          </div>
        </div>
      </div>
        <div class="question">${question.name}</div>
        <form class="form">
          <input type="radio" id="true" name="answers" value="${question.answers[0]}">
          <label for="true">${question.answers[0]}</label><br>
          <input type="radio" id="true" name="answers" value="${question.answers[1]}">
          <label for="true">${question.answers[1]}</label><br>
          <input type="radio" id="true" name="answers" value="${question.answers[2]}">
          <label for="true">${question.answers[2]}</label><br>
          <button type = "submit" id="submit">Submit</button>
        </form>
    </div> 
    `;
  }
  function generateStartPage(){
    return` <div class="StartPage">
    <h2>Welcome Younge Student<h2>
  <p>are you ready to become a master of music?</p>
  <button class= "startQuiz">Start</button>
  </div>
    `;
  }

  function generateEndGame(){
    return` <div class="StartPage">
    <h2>Your done go home.<h2>
  <p>wait. your score is ${STORE.score}!</p>
  <button class= "endGame">Try Again</button>
  </div>
    `;
  }

  function renderList() {
    let html = generatorHTML();
    console.log('`renderlist` ran');
    $('main').html(html);
  }
  

  
 

  function main() {
    let startPage = generateStartPage();
    
    $('main').html(startPage);
    
    //renderList();
    console.log(STORE.questions);
  }
  // console.log(main());
  
  
  
  function submitAnswer(){
    let ans =$("input[name='answers']:checked").val();
    console.log(ans);
    if(STORE.questions[STORE.currentQuestions].correctAnswer === ans){
      console.log('right');
      $('.answer-result').html('You are right!');
      $('.modal').css('display', 'inline');
      //alert('lucky guess.');
      //let correctDiv =$(`<div class='correct'>lucky guess!</div>`);
      
      STORE.score++;
    }else{
      console.log('wrong');
      $('.answer-result').html('You are wrong!');
      $('.modal').css('display', 'inline');
      STORE.score;
      //let wrongDiv = $(`<div class='wrong'>Na</div>`);
      // renderModal('wrong');
    
    //alert('are you sure your a master?');
    }
    
  }
  
  function closeModal() {
    $('main').on('click', '.close', function() {
      $('.modal').css('display', 'none')
      STORE.currentQuestions++;
      if(STORE.currentQuestions===STORE.questions.length){
        alert('completed');
        let endpage = generateEndGame();
        $('main').html(endpage);
      }else{
        renderList();
      }
    });
  }
  
  function startQuiz() {
    $('main').on('click','.startQuiz',function(){
      renderList();
    });
  }
  function tryagain() {
    $('main').on('click','button.endGame',function(){
      console.log('hey endgame was clicked',this);
      if(STORE.currentQuestions===STORE.questions.length){
        let restart= generateStartPage();
        $('main').html(restart);
      }
      
      
      
    });
    
  }
  
  
  function handleSubmitAnswer() {
    $('main').on('submit','.form', function(e) {
      e.preventDefault();
      submitAnswer();
    });
  }

  /*$('wrapper').on('click','.close',function(){
    renderList();
    
  });*/


//.main funciton close
console.log('hey');


function intializeListeners() {
    main();
    closeModal();
    startQuiz();
    handleSubmitAnswer();
   //renderModal();
    tryagain();
   
};

$(intializeListeners);

}


//.main funciton close
console.log('hey');


main();