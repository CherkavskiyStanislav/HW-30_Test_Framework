describe('describe', function () {
    it('test', function () {

    })
});

let assert = chai.assert;

describe("validateEmail", function() {
    describe('valid string', function () {
        it('not an empty string', function () {
            assert.equal(validateEmail(''), false);
        });
        it('typeof string', function() {
            assert.equal(validateEmail(222), false, 'number error');
            assert.equal(validateEmail(true), false, 'boolean error');
            assert.equal(validateEmail({}), false, 'object error');
        });
        it('not just whitespace', function() {
            assert.equal(validateEmail('     '), false);
        });
        it('length of string', function () {
            assert.equal(validateEmail('12345'), false);
        })
  })
    describe('valid data', function () {
        it('No @ or @ the first character', function () {
            assert.isFalse(validateEmail('emailgmail.com'), 'no @');
            assert.isFalse(validateEmail('@emailgmail.com'), '@ the first character')
        })
        it('Don\'t have two or more \"@\"', function () {
            assert.isFalse(validateEmail('@@'), 'more @');
        })
        it('the dot is after the @ and not a \".@\"', function () {
            assert.isFalse(validateEmail('email.@gmailcom'), 'wrong dot position')
        })
    })
})
