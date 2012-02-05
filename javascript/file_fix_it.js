var numTestCases, input, cases = [], testcase, i, line,
	fs = require('fs'),
	filepath = process.argv[2];

if ( !filepath ) {
	throw 'You must provide a file path';
}

input = fs.readFileSync( filepath, 'utf8' ).split('\n');
numTestCases = parseInt( input.shift(), 10 );


while ( input.length ) {
	line = input.shift().split(' ')
			.map( function( i ) { return parseInt( i, 10 ); });
	
	testcase = {
		existing: [],
		creating: []
	};

	i = line[0];

	while ( i-- ) {
		testcase.existing.push( input.shift().replace('\r', '');
	}

	i = line[1];

	while ( i-- ) {
		testcase.creating.push( input.shift().replace('\r', '');
	}

	cases.push( testcase );

}

function getResults( testcase ) {
	var directories = {},
		created = 0,
		rdirectory = /\/[^\/]+/g;

	testcase.existing.forEach( function( i ) {
		var part,
			directory = "";

		while ( (part=rdirectory.exec( i )) ) {
			directory += part[0];
			directories[ directory ] = 1;
		}
	});


	testcase.creating.forEach( function( i ) {
		var part,
			directory = "";
		
		while( ( part = rdirectory.exec( i ) )) {
			directory += part[0];

			if ( !directories[ directory ] ) {
				directories[ directory ] = 1;
				created++;
			}
		}
	});
			
	return created;
}

for ( i = 0; i < numTestCases; ++i ) {
	console.log( 'Case #' + (i + 1) + ': ' + getResults( cases[i] )); 
}
