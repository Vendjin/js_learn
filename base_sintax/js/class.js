'use strict';

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea(){
        return this.height * this.width;
    }
}

const square = new Rectangle(10, 10);
console.log(square.calcArea());

class ColoredRectangleWithText extends Rectangle{
    constructor(height, width, text, bgColor) {
        // вызывает строчки про this.height и this.width из родителя
        super(height, width);
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Text: ${this.text}, color ${this.bgColor}, width ${this.width}`);
    }
}

const redRectangle = new ColoredRectangleWithText(100, 200, 'Text', 'red');

redRectangle.showMyProps();
console.log(redRectangle.calcArea());
