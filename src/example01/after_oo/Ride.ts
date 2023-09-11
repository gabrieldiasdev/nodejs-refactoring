import Segment from './Segment';

export default class Ride {
	NORMAL_FARE = 2.1;
	SUNDAY_FARE = 2.9;
	OVERNIGHT_FARE = 3.9;
	OVERNIGHT_SUNDAY_FARE = 5;
	MINIMUM_FARE = 10;

	segments: Segment[];

	constructor() {
		this.segments = [];
	}

	addSegment(distance: number, date: Date) {
		this.segments.push(new Segment(distance, date));
	}

	calculateFare() {
		let fare = 0;

		for (const segment of this.segments) {
			if (segment.isOvernight() && !segment.isSunday()) {
				fare += segment.distance * this.OVERNIGHT_FARE;
				continue;
			}
			if (segment.isOvernight() && segment.isSunday()) {
				fare += segment.distance * this.OVERNIGHT_SUNDAY_FARE;
				continue;
			}
			if (!segment.isOvernight() && segment.isSunday()) {
				fare += segment.distance * this.SUNDAY_FARE;
				continue;
			}
			if (!segment.isOvernight() && !segment.isSunday()) {
				fare += segment.distance * this.NORMAL_FARE;
				continue;
			}
		}

		return fare < this.MINIMUM_FARE ? this.MINIMUM_FARE : fare;
	}
}
