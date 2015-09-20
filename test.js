var assert = require('assert');
var mocha = require('mocha');

var DataTypes = require('./index.js');

describe('getPrimitiveDataType', function(){
  it('should return boolean', function(done) {
    var dataType = DataTypes.getPrimitiveDataType(true);
    assert.strictEqual(dataType, "boolean");
    done();
  });

  it('should return object', function(done) {
    var dataType = DataTypes.getPrimitiveDataType({"obj": "DataTypes"});
    assert.strictEqual(dataType, "object");
    done();
  });

  it('should return null', function(done) {
    var dataType = DataTypes.getPrimitiveDataType(null);
    assert.strictEqual(dataType, "null");
    done();
  });

  it('should return undefined', function(done) {
    var dataType = DataTypes.getPrimitiveDataType(undefined);
    assert.strictEqual(dataType, "undefined");
    done();
  });

  it('should return number', function(done) {
    var dataType = DataTypes.getPrimitiveDataType(1);
    assert.strictEqual(dataType, "number");
    done();
  });

  it('should return string', function(done) {
    var dataType = DataTypes.getPrimitiveDataType("dyl");
    assert.strictEqual(dataType, "string");
    done();
  });

  it('should return symbol', function(done) {
    var dataType = DataTypes.getPrimitiveDataType(Symbol("dyl"));
    assert.strictEqual(dataType, "symbol");
    done();
  });
  it('should return object when param is a function', function(done){
    var dataType = DataTypes.getPrimitiveDataType(function(){});
    assert.strictEqual(dataType, "object");
    done();
  });
});

describe('Primitive Wrapper Objects', function() {
  it('should return true', function(done) {
    assert(DataTypes.isObject({"obj": 123}));
    done();
  });

  it('should return false', function(done) {
    assert(!DataTypes.isString(8888));
    done();
  });

  it('should return false', function(done) {
    assert(!DataTypes.isObject("123"));
    done();
  });

  it('should return true', function(done) {
    assert(DataTypes.isBoolean(false));
    done();
  });

  it('should return true', function(done) {
    assert(DataTypes.isSymbol(Symbol("dyl")));
    done();
  });

  it('should return true', function(done) {
    assert(DataTypes.isFunction(function(){}));
    done();
  });

  it('should return false', function(done) {
    assert(!DataTypes.isFunction(Symbol("datatypes")));
    done();
  });

  it('should return false', function(done) {
    assert(!DataTypes.isArray("dyl"));
    done();
  });

  it('should return true', function(done) {
    assert(DataTypes.isArray([1,"s"]));
    done();
  });
})
