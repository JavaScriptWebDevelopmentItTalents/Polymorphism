/*global SimpleNotepad, validator, Page*/
var SecuredNotepad = (function iife(parent) {
    'use strict';
    /**
     *
     * @param numberOfPages - int
     * @param password - string
     * @constructor
     */
    function SecuredNotepad(numberOfPages, password) {
        var _password;
        parent.call(this, numberOfPages);

        this.getPassword = function get(){
            return _password;
        };
        this.setPassword = function set(value){
            validator.validateIfString(value, "SecuredNotepad password");
             _password = value;
        };
        this.setPassword(password);
    }

    SecuredNotepad.prototype = Object.create(parent.prototype);
    SecuredNotepad.constructor = SecuredNotepad;

    SecuredNotepad.prototype.validatePassword = function validatePassword(password){
        if(this.getPassword() === password){
            return true;
        }
        console.log("Wrong password");
    };
    SecuredNotepad.prototype.addTextToPage = function addTextToPage(id, text, password) {
        if(this.validatePassword(password)){
            parent.prototype.addTextToPage.call(this, id, text);
        }
    };
    SecuredNotepad.prototype.eraseTextToPage = function eraseTextToPage(id, password) {
        if(this.validatePassword(password)){
            parent.prototype.eraseTextToPage.call(this, id);
        }
    };
    SecuredNotepad.prototype.replaceTextToPage = function replaceText(id, text, password) {
        if(this.validatePassword(password)){
            parent.prototype.replaceTextToPage.call(this, id, text);
        }
    };
    SecuredNotepad.prototype.showAllPages = function showAllPages(password) {
        if(this.validatePassword(password)){
            parent.prototype.showAllPages.call(this);
        }
    };
    SecuredNotepad.prototype.searchWord = function searchWord(id, word, password) {
        if(this.validatePassword(password)){
            parent.prototype.searchWord.call(this, id, word);
        }
    };
    SecuredNotepad.prototype.showAllPagesWithDigits = function showAllPagesWithDigits(password) {
        if(this.validatePassword(password)){
            parent.prototype.showAllPagesWithDigits.call(this);
        }
    };
    return SecuredNotepad;
}(SimpleNotepad));