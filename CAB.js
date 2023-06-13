// Expalin Call , apply , and bind ?

let username = {
  firstname: "pratap",
  lastname: "hb",
};

let fullname = function (city, state) {
  console.log(this.firstname + " " + this.lastname + " " + city + " " + state);
};

//function borrowing
fullname.call(username, "bdvt", "karnataka");
fullname.apply(username, ["bdvt", "karnataka"]);

let username2 = {
  firstname: "ms",
  lastname: "dhoni",
};

fullname.call(username2, "bengaluru", "karnataka");
fullname.apply(username2, ["bengaluru", "karnataka"]);

//Bind

let BindMyName =  fullname.bind(username, "bengaluru", "karnataka")
console.log(BindMyName);
BindMyName();
// let BindMyName =  fullname.bind(username, "bengaluru", "karnataka")
