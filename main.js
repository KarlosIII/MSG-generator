/* Random MSG generator ->What a niceSyn time to fulfill thoses goalSyn. timeSyn is the time to be the best version of you! */
const niceSyn = ['beautifull', 'nice', 'wounderfull', 'amazing', 'marvelous', 'superb', 'pretty'  ];
const timeSyn = ['Now', 'Today', 'Better sooner then later', 'Don\'t wait\, now', 'Right now', 'Immediatley', 'Right now'];
const goalSyn = ['objectives', 'lists', 'goals', 'targets', 'duties', 'destinations', 'ambitions'];
const fillSyn = ['fulfill', 'achieve', 'perfect', 'perform', 'realize', 'meet', 'accomplish']

const randomMotivationMsg = () => {
    let random1 = Math.floor(Math.random()*(niceSyn.length - 1));
    let random2 = Math.floor(Math.random()*(goalSyn.length - 1));
    let random3 = Math.floor(Math.random()*(timeSyn.length - 1));
    let random4 = Math.floor(Math.random()*(fillSyn.length - 1));
    return console.log(`What a ${niceSyn[random1]} time to ${fillSyn[random4]} thoses ${goalSyn[random2]}. ${timeSyn[random3]} is the time to be the best version of you!`);
}
randomMotivationMsg();
