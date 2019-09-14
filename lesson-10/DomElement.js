'use strict';

class DomElement {

    constructor() {
        this.selector; 
        this.height = '100px'; 
        this.width = '500px'; 
        this.bg = 'green'; 
        this.fontSize = '24px';
    }
    
    setWidth(width) {
        this.width = width+'px';
    }

    setHeight(height) {
        this.height = height+'px';
    }

    setBg(color) {
        this.bg = color;   
    }

    cssText(elem){        
        elem.style.backgroundColor = this.bg;
        elem.style.width = this.width;
        elem.style.height = this.height;
        elem.style.fontSize = this.fontSize;
    }
};

DomElement.prototype.createDiv = function(selector) { 
    let elem,
        body = document.querySelector('body');
    if (selector[0] === '.'){
        elem = document.createElement('div');
    };
    if (selector[0] === '#'){
        elem = document.createElement('p');
    };
    elem.textContent = 'Новый элемент на странице';
    elem.classList.add('newElement');
    this.cssText(elem);
    body.appendChild(elem);
};

let element = new DomElement();
element.setWidth('400');
element.setBg('yellow');
element.createDiv('.test');

