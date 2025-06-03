// if else is a conditional structure

const nota = 90

if(nota <= 60){
    console.log('Failed');
} else if(nota > 90) {
    console.log('Aproved +90');
} else {
    console.log('Aproved');
}

// Can use a ternary Operator
// condition  ?           is TRUE     :       Is FALSE
  (nota < 60) ? console.log('Failed') : console.log('Aproved');