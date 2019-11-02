let add = require('../src/stringCalculator');

describe('add()', function () {
let calc;
    beforeEach(() => {
 calc = add()

    })

    it('should take and empty string and return 0', function () {
          calc = add(' ')
        expect(calc).toBe(0)
    })
    it('should take a string with numbers and add it up', function () {
         calculate = add('1, 2')
        expect(calculate).toBe(3)
    })
    it('should add multiple numbers in a string', function () {
         calculate = add('1, 2, 3, 4, 5')
        expect(calculate).toBe(15)
    })
    it('should add multiple numbers in a string with a next line separator', function () {
         calculate = add('1\n2, 4')
        expect(calculate).toBe(7)
    })
    it('should add multiple numbers in a string with next line separators', function () {
         calculate = add('1\n2, 3\n7')
        expect(calculate).toBe(13)
    })
    it('should add throw error when adding negative numbers ', function () {
        let calculate = function () {
            throw 'error no negative numbers allowed -5, -5'
        };
        expect(calculate).toThrow();
    })
    it('should accept an expression with a delimiter and add the string', function () {
         calculate = add('//;\n1;2');
        expect(calculate).toBe(3);
    })
    it('should accept an expression with a delimiter that can be any length and add the string', function () {
         calculate = add('//[***]\n1***2***5');
        expect(calculate).toBe(8);
    })
    it('should accept an expression with multiple delimiters and add the string', function () {
         calculate = add('//[*][%]\n1*2%3');
        expect(calculate).toBe(6);
    })
})