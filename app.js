function validateEmail(email){
    if (email === '') return false;
    if (typeof email !== 'string' || email.length < 5) return false;

    if (!email.split('').includes('@') 
        || email.split('')[0] === '@' 
        || email.split('@').length > 2
        || email.indexOf('.@') !== -1
        || email.split('@')[1].indexOf('.') === -1
    ) return false;

    return true;
}

console.log(validateEmail('e.mail@gmail.com'));
console.log(validateEmail('e.mail@gmailcom'));
console.log(validateEmail('e.mail.@gmail.com'));