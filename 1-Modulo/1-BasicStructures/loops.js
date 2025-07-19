// While loops 
//------------------------
// They will keep running until the condition is meet
// ! can't forget the end of condition, other wise will be a infinite loop!

//  while('Condition is true'){
//        Do this here
//  }

let cont= 0
while (cont <= 5){
    console.log(cont);
    cont++
}
//------------------------
// do while
//------------------------
// will run at least once
let cont2 = 0
do {
  console.log(cont2, cont2++);
} while(cont2 < 10)

//------------------------
// for loop
//------------------------
// You know the number of times this will run
// usually used for iterations.

for(let cont = 0; cont <= 10; cont++){
    console.log(cont); // 1 2 3 4 5 6 7 8 9 10
}