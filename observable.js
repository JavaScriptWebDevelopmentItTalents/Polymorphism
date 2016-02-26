/*global observers, validator*/
var observable = (function iife() {
    'use strict';
    var observable = Object.create({});

    Object.defineProperties(observable, {
        /**
         * @constructor
         * Observable constructor.
         */
        init: {
            value: function init() {
                this.observers = [];
                return this;
            }
        },
        observers: {
            /**
             * Gets observers
             * @returns {object} - array
             */
            get: function get() {
                return this._observers;
            },
            /**
             * Sets observers.
             * @param value - array
             */
            set: function set(value) {
                validator.validateIfObject(value, 'Observers');
                this._observers = value;
            }
        },
        notifyObservers: {
            /**
             * Notifies observers.
             * @param event
             * @param data
             */
            value: function (event, data) {
                var i;
                for (i = 0; i < this.getObservers().length; i += 1) {
                    this.observers[i].update(event, data);
                }
            }
        }
    });

    return observable;
}());
