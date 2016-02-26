/*global SimpleNotepad, SecuredNotepad, ElectronicSecuredNotepad*/
var notepadFactory = (function iife() {
    'use strict';
    function notepadFactory(numberOfPages, password, isStarted) {
        switch(arguments.length){
            case 1: return new SimpleNotepad(numberOfPages);
            case 2: return new SecuredNotepad(numberOfPages, password);
            case 3: return new ElectronicSecuredNotepad(numberOfPages, password, isStarted);
            default: console.log("Invalid number of arguments"); return {};
        }
    }

    return notepadFactory;
}());