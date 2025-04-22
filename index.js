/*    ╱|、      
    (˚ˎ 。7     
     |、˜〵     
     じしˍ,)ノ  
*/

const { randomInt } = require('crypto');
const readline = require('readline');
var rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function playAudio(p){require("child_process").exec((s=>s=="win32"?`start "" "${p}"`:s=="darwin"?`open "${p}"`:`xdg-open "${p}"`)(process.platform))}

const zeros = [0, "zero", "girfriend", "friends", "money", "happiness", "love", "life", "hability", "skills", "talent", "intelligence", "knowledge", "wisdom", "experience", "time", "energy", "effort", "work", "job", "career"];
const nahs = ["nah.", "no.", "nope.", "naw.", "nuh-uh.", "not a chance.", "Yikes.", "BEEEEEH ❌🚨", "You serious?", "You fucking idiot", "Kill yourself"];
const yeahs = ["yeah.", "yes.", "yep.", "sure.", "absolutely.", "definitely.", "for sure.", "of course.", "totally.", "you bet.", "right on.", "you got it.", "no doubt.", "Kill yourself (it is)"];

rl.question("What is your number?\n> ", function(answer) {
    let number = isNaN(parseInt(answer)) ? answer.toLowerCase() : parseInt(answer);
    if (zeros.includes(number)) { console.log(yeahs[randomInt(yeahs.length)]); playAudio("./correct.mp3"); }
    else { console.log(nahs[randomInt(nahs.length)]); playAudio("./wrooong.mp3"); }
});

// FAQ:
// Q: Why so hard to read?
// A: Kys