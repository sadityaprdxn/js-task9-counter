'use strict';

var object = [
  {
    Counter: 0,
    lCounter: 50,
    class: "clientCounter"
  },

  {
    Counter: 0,
    lCounter: 125,
    class: "meetingCounter"
  },

  {
    Counter: 0,
    lCounter: 87,
    class: "projectCounter"
  },

  {
    Counter: 0,
    lCounter: 100,
    class: "awardsCounter"
  },
]

var start = setInterval(run , 30)

// function run() {
//   for (const key in object) {
//     if (object[key].Counter <= object[key].lCounter) {

//       var abc = object[key].class;
//       var counter = document.querySelector("." + abc + "");
//       counter.textContent = object[key].Counter;
//       object[key].Counter += 1;
//     }

//     else if(object[key].Counter > object[key].lCounter){
//       debugger;
//       clearInterval(start);
//       for (const specs in object) {
//         var xyz = object[specs].class;
//         var finalCounter = document.querySelector("." + xyz + "");
//         finalCounter.textContent = object[specs].lCounter;
//       }
//       object.splice(0 , object.length);
//       console.log(object);
//       }
//     }
// }


function run() {
  for (const key in object) {
    if (object[key].Counter <= object[key].lCounter) {

      var abc = object[key].class;
      var counter = document.querySelector("." + abc + "");
      counter.textContent = object[key].Counter;
      object[key].Counter += 1;
    }

    else if(object[key].Counter > object[key].lCounter){
      debugger;
      object.splice(key , 1);
      console.log(object);
      if(object.length == 0){
        clearInterval(start);
      }
      }
    }
}


