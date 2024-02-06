function validate(name, email) {
    try {
        if(name === '') {
            throw 'Username may NOT be empty!';
        } else if(email === '') {
            throw 'Email may NOT be empty!';
        }
        return true;
    } catch(error) {
        return error;
    }
}

export { validate };