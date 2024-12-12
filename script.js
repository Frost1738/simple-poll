'use strict';
/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉
*/

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0:javascript', '1:python', '2:Rust', '3:C++'],
  answers: [0, 0, 0, 0],
  registerNewAnswer: function () {
    const data = Number(
      prompt(`${this.question}
      ${this.options[0]}
      ${this.options[1]}
      ${this.options[2]}
      ${this.options[3]}`)
    );
    if (isFinite(data) && data <= 3 && data > 0) {
      poll.answers[data] += 1;
      alert(`you've picked ${poll.answers[data]}`);
      //console.log(poll.answers);
    }
    poll.displayResults(data);
  },
  displayResults: function (type) {
    console.log(type);
  },
};
//poll.registerNewAnswer()
const answerPoll = document.querySelector('.poll');
//ignore prettierr
const pollListener = answerPoll.addEventListener(
  'click',
  poll.registerNewAnswer.bind(poll)
);
