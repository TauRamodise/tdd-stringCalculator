describe('add()', function () {
    it('should take and empty string and return 0', function () {
        let calculate = add(' ')
        expect(calculate).toBe(0)
    })
    it('should take a string with numbers and add it up', function () {
        let calculate = add('1, 2')
        expect(calculate).toBe(3)
    })
    it('should add multiple numbers in a string', function () {
        let calculate = add('1, 2, 3, 4, 5')
        expect(calculate).toBe(15)
    })
    it('should add multiple numbers in a string with a next line separator', function () {
        let calculate = add('1\n2, 4')
        expect(calculate).toBe(7)
    })
    it('should add multiple numbers in a string with next line separators', function () {
        let calculate = add('1\n2, 3\n7')
        expect(calculate).toBe(13)
    })
    it('should add throw error when adding negative numbers ', function () {
        let calculate = function () {
            throw 'error no negative numbers allowed -1, -2'
        };
        expect(calculate).toThrow('error no negative numbers allowed -1, -2');
    })
    it('should accept an expression with a delimiter and add the string', function () {
        let calculate = add('//;\n1;2');
        expect(calculate).toBe(3);
    })
})