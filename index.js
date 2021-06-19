function formatAsCurrency(number, options) {
    return number
            .toLocaleString(options.language, {
            style: "currency",
            currency: options.currency
        });
}

module.exports = {
    formatAsCurrency
}