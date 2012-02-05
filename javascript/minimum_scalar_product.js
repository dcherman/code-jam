var numTestCases, input, cases,
	fs = require('fs'),
	filepath = process.argv[2];

if ( !filepath ) {
	throw 'You must provide a file path';
}

input = fs.readFileSync( filepath, 'utf8' ).split('\n');
numTestCases = parseInt( input.shift(), 10 );

cases = [];

while ( input.length ) {
	cases.push( input.splice(0, 3 ) );
}

function parseNum( i ) {
	return parseInt( i, 10 );
}

function getResults( testcase ) {
	var results = 0,
		sortFunc = function( a, b ) {
			return a - b;
		},
		n = parseNum( testcase[0] ),
		v1 = testcase[1].split(' ').map( parseNum ).sort( sortFunc ),
		v2 = testcase[2].split(' ').map( parseNum ).sort( sortFunc ).reverse();

	while ( n-- ) {
		results += v1.pop() * v2.pop();
	}

	return results;
}

for ( i = 0; i < numTestCases; ++i ) {
	console.log( 'Case #' + (i + 1) + ': ' + getResults( cases[i] )); 
}
