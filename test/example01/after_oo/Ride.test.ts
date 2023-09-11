import Ride from '../../../src/example01/after_oo/Ride';

it('Should apply normal fare', function () {
	const ride = new Ride();
	ride.addSegment(10, new Date('2021-03-01T10:00:00'));
	const fare = ride.calculateFare();
	expect(fare).toBe(21);
});

it('Should apply sunday fare', function () {
	const ride = new Ride();
	ride.addSegment(10, new Date('2021-03-07T10:00:00'));
	const fare = ride.calculateFare();
	expect(fare).toBe(29);
});

it('Should apply overnight fare', function () {
	const ride = new Ride();
	ride.addSegment(10, new Date('2021-03-01T23:00:00'));
	const fare = ride.calculateFare();
	expect(fare).toBe(39);
});

it('Should apply overnight sunday fare', function () {
	const ride = new Ride();
	ride.addSegment(10, new Date('2021-03-07T23:00:00'));
	const fare = ride.calculateFare();
	expect(fare).toBe(50);
});

it('Should throw invalid date if date is not a date', function () {
	const ride = new Ride();
	expect(() => ride.addSegment(10, new Date('abcde'))).toThrow(
		new Error('Invalid date')
	);
});

it('Should return 10 as minimum fare', function () {
	const ride = new Ride();
	ride.addSegment(1, new Date('2021-03-07T23:00:00'));
	const fare = ride.calculateFare();
	expect(fare).toBe(10);
});
