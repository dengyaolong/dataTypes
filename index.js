var DataTypes = {};
var primitiveDataTypes = ["string", "number", "boolean", "null"
                , "undefined", "symbol", "object"];
//var primitiveWrapper = ["function", "array"];

primitiveDataTypes.map(function(datatype) {
  var functionName = "is" + datatype.charAt(0).toUpperCase() + datatype.slice(1);
  DataTypes[functionName] = function(obj) {
    return DataTypes.getPrimitiveDataType(obj)  === datatype;
  }
})

DataTypes.isArray = Array.isArray;

DataTypes.isFunction = function(func) {
  return typeof func === "function";
}

DataTypes.getPrimitiveDataType = function(obj) {
  if (obj === null) {
    return "null";
  }
  var result = typeof obj;
  if (primitiveDataTypes.indexOf(result) >= 0) {
    return result;
  }
  return "object";
}

module.exports = DataTypes;
