import { Range } from "../data/items/items.types";

export var url = process.env.REACT_APP_BACKEND_URL;

export function chunkArray(arrayToChunk: any, chunkSize: any) {
	var chunkedArray = [];
	var tempArray = [];
	for (var i = 0; i < arrayToChunk.length; i++) {
		tempArray.push(arrayToChunk[i]);

		if ((i + 1) % chunkSize === 0) {
			chunkedArray.push(tempArray);
			tempArray = [];
		}
	}

	if (arrayToChunk.length < chunkSize) {
		chunkedArray.push(tempArray);
		tempArray = [];
	}
	if (tempArray.length > 0) {
		chunkedArray.push(tempArray);
	}

	return chunkedArray;
}

export function convertMillis(millis: number) {
	var seconds = (millis / 1000).toFixed(1);
	var minutes = (millis / (1000 * 60)).toFixed(1);
	var hours = (millis / (1000 * 60 * 60)).toFixed(1);
	var days = (millis / (1000 * 60 * 60 * 24)).toFixed(1);

	if (+seconds < 60) {
		return seconds + " Sec";
	} else if (+minutes < 60) {
		return minutes + " Min";
	} else if (+hours < 24) {
		return hours + " Hrs";
	} else {
		return days + " Days"
	}
}

export function getRandomFromRange(range: Range): number {
  return Math.floor(Math.random() * (range.max - range.min) + range.min);
}
