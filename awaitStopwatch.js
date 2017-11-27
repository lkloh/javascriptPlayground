
function waitOneSecond(remainingSeconds) { 
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(remainingSeconds - 1);
    }, 1000);
  });
}

async function stopWatch() {
	var countdown = 5;
	console.log(`Countdown!`);
	while (countdown > 0) {
		console.log(countdown);
  		countdown = await waitOneSecond(countdown);
  	}
  	console.log(countdown);
}

stopWatch();


