import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { setTimeout } from 'timers/promises';
import chalk from 'chalk';
import say from'say';

const startTime = new Date()

const rl = readline.createInterface({ input, output });

var minutes = process.argv[2];

say.speak(`Timer activated for: ${minutes} minutes`);

const stopTime = startTime;

console.log(`Break Started at: ${startTime.toLocaleTimeString()}`);

stopTime.setMinutes(stopTime.getMinutes() + parseInt(minutes));
console.log(`Break will be over at: ${stopTime.toLocaleTimeString()}`);

async function remainingTime() {
	for (let seconds=minutes*60; seconds >= 0; seconds--) {
		rl.write(chalk.red.bgWhite.inverse(`${Math.ceil(seconds/60-1)}m ${seconds%60}s`));
		await setTimeout(1000,null);
		rl.write(null, {ctrl: true, name: 'u'});
	}
}


await remainingTime();

say.speak("Session starting in, 3...2...1")

rl.close();


