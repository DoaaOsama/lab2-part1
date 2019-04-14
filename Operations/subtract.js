module.exports = (...args) => {
    return args.reduce(function (acc, val) {
        return acc -= val;
    });
}