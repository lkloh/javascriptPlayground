
// https://www.npmjs.com/package/node-fetch
var fetch = require('node-fetch');

const yearsIUsedGithubFor = 
	fetch('https://api.github.com/users/lkloh')
	    .then((response) => {
	        return response.json();
	    }).then((userProfile) => {
	    	const today = new Date();
	    	const thisYear = today.getFullYear();
	        const timeJoined = new Date(userProfile['created_at']);
	        const yearJoined = timeJoined.getFullYear();
	        return thisYear - yearJoined + 1;
	    }).then((lengthOfUsage) => {
	    	return lengthOfUsage;
	    });

console.log(yearsIUsedGithubFor);

