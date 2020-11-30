// print 1-1000
// *3 print fizz *5 print buzz both prin fizzbuzz

let number =100;
const fiz = document.querySelector('.fizz');
function fizzBuzz(){
    for (let i = 0; i <= number; i++) {
        let element = document.createElement('li')
        element.innerText = "";
        if (i  % 3 === 0 && i % 5 === 0) {
            console.log('fizzBuzz');
            element.innerText += "FizzBuzz";
        }
        else if (i%3 === 0) {
            console.log('fizz');
            element.innerText += "Fizz";
            
        }
        else if (i % 5 === 0){
            console.log('buzz');
            element.innerText += "Buzz";
           
        }
        else{
            console.log(i);
            element.innerText += i;
        }
            
        document.getElementById('output').appendChild(element);
        }
        
}


fizzBuzz();





