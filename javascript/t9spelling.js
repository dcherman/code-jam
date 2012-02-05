var dictionary, input, numTestCases, i,
	fs = require('fs'),
	filepath = process.argv[2];


if ( !filepath ) {
	throw 'A filepath must be provided';
}


input = fs.readFileSync( filepath, 'utf8' ).split('\n');
numTestCases = parseInt( input.shift(), 10 );

// Do some prep work to get the dictionary that we're going to need
dictionary = (function() {
	var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split( '' ),
		dictionary = { ' ': '0' },
		i = 9, 
		j;

	function buildStr( i, char, result ) {
		return i ? buildStr( --i, char, (result || '') + char ) : result || '';
	}
		
	do {
		j = ( i === 9 || i === 7 ) ? 4 : 3;
			
		while ( j ) {
			dictionary[ alphabet.pop() ] = buildStr( j--, i.toString() );
		}

	} while ( --i > 1 );
		
	return dictionary;
	}());

	
function getResults( testCase ) {
	var t9, i,
		output = '';
		
	for ( i = 0; i < testCase.length; i++ ) {
		t9 = dictionary[ testCase[ i ] ];
		
		if ( output != '' && output[ output.length - 1 ] === t9[ 0 ] ) {
			output += ' ';
		}
			
		output += t9;
	}
		
	return output;
}

for ( i = 0; i < numTestCases; ++i ) {
	console.log( 'Case #' + (i + 1) + ': ' + getResults( input[i] ));
}