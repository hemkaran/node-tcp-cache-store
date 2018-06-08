'use strict';
let cache = {};

module.exports = {
    set (key, value, ttl) {
        cache[key] = value;
        if(ttl && !isNaN(ttl)) {
            setTimeout(function () {
                delete cache[key];
            }, ttl * 1000);
        }
    },

    get (key) {
        return cache[key] || '';
    },

    getAll() {
        return Object.keys(cache);
    }
};