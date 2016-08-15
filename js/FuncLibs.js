/**
 * Author by Vincent
 */

/**
 * explains: get a random num between min ~ max
 * paras [min]: down val
 * paras [max]: up val
 */
function random(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

