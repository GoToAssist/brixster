define(function(require) {
    'use strict';

    /**
     * Does a deep merge of the properties of obj2 into obj1, thus altering obj1!
     *
     * @param {Object} obj1  The object to merge into
     * @param obj2           The object to merge from
     * @returns {Object} Returns obj1, now with the merged in properties from obj2.
     */
    function deepMerge(obj1, obj2) {
        for (var p in obj2) {
            if (obj2.hasOwnProperty(p)) {
                try {
                    // Property in destination object set; update its value.
                    if (obj2[p].constructor === Object) {
                        obj1[p] = deepMerge(obj1[p], obj2[p]);
                    } else {
                        obj1[p] = obj2[p];
                    }

                } catch (e) {
                    // Property in destination object not set; create it and set its value.
                    obj1[p] = obj2[p];
                }
            }
        }

        return obj1;
    }

    /**
     * Returns a deep clone of the given object.
     *
     * @param {Array | Object} o    The array or object to clone.
     * @returns {Array | Object} A deep clone of the given object.
     */
    function deepClone(o) {
        return JSON.parse(JSON.stringify(o));
    }

    /**
     * A no-operation function.
     */
    function noop() {}

    /**
     * Creates an array composed of the own enumerable property names of an object.
     *
     * @param  {object} obj object to inspect
     * @return {Array}      Returns an array of property names.
     */
    function keys(obj) {
        var result = [];
        for (var key in obj) {
            result.push(key);
        }
        return result;
    }

    /**
     * Given an array of objects return the first object for which the property 'property' has the value 'value'.
     *
     * @param {Array} array         The array of POJOS.
     * @param {String} property     The property
     * @param {Value} value         The value
     * @returns {*} The first object in the array for which the property has the given value, or null.
     */
    function getByPropertyValue(array, property, value) {
        var obj = null;

        array.forEach(function(entry) {
            if (entry[property] === value) {
                obj = entry;
                return;
            }
        });

        return obj;
    }

    /**
     * Given an array of objects return the index of the first object for which the property 'property' has the value 'value'.
     *
     * @param {Array} array         The array of POJOS.
     * @param {String} property     The property
     * @param {Value} value         The value
     * @returns {Number} The index of the first object in the array for which the property has the given value, or -1.
     */
    function getIndexByPropertyValue(array, property, value) {
        var index = -1;

        array.forEach(function(entry, i) {
            if (entry[property] === value) {
                index = i;
                return;
            }
        });

        return index;
    }

    /**
     * Returns whether or not the given value is a DOM element.
     *
     * @param {*} o
     * @returns {boolean} True if it is a DOM element, false otherwise.
     */
    function isDOMElement(o){
        return (
            typeof HTMLElement === "object" ? o instanceof HTMLElement : //DOM2
            o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName==="string"
        );
    }



    return {
        deepClone: deepClone,
        deepMerge: deepMerge,
        keys: keys,
        isDOMElement: isDOMElement,
        getByPropertyValue: getByPropertyValue,
        getIndexByPropertyValue: getIndexByPropertyValue,
        noop: noop
    };
});
