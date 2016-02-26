var AbstractNotepad = (function iife() {
    'use strict';
    function AbstractNotepad() {

    }

    AbstractNotepad.prototype.addTextToPage = function addTextToPage(id) {
        throw new Error('Not implemented');
    };
    AbstractNotepad.prototype.eraseTextToPage = function eraseTextToPage(id) {
        throw new Error('Not implemented');
    };
    AbstractNotepad.prototype.replaceTextToPage = function replaceTextToPage(id) {
        throw new Error('Not implemented');
    };
    AbstractNotepad.prototype.showAllPages = function showAllPages() {
        throw new Error('Not implemented');
    };
    AbstractNotepad.prototype.searchWord = function searchWord() {
        throw new Error('Not implemented');
    };
    AbstractNotepad.prototype.showAllPagesWithDigits = function searchWord() {
        throw new Error('Not implemented');
    };
    return AbstractNotepad;
}());