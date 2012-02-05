var numTestCases, input, cases,
	fs = require('fs'),
	filepath = process.argv[2];

if ( !filepath ) {
	throw 'You must provide a file path';
}

input = fs.readFileSync( filepath, 'utf8' ).split('\n');
numTestCases = parseInt( input.shift(), 10 );

cases = [];

// Split up the input into the appropriate groupings
while ( input.length ) {
	cases.push( input.splice(0, 3) );
}

function getResults( testcase ) {
	var results, i, j,
		credit = parseInt( testcase[ 0 ], 10 ),
		items = parseInt( testcase[ 1 ], 10 ),
	    prices = testcase[ 2 ].split( ' ' )
			.map(function(i) { 
				return parseInt( i, 10);
			});
	
	for ( i = 0; i < items; i++ ) {
		if ( results ) {
			break;
		}
		
		for ( j = 0; j < items; j++ ) {
			if ( results ) {
				break;
			}
			
			if ( i === j ) {
				continue;
			}
			
			if ( prices[ i ] + prices[ j ] === credit ) {
				results = [ i + 1, j + 1 ];
			}
		}
	}

	return results;
}

for ( i = 0; i < numTestCases; ++i ) {
	console.log( 'Case #' + (i + 1) + ': ' + 
		getResults( cases[i] ).join(' ') );
}
