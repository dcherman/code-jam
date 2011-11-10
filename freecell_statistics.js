var numTestCases, input,
	fs = require('fs'),
	filepath = process.argv[2];

if ( !filepath ) {
	throw 'You must provide a file path';
}

input = fs.readFileSync( filepath, 'utf8' ).split('\n');
numTestCases = parseInt( input.shift(), 10 );

function getResults( testcase ) {
	var results, n, d, g;

	testcase = testcase.split(' ');

	n = parseInt( testcase[0], 10 );
	d = parseInt( testcase[1], 10 );
	g = parseInt( testcase[2], 10 );

	return ( g * n ) - ( d * n ) > 0 ? 'Possible' : 'Broken';
}

for ( i = 0; i < numTestCases; ++i ) {
	console.log( 'Case #' + (i + 1) + ': ' + getResults( input[i] )); 
}
