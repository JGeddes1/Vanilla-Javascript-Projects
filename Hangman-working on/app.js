const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t'];
const words = ['CageTheElephant','Blur','LedZeplin','DavidBowie','Elvis','ArticMonkeys','TheKillers'];
const startgame = document.querySelector('.btn');
let answer = '';
let guessed = [];
startgame.addEventListener('click', function(){


   
    
    function randomWord(){
        answer = words[Math.floor(Math.random() * words.length)];
        // console.log(answer);
    }

    function guessWord(){
       
        wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');
        // console.log(wordStatus);
        wordStatus = answer.split().map(function(letter) {
            if (guessed.indexOf(letter) >= 0) {
                letter = " _ ";    
            } 

            
            console.log(letter);
            
          return  document.getElementById('wordSpotlight').innerHTML = wordStatus;
        });
       
    }




randomWord();
guessWord();

});

keypad = function(){
    letters = document.createElement('ul');
    myButtons = document.getElementById('buttons'); 

    for (let i = 0; i < alphabet.length; i++) {
        const list = document.createElement('BUTTON');
        list.id = 'letter';
        list.innerHTML = alphabet[i];
        myButtons.appendChild(letters);
        letters.appendChild(list);        
    }
    
}

keypad();