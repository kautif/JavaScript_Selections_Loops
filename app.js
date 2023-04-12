console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (let i = 0; i < 100; i++) {
	if (i % 3 === 0) {
		console.log("for odd: ", i);
	}
}

let k = 0;

do {
	if (k % 3 === 0) {
		console.log("do odd: ", k);
	}
	k++
} while (k < 100)

let j = 0;

while (j < 100) {
	if (j % 3 === 0) {
		console.log("while odd: ", k);
	}
	j++
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for (let i = 0; i < 100; i++) {
	if (i % 3 === 0 & i % 5 === 0) {
		console.log("for FIZZBUZZ");
	} else if (i % 3 === 0) {
		console.log("for FIZZ");
	} else if (i % 5 === 0) {
		console.log("for BUZZ");
	} else {
		console.log("for not applicable");
	}
}

let x = 0;

do {
	if (x % 3 === 0 &  % 5 === 0) {
		console.log("do FIZZBUZZ");
	} else if (x % 3 === 0) {
		console.log("do FIZZ");
	} else if (x % 5 === 0) {
		console.log("do BUZZ");
	} else {
		console.log("do not applicable");
	}
	x++
} while (x < 100)

let y = 0;

while (y < 100) {
		if (y % 3 === 0 &  % 5 === 0) {
		console.log("while FIZZBUZZ");
	} else if (y % 3 === 0) {
		console.log("while FIZZ");
	} else if (y % 5 === 0) {
		console.log("while BUZZ");
	} else {
		console.log("while not applicable");
	}
	y++
}

// Exercise 4
let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for (let i = 0; i < n; i++) {
	if (i === n) {
		console.log("Found value!");
		break;
	} else {
		console.log("Did not find value");
	}
}