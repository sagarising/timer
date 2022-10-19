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
	for (minutes=minutes-1; minutes >= 0; minutes--) {
		for (let seconds=59; seconds >= 0; seconds--) {
			rl.write(chalk.red.bgWhite.inverse(`${minutes}m ${seconds}s`));
			await setTimeout(1000,null);
			rl.write(null, {ctrl: true, name: 'u'});
		}
	}
}


await remainingTime();

say.speak("Session starting in, 3...2...1")

rl.close();


