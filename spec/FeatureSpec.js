'use strict';

describe('Feature Test:', function(){
  var supermarket;
  var joc = jasmine.objectContaining;

  beforeEach(function(){
    supermarket = new Supermarket();
  });

  it('should display items and prices in an object', function(){
    expect(supermarket.items).toEqual(joc({'Cheddar': 1}))
  });

  it('should add scanned items into the basket', function(){
    supermarket.scan('Edam', 4);
    supermarket.scan('Wensleydale', 3);
    expect(supermarket.basket).toEqual(joc({'Edam': 4}))
  });

  it('should give a total price from the basket', function(){
    supermarket.scan('Edam', 4);
    supermarket.scan('Edam', 4);
    supermarket.subtotal();
    expect(supermarket.subtotal()).toEqual(8);
  });

  it('shows total price formatted correctly', function(){
    supermarket.scan('Edam', 4);
    supermarket.scan('Edam', 4);
    supermarket.subtotal();
    expect(supermarket.totalcalc()).toEqual('£8.00');
  });
});
