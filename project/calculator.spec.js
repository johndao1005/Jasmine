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
    it('should multiply numbers to total', function() {
        const calculator = new Calculator()
        calculator.total = 20
        calculator.multiply(5)
        expect(calculator.total).toBe(100)
    })
    it('should divide numbers to total', function() {
        const calculator = new Calculator()
        calculator.total = 100
        calculator.divide(5)
        expect(calculator.total).toBe(20)
    })
    xit('should throw an error if total not a number', function() {
        const calculator = new Calculator()
        expect(calculator.total).tobe(0)
        expect(calculator.total).toBeFalsy()
    })
    it('has constructor', function() {
        const calculator = new Calculator()
        const calculator2 = new Calculator()
        expect(calculator).toEqual(calculator2)
    })
    it('has instantiated', function() {
        const calculator = new Calculator()
        const calculator2 = new Calculator()
        expect(calculator).toBeTruthy()
        expect(calculator2).toBeTruthy()
        expect(calculator).toEqual(calculator2)
        expect(calculator.constructor.name).toContain('Cal')
    })
    it('has instantiated unique object', function() {
        const calculator = new Calculator()
        const calculator2 = new Calculator()
        expect(calculator).not.toBe(calculator2)
    })
    it('has common operations', function() {
        const calculator = new Calculator()
        expect(calculator.add).not.toBeUndefined()
        expect(calculator.substract).not.toBeUndefined()
        expect(calculator.multiply).not.toBeUndefined()
        expect(calculator.divide).not.toBeUndefined()
    })
    it('overwrite value', function() {
        const calculator = new Calculator()
        calculator.total = null
        expect(calculator.total).toBeNull()
    })
    it('does not handle NaN', function() {
        const calculator = new Calculator()
        calculator.total = 20
        calculator.multiply('john')
        expect(calculator.total).toBeNaN()
    })
    xit('handle divide by 0', function() {
        const calculator = new Calculator()
        calculator.total = 20
        expect(function() { calculator.divide(0) }).toThrow() //Just general error
        expect(function() { calculator.divide(0) }).toThrowError(Error) //throw specific Error
        expect(function() { calculator.divide(0) }).toThrowError(Error, 'Cannot divide by 0') //display the error message
    })
    it('return total', function() {
        const calculator = new Calculator()
        calculator.total = -50
        expect(calculator.add(20)).toBe(-30)
        expect(calculator.total).toMatch(/-?\d+/)
        expect(typeof calculator.total).toMatch('number')
    })

})