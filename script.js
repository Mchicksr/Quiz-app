
function main() {

  const STORE = {
    currentQuestions: 0,
    score: 0,
    questions:
      [

        {
          
          name: 'Question #1\nWhat year did the Beatles begin',
          answers: ['1940', '1957', '1967'],
          correctAnswer: '1957'
        },
        {
          name: 'Question #2\nWhat was DaBaby\'s first no. 1 Hit',
          answers: [ 'Rockstar', 'B.O.P', 'Suge'],
          correctAnswer: 'Rockstar'
        },
        {
          name: 'Question #3\nWhat artist did logic name an album series after',
          answers: ['Rick Ross', 'Muddy Waters', 'Frank Sinatra'],
          correctAnswer: 'Frank Sinatra'
        },
        {
          name: 'Question #4\nWho was the first lead singer of journey',
          answers: ['Steve Perry', 'Neal Schon', 'Jonathan Cain'],
          correctAnswer: 'Steve Perry'
        },
        {
          name: 'Question #5\nWhat country is Sia from?',
          answers: ['Australia', 'Canada', 'USA'],
          correctAnswer: 'Australia'

        },
      ]
  };
  
  function generatorHTML() {
    let question = STORE.questions[STORE.currentQuestions];

    return `
      <div class="box">
      <div class="modal">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close">&times;</button>
            <h2 class="answer-result"></h2>
            <p class= 'score'</p>
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
  function generateStartPage() {
    return ` <div class="StartPage">
    <h2>Welcome Traveler<h2>
  <p>Are you ready to become a Master of Music?</p>
  <button class= "startQuiz">Start</button>
  </div>
    `;
  }

  function generateEndGame() {
    return ` <div class="StartPage">
    <h2>You have completed your journey.<h2>
  <p>Your score is ${STORE.score}!</p>
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

    
    console.log(STORE.questions);
  }
 



  function submitAnswer() {
    let ans = $("input[name='answers']:checked").val();
    console.log(ans);
    if (STORE.questions[STORE.currentQuestions].correctAnswer === ans) {
      console.log('right');
      
      $('.answer-result').html('You are right!');
      $('.modal').css('display', 'inline');

      
      STORE.score++;
      $('.score').html(`Your score is ${STORE.score}`);
    } else {
      console.log('wrong');
      $('.score').html(`Your score is ${STORE.score}`);
      $('.answer-result').html('Your are wrong!');
      $('.modal').css('display', 'inline');
      STORE.score;
    } 
    
  }
  
  function closeModal() {
    $('main').on('click', '.close', function () {
      $('.modal').css('display', 'none')
      STORE.currentQuestions++;
      if (STORE.currentQuestions === STORE.questions.length) {
        alert('completed');
        let endpage = generateEndGame();
        $('main').html(endpage);
      } else {
        renderList();
      }
    });
  }

  function startQuiz() {
    $('main').on('click', '.startQuiz', function () {
      renderList();
    });
  }

  function tryagain() {
    $('main').on('click', '.endGame', function () {
      if (STORE.currentQuestions === STORE.questions.length) {
        STORE.currentQuestions = 0;
        STORE.score = 0;
        let endpage = generateStartPage();
        $('main').html(endpage);
      }
      startQuiz();
      //renderList();
    });
  }









  function handleSubmitAnswer() {
    $('main').on('submit', '.form', function (e) {
      e.preventDefault();
      if ($("input[type=radio]:checked").length > 0) {
        submitAnswer();
        

      } else {
        console.log('b');
        alert('please select answer');
        $('.answer-result').html('please select answer');
      }
    });
  }

  /*$('wrapper').on('click','.close',function(){
    renderList();
    
  });*/



  //.main funciton close
 


  function intializeListeners() {
    main();
    closeModal();
    startQuiz();
    handleSubmitAnswer();
    tryagain();
    

  };

  $(intializeListeners);

}


//.main funciton close
console.log('hey');


main();