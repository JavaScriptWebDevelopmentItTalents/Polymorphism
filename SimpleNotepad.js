/*global AbstractNotepad, validator, Page, observable*/
var SimpleNotepad = (function iife(parent, IObservable) {
    'use strict';
    function SimpleNotepad(numberOfPages) {
        var _pages = [],
            i;
        for (i = 0; i < numberOfPages; i += 1) {
            _pages[i] = new Page(i);
        }
        this.getPages = function get() {
            return _pages;
        };
    }

    SimpleNotepad.prototype = Object.assign(IObservable, parent.prototype);
    SimpleNotepad.constructor = SimpleNotepad;

    SimpleNotepad.prototype.addTextToPage = function addTextToPage(id, text) {
        if (this.getPages()[id] !== undefined) {
            this.getPages()[id].addText(text);
        } else {
            console.log('No such page');
        }
    };
    SimpleNotepad.prototype.eraseTextToPage = function eraseTextToPage(id) {
        if (this.getPages()[id] !== undefined) {
            this.getPages()[id].deleteText();
        } else {
            console.log('No such page');
        }
    };
    SimpleNotepad.prototype.replaceTextToPage = function replaceText(id, text) {
        this.eraseTextToPage(id);
        this.addTextToPage(id, text);
    };
    SimpleNotepad.prototype.showAllPages = function showAllPages() {
        for (var i = 0; i < this.getPages().length; i += 1) {
            console.log(this.getPages()[i].toString());
        }
    };
    SimpleNotepad.prototype.searchWord = function searchWord(id, word) {
        if (this.getPages()[id] !== undefined) {
            this.getPages()[id].searchWord(word);
        } else {
            console.log('No such page');
        }
    };
    SimpleNotepad.prototype.showAllPagesWithDigits = function showAllPagesWithDigits() {
        for (var i = 0; i < this.getPages().length; i += 1) {
            if(this.getPages()[i].containsDigits()){
                console.log(this.getPages()[i].toString());
            }
        }
    };
    return SimpleNotepad;
}(AbstractNotepad, observable));