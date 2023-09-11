import { calculateRide } from "../../../src/example01/after_procedural/calculateRide"

it('Should apply normal fare', function () {
   const fare = calculateRide([{ distance: 10, date: new Date('2021-03-01T10:00:00') }])
   expect(fare).toBe(21)
})

it('Should apply sunday fare', function () {
   const fare = calculateRide([{ distance: 10, date: new Date('2021-03-07T10:00:00') }])
   expect(fare).toBe(29)
})

it('Should apply overnight fare', function () {
   const fare = calculateRide([{ distance: 10, date: new Date('2021-03-01T23:00:00') }])
   expect(fare).toBe(39)
})

it('Should apply overnight sunday fare', function () {
   const fare = calculateRide([{ distance: 10, date: new Date('2021-03-07T23:00:00') }])
   expect(fare).toBe(50)
})

it('Should throw invalid distance if distance is not a number', function () {
   expect(() =>
      calculateRide([{ distance: '10', date: new Date('2021-03-07T23:00:00') }]),
   ).toThrowError(new Error('Invalid distance'))
})

it('Should throw invalid date if date is not a date', function () {
   expect(() => calculateRide([{ distance: 10, date: new Date('abcde') }])).toThrowError(
      new Error('Invalid date'),
   )
})

it('Should return 10 as minimum fare', function () {
   const fare = calculateRide([{ distance: 1, date: new Date('2021-03-07T23:00:00') }])
   expect(fare).toBe(10)
})