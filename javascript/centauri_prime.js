var numTestCases, input, i,
	fs = require('fs'),
	filepath = process.argv[2];

if ( !filepath ) {
	throw 'You must provide a file path';
}

input =  fs.readFileSync( filepath, 'utf8' ).split('\n');
numTestCases = parseInt( input.shift(), 10 );

function getResults( testcase ) {
	var rvowel = /[aeiou]/i,
		lastletter = testcase[ testcase.length - 1 ];

	if ( lastletter.toLowerCase() === 'y' ) {
		return "nobody";
	}

	if ( rvowel.test(lastletter) ) {
		return "a queen";
	}

	return "a king";
}

for ( i = 0; i < numTestCases; ++i ) {
	console.log( 'Case #' + (i + 1) + ': ' + input[i] + " is ruled by " + getResults( input[i] ) + "." ); 
}