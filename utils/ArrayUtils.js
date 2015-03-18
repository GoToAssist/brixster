define(function(require) {
    'use strict';

    /**
     * Finds the intersection of two arrays.
     *
     * @param  {Array} array Array to compare.
     * @return {Array}       Intersection of two arrays.
     */
    Array.prototype.intersection = function(array)
    {
        return this.filter(function(n) {
            return array.indexOf(n) !== -1;
        });
    };


    /**
     * Removes an item from array
     *
     * @param  {Function/object} predicate Predicate function to evaluate elements/ item to be removed
     */
    Array.prototype.remove = function(predicate) {
        var index = -1,
            length = this.length,
            condition = predicate;

        if (typeof predicate !== 'function') {
            condition = function(item) {
                return item === predicate;
            }
        }

        while (++index < length) {
            var value = this[index];
            if (condition(value)) {
                this.splice(index--, 1);
                length--;
            }
        }
    }

});
