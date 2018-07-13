'use strict';

function Supermarket() {
  this.items = {'Cheddar': 1, 'Stilton': 2, 'Wensleydale': 3};
  this.basket = {};
  this.total = [];
}

Supermarket.prototype.items = function() {
  return this.items;
};

Supermarket.prototype.scan = function(k,v) {
  this.basket[k] = v;
  this.total.push(v);
};

Supermarket.prototype.subtotal = function() {
  for (var i = 0, sum = 0; i < this.total.length; sum += this.total[i++]);
  return sum;
};

Supermarket.prototype.totalcalc = function() {
  return '£' + this.subtotal().toFixed(2);
};
