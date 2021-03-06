/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var base_Reference = require("../base/Reference");

/**
* @constructor
* @memberof inventory
*/
var Discount = function() {
  this._class_ = Discount;
  this.id = undefined;
  this.merchantRef = undefined;
  this.name = undefined;
  this.amount = undefined;
  this.percentage = undefined;
};


/**
* Set the field value
* Unique identifier
*
* @memberof inventory.Discount
* @param {String} id 
*/
Discount.prototype.setId = function(id) {
  this.id = id;
};

/**
* Get the field value
* Unique identifier
* @memberof inventory.Discount
* @return {String} 
*/
Discount.prototype.getId = function() {
  return this.id;
};

/**
* Set the field value
* @memberof inventory.Discount
* @param {base.Reference} merchantRef 
*/
Discount.prototype.setMerchantRef = function(merchantRef) {
  this.merchantRef = merchantRef;
};

/**
* Get the field value
* @memberof inventory.Discount
* @return {base.Reference} 
*/
Discount.prototype.getMerchantRef = function() {
  return this.merchantRef;
};

/**
* Set the field value
* Name of the discount
*
* @memberof inventory.Discount
* @param {String} name 
*/
Discount.prototype.setName = function(name) {
  this.name = name;
};

/**
* Get the field value
* Name of the discount
* @memberof inventory.Discount
* @return {String} 
*/
Discount.prototype.getName = function() {
  return this.name;
};

/**
* Set the field value
* Discount amount in fraction of currency unit (e.g. cents) based on currency fraction digits supported
*
* @memberof inventory.Discount
* @param {Null|Number} amount must be a long integer
*/
Discount.prototype.setAmount = function(amount) {
  this.amount = amount;
};

/**
* Get the field value
* Discount amount in fraction of currency unit (e.g. cents) based on currency fraction digits supported
* @memberof inventory.Discount
* @return {Null|Number} must be a long integer
*/
Discount.prototype.getAmount = function() {
  return this.amount;
};

/**
* Set the field value
* Discount amount in percent
*
* @memberof inventory.Discount
* @param {Null|Number} percentage must be a long integer
*/
Discount.prototype.setPercentage = function(percentage) {
  this.percentage = percentage;
};

/**
* Get the field value
* Discount amount in percent
* @memberof inventory.Discount
* @return {Null|Number} must be a long integer
*/
Discount.prototype.getPercentage = function() {
  return this.percentage;
};

/**
* @memberof inventory.Discount
* @private
*/
Discount.prototype.getMetaInfo = function(fieldName) {
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

Discount.prototype.toString = function() {
  return JSON.stringify(this);
};

Discount._meta_ =  {fields:  {}};
Discount._meta_._class_ =  Discount;
Discount._meta_.fields["id"] = {};
Discount._meta_.fields["id"].type = String;
Discount._meta_.fields["merchantRef"] = {};
Discount._meta_.fields["merchantRef"].type = base_Reference;
Discount._meta_.fields["name"] = {};
Discount._meta_.fields["name"].type = String;
Discount._meta_.fields["amount"] = {};
Discount._meta_.fields["amount"].type = Number;
Discount._meta_.fields["percentage"] = {};
Discount._meta_.fields["percentage"].type = Number;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = Discount;
}

