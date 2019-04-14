module.exports = (...args) => {
    return args.reduce(function (acc, val) {
        if (val === 0) {
            throw "You can't divide by zero"
        }
        else {
            return acc /= val;
        }
    });
}