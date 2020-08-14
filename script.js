/*
^make an array or store with objects of questions and answers
^create a varieable called score
1/2-loop questions 
-create a response variable 
1/2-write functions lay out
- write html in jquery
    -make radio buttons 
-if statment to choose which option 
-generate star page



*/

function main() {

  let questions = [
    {
      name: 'What year did the beatles begin',
      answers: ['1940', '1957', '1967'],
      correctAnswer: '1957'
    },
    {
      mame: 'What was Dababy\'s first no. 1 Album',
      answers: [ 'Rockstar', 'B.O.P', 'suge'],
      correctAnswer: 'Rockstar'
    },
    {
      name: 'What artist did logic name an album series after',
      answers: ['Rick Ross', 'muddy waters', 'frank sinatra'],
      correctAnswer: 'Frank sinatra'
    },
    {
      name: 'Who was the first lead singer of journey',
      answers: ['Steve Perry', 'Neal Schon', 'Jonathan Cain'],
      correctAnswer: 'Steve perry'
    },
    {
      name: 'What country is Sia from?',
      answers: ['(a)Australia', '(b)Canada', '(c)USA'],
      correctAnswer: 'Australia'
    },
  ];
  let score = 0;
  //1.Template Generators
  function generatorHTML() {
    let question = questions[score];

    return `
      <div class="box">
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



  function renderList() {
    let html = generatorHTML();
    console.log('`renderlist` ran');
    $('main').html(html);

  }
  console.log(renderList());

  function main() {
    renderList();
    console.log(questions);
  }
  console.log(main());
  
  
  function submitAnswer(event){
    event.preventDefault();
$('input[name=answers]:checked').val;
  
  $('main').on('submit','form',submitAnswer);
};


//.main funciton close
console.log('hey');
}

main()