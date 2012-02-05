var numTestCases, input, i,
	fs = require('fs'),
	filepath = process.argv[2];

if ( !filepath ) {
	throw 'You must provide a file path';
}

input = fs.readFileSync( filepath, 'utf8' ).split('\n');
numTestCases = parseInt( input.shift(), 10 );

function getResults( input ) {
    return input.split(' ').reverse().join(' ');
}

for ( i = 0; i < numTestCases; ++i ) {
	console.log( 'Case #' + (i + 1) + ': ' + getResults( input[i] )); 
}
