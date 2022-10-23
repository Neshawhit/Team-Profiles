// Removes the team.html file from the dist/ folder.
// Used in `npm run reset` script

const fs = require('fs');
if (fs.existsSync('./dist/team.html')) {
  fs.unlinkSync('./dist/team.html');
  console.log('/dist/ folder reset!');
}


// Solid job here. Your video demonstrates your app accepting user input to create a manager/engineer/intern, 
// then printing to your console what looks to be matching html code displaying your team's info. 
// However, you did not show the generation of. an actual html file that matched your input.
//  I think this is because you had the html file already open, and you just scrolled through the old one rather than refreshing it to reflect your new info. 
//  In addition, you did not show your tests passing. I tried running your app to tests things locally, and the tests did not pass. 
//  You create new objects without passing in any attributes for them, and in the case of intern you try to create using "intern" instead of "Intern".
//   I can confirm that an. html file matching your input was in fact properly generated, but the email and github sections were plain rather than a mailto and normal link respectively. 
//   Two other things were that you did not attach a sample generated html file, you provided a local link that only works on your system, 
//   and you did not have a custom readme with a description and link to your video, you just had a copy of the instructions.
//    You got a good amount of things actually working, but your video did not successfully show a lot of the things it was supposed to,
//     and you lost points on the tests and links. I would recommend reaching out to a TA if you have any questions, and to make sure video demos are more thorough, 
//     best of luck. - Central Grader, NL