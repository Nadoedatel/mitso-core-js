/**
 * Returns the rectangle object with width and height parameters and getArea() method
 *
 * @param {number} width
 * @param {number} height
 * @return {Object}
 *
 * @example
 *    const r = new Rectangle(10,20);
 *    console.log(r.width);       // => 10
 *    console.log(r.height);      // => 20
 *    console.log(r.getArea());   // => 200
 */
function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.getArea = function () {
    return this.width * this.height;
  };
}

/**
 * Returns the JSON representation of specified object
 *
 * @param {object} obj
 * @return {string}
 *
 * @example
 *    [1,2,3]   =>  '[1,2,3]'
 *    { width: 10, height : 20 } => '{"width":10,"height":20}'
 */
function getJSON(obj) {
  return JSON.stringify(obj);
}

/**
 * Returns the object of specified type from JSON representation
 *
 * @param {Object} proto
 * @param {string} json
 * @return {object}
 *
 * @example
 *    const r = fromJSON(Circle.prototype, '{"radius":10}');
 *
 */
function fromJSON(proto, json) {
  const obj = JSON.parse(json);
  Object.setPrototypeOf(obj, proto);
  return obj;
}

/**
 * Css selectors builder
 */
const cssSelectorBuilder = {
  element(value) {
    return new Selector().element(value);
  },

  id(value) {
    return new Selector().id(value);
  },

  class(value) {
    return new Selector().class(value);
  },

  attr(value) {
    return new Selector().attr(value);
  },

  pseudoClass(value) {
    return new Selector().pseudoClass(value);
  },

  pseudoElement(value) {
    return new Selector().pseudoElement(value);
  },

  combine(selector1, combinator, selector2) {
    return new Selector().combine(selector1, combinator, selector2);
  },
};

class Selector {
  constructor() {
    this.result = '';
    this.order = [];
  }

  checkOrder(type) {
    const orderMap = {
      element: 1,
      id: 2,
      class: 3,
      attr: 4,
      pseudoClass: 5,
      pseudoElement: 6,
    };

    if (this.order.length > 0 && orderMap[type] < Math.max(...this.order)) {
      throw new Error('Selector parts should be arranged in the following order: element, id, class, attribute, pseudo-class, pseudo-element');
    }

    if (this.order.includes(orderMap[type]) && (type === 'element' || type === 'id' || type === 'pseudoElement')) {
      throw new Error(`${type} should not occur more than once inside the selector`);
    }

    this.order.push(orderMap[type]);
  }

  element(value) {
    this.checkOrder('element');
    this.result += value;
    return this;
  }

  id(value) {
    this.checkOrder('id');
    this.result += `#${value}`;
    return this;
  }

  class(value) {
    this.checkOrder('class');
    this.result += `.${value}`;
    return this;
  }

  attr(value) {
    this.checkOrder('attr');
    this.result += `[${value}]`;
    return this;
  }

  pseudoClass(value) {
    this.checkOrder('pseudoClass');
    this.result += `:${value}`;
    return this;
  }

  pseudoElement(value) {
    this.checkOrder('pseudoElement');
    this.result += `::${value}`;
    return this;
  }

  combine(selector1, combinator, selector2) {
    this.result = `${selector1.stringify()} ${combinator} ${selector2.stringify()}`;
    return this;
  }

  stringify() {
    return this.result;
  }
}

module.exports = {
  Rectangle,
  getJSON,
  fromJSON,
  cssSelectorBuilder,
};
