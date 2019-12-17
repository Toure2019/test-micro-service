function randomNumber(precision) {
	return Math.floor(Math.random() * precision);
}

module.exports = (res, req) => {
	// odd = heads  even = tails
	const coin = (randomNumber(10000) % 2) ? 'heads' : 'tails';

	return {
		data: coin
	};
}