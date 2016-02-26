/*global AbstractElectronicDevice, SecuredNotepad*/
var ElectronicSecuredNotepad = (function iife(AbstractElectronicDevice, SecuredNotepad) {
    'use strict';
    function ElectronicSecuredNotepad(numberOfPages, password, isStarted) {
        AbstractElectronicDevice.call(this, isStarted);
        SecuredNotepad.call(this, numberOfPages, password);
    }

    ElectronicSecuredNotepad.prototype = Object.assign({}, AbstractElectronicDevice.prototype
        , SecuredNotepad.prototype);
    ElectronicSecuredNotepad.constructor = ElectronicSecuredNotepad;
    return ElectronicSecuredNotepad;
}(AbstractElectronicDevice, SecuredNotepad));