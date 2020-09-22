const readline = require('readline');



const qStr = [
  `What's your name? Nicknames are also acceptable :)`,
  `What's an activity you like doing?`,
  `What do you listen to while doing that?`,
  `Which meal is your favourite (eg: dinner, brunch, etc.)`,
  `What's your favourite thing to eat for that meal?`,
  `Which sport is your absolute favourite?`,
  `What is your superpower? In a few words, tell us what you are amazing at!`
];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question(`${qStr[0]}`, (answer) => {
  const name = answer;
  rl.question(`${qStr[1]}`, (answer) => {
    const like = answer;
    rl.question(`${qStr[2]}`, (answer) => {
      const likeListen = answer;
      rl.question(`${qStr[3]}`, (answer) => {
        const meal = answer;
        rl.question(`${qStr[4]}`, (answer) => {
          const food = answer;
          rl.question(`${qStr[5]}`, (answer) => {
            const sport = answer;
            rl.question(`${qStr[6]}`, (answer) => {
              const superpower = answer;
              console.log(`\n${name} likes ${like} while listening to ${likeListen}. He likes ${meal}, where he likes to eat ${food}. ${name} likes ${sport} and his superpower is ${superpower}.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});


