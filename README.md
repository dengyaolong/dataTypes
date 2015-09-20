# dataTypes

##Install
```
npm i primitive-datatypes 
```

##API 

### getPrimitiveDataType(obj)

get the Primitive Data Types, `result` in `["string", "number", "boolean", "null", "undefined", "symbol", "object"]`
else return ` object`

example

``` 
var DataTypes = require('DataTypes');
var result = DataType.getPrimitiveDataType(obj);
console.log(DataType.getPrimitiveDataType(true));
// => 'boolean'
console.log(DataTypes.getPrimitiveDataType({"obj": "DataTypes"});
// => 'object'
```


### is?

check the obj is the dataType or not
example
```
var DataTypes = require('DataTypes');

DataTypes.isObject({"obj": 123});
// => 'true'
DataTypes.isString(8888);
// => 'false'
DataTypes.isNumber("123");
// => 'false'
DataTypes.isBoolean(false);
// => 'true'
DataTypes.isSymbol(Symbol("DataTypes"));
// => 'true'
DataTypes.isFunction(Symbol("DataTypes"));
// => 'false'
DataTypes.isArray(Symbol("DataTypes"));
// => 'false'

```
