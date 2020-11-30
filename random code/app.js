const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t'];
const words = ['test'];
const startgame = document.querySelector('.btn');

startgame.addEventListener('click', function(){


    keypad = function(){
        letters = document.createElement('ul');
        myButtons = document.getElementById('buttons'); 
    
        for (let i = 0; i < alphabet.length; i++) {
            const list = document.createElement('li');
            list.id = 'letter';
            list.innerHTML = alphabet[i];
            myButtons.appendChild(letters);
            letters.appendChild(list);        
        }
        
    }
    
    words = 

keypad();

});