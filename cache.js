let cache = {};

module.exports = {
    set (key, value) {
        cache[name] = value;
    },

    get (key) {
        return cache[key];
    },

    getAll() {
        return JSON.stringify(Object.keys(cache));
    }
};