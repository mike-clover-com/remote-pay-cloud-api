/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var base_Points = require("../base/Points");

/**
* @constructor
* @memberof base
*/
var Signature = function() {
  this._class_ = Signature;
  this.strokes = undefined;
  this.width = undefined;
  this.height = undefined;
};


/**
* Set the field value
* A series of strokes representing a signature
*
* @memberof base.Signature
* @param {Array.<base.Points>} strokes An array of 
*/
Signature.prototype.setStrokes = function(strokes) {
  this.strokes = strokes;
};

/**
* Get the field value
* A series of strokes representing a signature
* @memberof base.Signature
* @return {Array.<base.Points>} An array of 
*/
Signature.prototype.getStrokes = function() {
  return this.strokes;
};

/**
* Set the field value
* The pixel width of the signature
*
* @memberof base.Signature
* @param {Number} width must be an integer
*/
Signature.prototype.setWidth = function(width) {
  this.width = width;
};

/**
* Get the field value
* The pixel width of the signature
* @memberof base.Signature
* @return {Number} must be an integer
*/
Signature.prototype.getWidth = function() {
  return this.width;
};

/**
* Set the field value
* The pixel height of the signature
*
* @memberof base.Signature
* @param {Number} height must be an integer
*/
Signature.prototype.setHeight = function(height) {
  this.height = height;
};

/**
* Get the field value
* The pixel height of the signature
* @memberof base.Signature
* @return {Number} must be an integer
*/
Signature.prototype.getHeight = function() {
  return this.height;
};

/**
* @memberof base.Signature
* @private
*/
Signature.prototype.getMetaInfo = function(fieldName) {
  var curclass = this._class_;
  do {
    var fieldMetaInfo = curclass._meta_.fields[fieldName];
    if(fieldMetaInfo) {
      return fieldMetaInfo;
    }
    if(curclass._meta_._superMeta_) {
      curclass = curclass._meta_._superMeta_._class_;
    } else {
      curclass = null;
    }
  } while(curclass);
  return null;
};

Signature.prototype.toString = function() {
  return JSON.stringify(this);
};

Signature._meta_ =  {fields:  {}};
Signature._meta_._class_ =  Signature;
Signature._meta_.fields["strokes"] = {};
Signature._meta_.fields["strokes"].type = Array;
Signature._meta_.fields["strokes"].elementType = base_Points;
Signature._meta_.fields["width"] = {};
Signature._meta_.fields["width"].type = Number;
Signature._meta_.fields["height"] = {};
Signature._meta_.fields["height"].type = Number;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = Signature;
}

