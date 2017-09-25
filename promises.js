
// https://www.npmjs.com/package/node-fetch
var fetch = require('node-fetch');

const yearsUsedGithubFor = 
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

// https://stackoverflow.com/questions/22951208/return-value-after-a-promise
console.log(yearsUsedGithubFor);

