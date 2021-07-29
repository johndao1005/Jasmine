describe('calculator.js', function() {
    it('should add numbers to total', function() {
        const calculator = new Calculator()
        calculator.add(5)
        expect(calculator.total).toBe(5)
    })
    it('should substract numbers to total', function() {
        const calculator = new Calculator()
        calculator.total = 30
        calculator.substract(5)
        expect(calculator.total).toBe(25)
    })
    it('should add numbers to total', function() {
        const calculator = new Calculator()
        calculator.total = 20
        calculator.multiply(5)
        expect(calculator.total).toBe(100)
    })
    it('should add numbers to total', function() {
        const calculator = new Calculator()
        calculator.total = 100
        calculator.divide(5)
        expect(calculator.total).toBe(20)
    })
})