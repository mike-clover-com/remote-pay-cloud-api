/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */


/**
* @constructor
* @memberof order
*/
var OrderExpansion = function() {
  this._class_ = OrderExpansion;
  this.id = undefined;
  this.hasCredit = false;
  this.hasCreditCardTransaction = false;
  this.hasCustomer = false;
  this.hasCustomerEmailAddress = false;
  this.hasCustomerAddress = false;
  this.hasCustomerPhone = false;
  this.hasDiscount = false;
  this.hasLineItemDiscount = false;
  this.hasServiceCharge = false;
  this.hasRefund = false;
  this.hasVoid = false;
};


/**
* Set the field value
* Unique identifier
*
* @memberof order.OrderExpansion
* @param {String} id 
*/
OrderExpansion.prototype.setId = function(id) {
  this.id = id;
};

/**
* Get the field value
* Unique identifier
* @memberof order.OrderExpansion
* @return {String} 
*/
OrderExpansion.prototype.getId = function() {
  return this.id;
};

/**
* Set the field value
* True if order has credit.
*
* @memberof order.OrderExpansion
* @param {Boolean} hasCredit 
*/
OrderExpansion.prototype.setHasCredit = function(hasCredit) {
  this.hasCredit = hasCredit;
};

/**
* Get the field value
* True if order has credit.
* @memberof order.OrderExpansion
* @return {Boolean} 
*/
OrderExpansion.prototype.getHasCredit = function() {
  return this.hasCredit;
};

/**
* Set the field value
* True if order has credit.
*
* @memberof order.OrderExpansion
* @param {Boolean} hasCreditCardTransaction 
*/
OrderExpansion.prototype.setHasCreditCardTransaction = function(hasCreditCardTransaction) {
  this.hasCreditCardTransaction = hasCreditCardTransaction;
};

/**
* Get the field value
* True if order has credit.
* @memberof order.OrderExpansion
* @return {Boolean} 
*/
OrderExpansion.prototype.getHasCreditCardTransaction = function() {
  return this.hasCreditCardTransaction;
};

/**
* Set the field value
* True if order has customer
*
* @memberof order.OrderExpansion
* @param {Boolean} hasCustomer 
*/
OrderExpansion.prototype.setHasCustomer = function(hasCustomer) {
  this.hasCustomer = hasCustomer;
};

/**
* Get the field value
* True if order has customer
* @memberof order.OrderExpansion
* @return {Boolean} 
*/
OrderExpansion.prototype.getHasCustomer = function() {
  return this.hasCustomer;
};

/**
* Set the field value
* True if customer has email address
*
* @memberof order.OrderExpansion
* @param {Boolean} hasCustomerEmailAddress 
*/
OrderExpansion.prototype.setHasCustomerEmailAddress = function(hasCustomerEmailAddress) {
  this.hasCustomerEmailAddress = hasCustomerEmailAddress;
};

/**
* Get the field value
* True if customer has email address
* @memberof order.OrderExpansion
* @return {Boolean} 
*/
OrderExpansion.prototype.getHasCustomerEmailAddress = function() {
  return this.hasCustomerEmailAddress;
};

/**
* Set the field value
* True if customer has address
*
* @memberof order.OrderExpansion
* @param {Boolean} hasCustomerAddress 
*/
OrderExpansion.prototype.setHasCustomerAddress = function(hasCustomerAddress) {
  this.hasCustomerAddress = hasCustomerAddress;
};

/**
* Get the field value
* True if customer has address
* @memberof order.OrderExpansion
* @return {Boolean} 
*/
OrderExpansion.prototype.getHasCustomerAddress = function() {
  return this.hasCustomerAddress;
};

/**
* Set the field value
* True if customer has phone
*
* @memberof order.OrderExpansion
* @param {Boolean} hasCustomerPhone 
*/
OrderExpansion.prototype.setHasCustomerPhone = function(hasCustomerPhone) {
  this.hasCustomerPhone = hasCustomerPhone;
};

/**
* Get the field value
* True if customer has phone
* @memberof order.OrderExpansion
* @return {Boolean} 
*/
OrderExpansion.prototype.getHasCustomerPhone = function() {
  return this.hasCustomerPhone;
};

/**
* Set the field value
* True if order has discount
*
* @memberof order.OrderExpansion
* @param {Boolean} hasDiscount 
*/
OrderExpansion.prototype.setHasDiscount = function(hasDiscount) {
  this.hasDiscount = hasDiscount;
};

