/*global validator*/
var AbstractElectronicDevice = (function iife() {
    'use strict';

    function AbstractElectronicDevice(isStarted) {
        var _isStarted;
        isStarted = isStarted || false;
        this.getIsStarted = function get(){
            return _isStarted;
        };
        this.setIsStarted = function set(value){
            validator.validateIfBool(value, 'AbstractElectronicDevice isStarted');
            _isStarted = value;
        };
    }

    AbstractElectronicDevice.prototype.start = function start() {
        this.setIsStarted(true);
    };
    AbstractElectronicDevice.prototype.stop = function stop() {
        this.setIsStarted(false);
    };
    return AbstractElectronicDevice;
}());