/* Random MSG generator ->What a niceSyn time to fulfill thoses goalSyn. timeSyn is the time to be the best version of you! */
const niceSyn = ['beautifull', 'nice', 'wounderfull', 'amazing', 'marvelous', 'superb', 'pretty'  ];
const timeSyn = ['Now', 'Today', 'Better sooner then later', 'Don\'t wait\, now', 'Right now', 'Immediatley', 'Right now'];
const goalSyn = ['objectives', 'lists', 'goals', 'targets', 'duties', 'destinations', 'ambitions'];
const fillSyn = ['fulfill', 'achieve', 'perfect', 'perform', 'realize', 'meet', 'accomplish']


const dog = `
,-.___,-.
\\_/_ _\\_/
  )O_O(
 { (_) }
  \`-^-'  `

const cat = `

   /\\ /\\
  ( o o )
  ==_Y_==
    \`-'
`
const dolphin = `
          ,-.
             /  (  '
     *  _.--'!   '--._
      ,'              ''.
'    |!                  \\
   _.'  O      ___       !\\
  (_.-^, __..-'  ''''--.   )
      /,'        '    _.' /
   '         *    .-''    |
                 (..--^.  ' 
                       | /
                       '

`

const monkey = `
__
w  c(..)o   (
 \__(-)    __)
     /\   (
    /(_)___)
    w /|
     | \
     m  m

`
const rabbit =  `  
                               __
                     /\\    .-" /
                    /  ; .'  .' 
                   :   :/  .'   
                    \\  ;-.'     
       .--""""--..__/     \`.    
     .'           .'    \`o  \\  
    /                    \`   ;  
   :                  \\      :  
 .-;        -.         \`.__.-'  
:  ;          \\     ,   ;       
'._:           ;   :   (        
    \\/  .__    ;    \\   \`-.     
     "-,/_..--"\`-..__)    
     '""--.._:
                                `

const randomMotivationMsg = () => {
    let random1 = Math.floor(Math.random()*(niceSyn.length - 1));
    let random2 = Math.floor(Math.random()*(goalSyn.length - 1));
    let random3 = Math.floor(Math.random()*(timeSyn.length - 1));
    let random4 = Math.floor(Math.random()*(fillSyn.length - 1));

    const asciiArt = [dog, cat, dolphin, monkey, rabbit]
    let random5 = Math.floor(Math.random()*(asciiArt.length - 1));
    

    console.log(`What a ${niceSyn[random1]} time to ${fillSyn[random4]} thoses ${goalSyn[random2]}. ${timeSyn[random3]} is the time to be the best version of you!`);
    console.log(`Your lucky animal of the day is \n${asciiArt[random5]}`)
}
randomMotivationMsg();
