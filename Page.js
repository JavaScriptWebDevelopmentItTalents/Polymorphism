/*global validator*/
var Page = (function iife() {
    'use strict';
    function Page(id, heading, text) {
        var _heading,
            _text,
            _id;

        this.getHeading = function get() {
            return _heading;
        };
        this.setHeading = function set(value) {
            validator.validateIfString(value, 'Page heading');
            _heading = value;
        };
        this.getText = function get() {
            return _text;
        };
        this.setText = function set(text) {
            validator.validateIfString(text, 'Page text');
            _text = text;
        };
        this.getId = function get() {
            return _id;
        };
        this.setId = function set(value) {
            validator.validateIfNumber(value, 'Page id');
            _id = value;
        };

        heading = heading || '';
        text = text || '';
        this.setHeading(heading);
        this.setText(text);
        this.setId(id);
    }

    Page.prototype.addText = function addText(text) {
        validator.validateIfString(text, 'Page text');
        this.setText(this.getText() + text);
    };
    Page.prototype.deleteText = function deleteText() {
        this.setText('');
    };
    Page.prototype.toString = function toString() {
        return this.getHeading() + '\n' + this.getText();
    };
    Page.prototype.searchWord = function searchWord(word) {
        return this.getText().indexOf(word) > -1;
    };
    Page.prototype.containsDigits = function containsDigits() {
        return this.getText().search('[0-9]') > -1;
    };
    return Page;
}());