/**
* Get the field value
* True if order has discount
* @memberof order.OrderExpansion
* @return {Boolean} 
*/
OrderExpansion.prototype.getHasDiscount = function() {
  return this.hasDiscount;
};

/**
* Set the field value
* True if order has line item discount
*
* @memberof order.OrderExpansion
* @param {Boolean} hasLineItemDiscount 
*/
OrderExpansion.prototype.setHasLineItemDiscount = function(hasLineItemDiscount) {
  this.hasLineItemDiscount = hasLineItemDiscount;
};

/**
* Get the field value
* True if order has line item discount
* @memberof order.OrderExpansion
* @return {Boolean} 
*/
OrderExpansion.prototype.getHasLineItemDiscount = function() {
  return this.hasLineItemDiscount;
};

/**
* Set the field value
* Check for order has service charge
*
* @memberof order.OrderExpansion
* @param {Boolean} hasServiceCharge 
*/
OrderExpansion.prototype.setHasServiceCharge = function(hasServiceCharge) {
  this.hasServiceCharge = hasServiceCharge;
};

/**
* Get the field value
* Check for order has service charge
* @memberof order.OrderExpansion
* @return {Boolean} 
*/
OrderExpansion.prototype.getHasServiceCharge = function() {
  return this.hasServiceCharge;
};

/**
* Set the field value
* True if order has a refund
*
* @memberof order.OrderExpansion
* @param {Boolean} hasRefund 
*/
OrderExpansion.prototype.setHasRefund = function(hasRefund) {
  this.hasRefund = hasRefund;
};

/**
* Get the field value
* True if order has a refund
* @memberof order.OrderExpansion
* @return {Boolean} 
*/
OrderExpansion.prototype.getHasRefund = function() {
  return this.hasRefund;
};

/**
* Set the field value
* True if order has void
*
* @memberof order.OrderExpansion
* @param {Boolean} hasVoid 
*/
OrderExpansion.prototype.setHasVoid = function(hasVoid) {
  this.hasVoid = hasVoid;
};

/**
* Get the field value
* True if order has void
* @memberof order.OrderExpansion
* @return {Boolean} 
*/
OrderExpansion.prototype.getHasVoid = function() {
  return this.hasVoid;
};

/**
* @memberof order.OrderExpansion
* @private
*/
OrderExpansion.prototype.getMetaInfo = function(fieldName) {
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

OrderExpansion.prototype.toString = function() {
  return JSON.stringify(this);
};

OrderExpansion._meta_ =  {fields:  {}};
OrderExpansion._meta_._class_ =  OrderExpansion;
OrderExpansion._meta_.fields["id"] = {};
OrderExpansion._meta_.fields["id"].type = String;
OrderExpansion._meta_.fields["hasCredit"] = {};
OrderExpansion._meta_.fields["hasCredit"].type = Boolean;
OrderExpansion._meta_.fields["hasCreditCardTransaction"] = {};
OrderExpansion._meta_.fields["hasCreditCardTransaction"].type = Boolean;
OrderExpansion._meta_.fields["hasCustomer"] = {};
OrderExpansion._meta_.fields["hasCustomer"].type = Boolean;
OrderExpansion._meta_.fields["hasCustomerEmailAddress"] = {};
OrderExpansion._meta_.fields["hasCustomerEmailAddress"].type = Boolean;
OrderExpansion._meta_.fields["hasCustomerAddress"] = {};
OrderExpansion._meta_.fields["hasCustomerAddress"].type = Boolean;
OrderExpansion._meta_.fields["hasCustomerPhone"] = {};
OrderExpansion._meta_.fields["hasCustomerPhone"].type = Boolean;
OrderExpansion._meta_.fields["hasDiscount"] = {};
OrderExpansion._meta_.fields["hasDiscount"].type = Boolean;
OrderExpansion._meta_.fields["hasLineItemDiscount"] = {};
OrderExpansion._meta_.fields["hasLineItemDiscount"].type = Boolean;
OrderExpansion._meta_.fields["hasServiceCharge"] = {};
OrderExpansion._meta_.fields["hasServiceCharge"].type = Boolean;
OrderExpansion._meta_.fields["hasRefund"] = {};
OrderExpansion._meta_.fields["hasRefund"].type = Boolean;
OrderExpansion._meta_.fields["hasVoid"] = {};
OrderExpansion._meta_.fields["hasVoid"].type = Boolean;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = OrderExpansion;
}
