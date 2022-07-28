//all use cases were calculated online
//credits to  https://www.calculator.net/payment-calculator.html

it('should calculate the monthly rate correctly', function () {
  const values  = { amount: 10000, years: 5, rate: 3 };
  expect(calculateMonthlyPayment(values)).toEqual('179.69')
});

it("should return a result with 2 decimal places", function() {
  const values  = { amount: 21000, years: 2.4, rate: 7.601 };
  expect(calculateMonthlyPayment(values)).toEqual('800.00')
});

/// etc

it('should calculate super high interest rate', function () {
  const values  = { amount: 13000, years: 0.5, rate: 99.99 };
  expect(calculateMonthlyPayment(values)).toEqual('2840.53')
});

it('should calculate 0 interest rate', function () {
  const values  = { amount: 12000, years: 1, rate: 0 };
  expect(calculateMonthlyPayment(values)).toEqual('1000.00')
});

it('should accept only positive numbers', function () {
  const values  = { amount: "text", years: "1", rate: false };
  expect(calculateMonthlyPayment(values)).toBe('Please provide correct information!')
});