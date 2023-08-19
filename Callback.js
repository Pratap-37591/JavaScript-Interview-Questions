// ? What is the callback function in javaScript?

setTimeout(() => {
  console.log("Timer");
}, 2000);

function x(y) {
  console.log("x");
  y();
}

x(function y() {
  console.log("Callback");
});
