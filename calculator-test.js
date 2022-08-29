
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 10000,
    years: 10,
    rate: 4.5
    };
    expect(calculateMonthlyPayment(values)).toEqual('103.64');
  });


it("should return a result with 2 decimal places", function() {
  // ..
  const values = {
    amount: 10035,
    years: 10,
    rate: 4.5
    };
    expect(calculateMonthlyPayment(values)).toEqual('104.00');

});
