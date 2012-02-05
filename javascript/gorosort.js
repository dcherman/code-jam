var numTestCases, input, cases = [],
	fs = require('fs'),
	filepath = process.argv[2];

if ( !filepath ) {
	throw 'You must provide a file path';
}

input = fs.readFileSync( filepath, 'utf8' ).split('\n');
numTestCases = parseInt( input.shift(), 10 );

while ( input.length ) {
	cases.push( input.splice(0, 2) );
}

function getResults( testcase ) {
	var n = parseInt( testcase[0], 10 ),
		results = 0,
		numbers = testcase[1].split(' ')
			.map( function(i) { return parseInt( i, 10 ); });

	numbers.forEach( function( i, idx ) {
		if ( i !== idx + 1 ) {
			results++;
		}
	});

	return results;
}

for ( i = 0; i < numTestCases; ++i ) {
	console.log( 'Case #' + (i + 1) + ': ' + getResults( cases[i] )); 
}
