import FareCalculator from '../Interfaces/FareCalculator';
import Segment from '../Segment';

export default class SundayFareCalculator implements FareCalculator {
	FARE = 2.9;

	constructor(readonly next?: FareCalculator) {}

	calculate(segment: Segment): number {
		if (segment.isSunday() && !segment.isOvernight()) {
			return segment.distance * this.FARE;
		}

		if (!this.next) throw new Error('');
		return this.next?.calculate(segment);
	}
}
