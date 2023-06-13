// When a variable is defined within a function it is only accsible within a function and any nested function or blocks defined within it.

function outerFunction() {
  var innerVariable = "I am outer  variable";

  function innerFunction() {
    console.log(innerVariable);
  }

  innerFunction();
}

outerFunction();
