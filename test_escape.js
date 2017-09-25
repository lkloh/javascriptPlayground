
// Same
console.log( escape("abc123") );
console.log( encodeURI("abc123") );
console.log( "\n" );

// Different - special characters
console.log( escape("?%") );
console.log( encodeURI("?%") );
console.log( "\n" );

// Same - special characters
console.log( escape("?%") );
console.log( encodeURIComponent("?%") );
console.log( "\n" );

// Why
console.log( escape("https://www.collegefashion.net/search?query=blazers") );
console.log( encodeURI("https://www.collegefashion.net/search?query=blazers") ); //encode URLs
console.log( encodeURIComponent("https://www.collegefashion.net/search?query=blazers") );