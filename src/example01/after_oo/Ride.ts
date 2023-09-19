import FareCalculator from './Interfaces/FareCalculator';
import Segment from './Segment';

export default class Ride {
	MINIMUM_FARE = 10;

	segments: Segment[];

	constructor(readonly fareCalculator: FareCalculator) {
		this.segments = [];
	}

	addSegment(distance: number, date: Date) {
		this.segments.push(new Segment(distance, date));
	}

	calculateFare() {
		let fare = 0;

		for (const segment of this.segments) {
			fare += this.fareCalculator.calculate(segment);
		}

		return fare < this.MINIMUM_FARE ? this.MINIMUM_FARE : fare;
	}
}
