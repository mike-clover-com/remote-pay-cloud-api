/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var customers_EmailAddress = require("../customers/EmailAddress");
var customers_PhoneNumber = require("../customers/PhoneNumber");
var customers_CustomerMetadata = require("../customers/CustomerMetadata");
var base_Reference = require("../base/Reference");
var customers_Address = require("../customers/Address");
var customers_Card = require("../customers/Card");

/**
* @constructor
* @memberof customers
*/
var Customer = function() {
  this._class_ = Customer;
  this.id = undefined;
  this.merchant = undefined;
  this.firstName = undefined;
  this.lastName = undefined;
  this.marketingAllowed = undefined;
  this.customerSince = undefined;
  this.orders = undefined;
  this.addresses = undefined;
  this.emailAddresses = undefined;
  this.phoneNumbers = undefined;
  this.cards = undefined;
  this.metadata = undefined;
};


/**
* Set the field value
* Unique identifier
*
* @memberof customers.Customer
* @param {String} id 
*/
Customer.prototype.setId = function(id) {
  this.id = id;
};

/**
* Get the field value
* Unique identifier
* @memberof customers.Customer
* @return {String} 
*/
Customer.prototype.getId = function() {
  return this.id;
};

/**
* Set the field value
* The merchant that is associated with this customer
*
* @memberof customers.Customer
* @param {base.Reference} merchant 
*/
Customer.prototype.setMerchant = function(merchant) {
  this.merchant = merchant;
};

/**
* Get the field value
* The merchant that is associated with this customer
* @memberof customers.Customer
* @return {base.Reference} 
*/
Customer.prototype.getMerchant = function() {
  return this.merchant;
};

/**
* Set the field value
* First/given name of the customer
*
* @memberof customers.Customer
* @param {Null|String} firstName 
*/
Customer.prototype.setFirstName = function(firstName) {
  this.firstName = firstName;
};

/**
* Get the field value
* First/given name of the customer
* @memberof customers.Customer
* @return {Null|String} 
*/
Customer.prototype.getFirstName = function() {
  return this.firstName;
};

/**
* Set the field value
* Last name/surname of the customer
*
* @memberof customers.Customer
* @param {Null|String} lastName 
*/
Customer.prototype.setLastName = function(lastName) {
  this.lastName = lastName;
};

/**
* Get the field value
* Last name/surname of the customer
* @memberof customers.Customer
* @return {Null|String} 
*/
Customer.prototype.getLastName = function() {
  return this.lastName;
};

/**
* Set the field value
* @memberof customers.Customer
* @param {Boolean} marketingAllowed 
*/
Customer.prototype.setMarketingAllowed = function(marketingAllowed) {
  this.marketingAllowed = marketingAllowed;
};

/**
* Get the field value
* @memberof customers.Customer
* @return {Boolean} 
*/
Customer.prototype.getMarketingAllowed = function() {
  return this.marketingAllowed;
};

/**
* Set the field value
* @memberof customers.Customer
* @param {Number} customerSince must be a long integer
*/
Customer.prototype.setCustomerSince = function(customerSince) {
  this.customerSince = customerSince;
};

/**
* Get the field value
* @memberof customers.Customer
* @return {Number} must be a long integer
*/
Customer.prototype.getCustomerSince = function() {
  return this.customerSince;
};

/**
* Set the field value
* @memberof customers.Customer
* @param {Array.<base.Reference>} orders An array of 
*/
Customer.prototype.setOrders = function(orders) {
  this.orders = orders;
};

/**
* Get the field value
* @memberof customers.Customer
* @return {Array.<base.Reference>} An array of 
*/
Customer.prototype.getOrders = function() {
  return this.orders;
};

/**
* Set the field value
* @memberof customers.Customer
* @param {Array.<customers.Address>} addresses An array of 
*/
Customer.prototype.setAddresses = function(addresses) {
  this.addresses = addresses;
};

/**
* Get the field value
* @memberof customers.Customer
* @return {Array.<customers.Address>} An array of 
*/
Customer.prototype.getAddresses = function() {
  return this.addresses;
};

/**
* Set the field value
* @memberof customers.Customer
* @param {Array.<customers.EmailAddress>} emailAddresses An array of 
*/
Customer.prototype.setEmailAddresses = function(emailAddresses) {
  this.emailAddresses = emailAddresses;
};

/**
* Get the field value
* @memberof customers.Customer
* @return {Array.<customers.EmailAddress>} An array of 
*/
Customer.prototype.getEmailAddresses = function() {
  return this.emailAddresses;
};

/**
* Set the field value
* @memberof customers.Customer
* @param {Array.<customers.PhoneNumber>} phoneNumbers An array of 
*/
Customer.prototype.setPhoneNumbers = function(phoneNumbers) {
  this.phoneNumbers = phoneNumbers;
};

/**
* Get the field value
* @memberof customers.Customer
* @return {Array.<customers.PhoneNumber>} An array of 
*/
Customer.prototype.getPhoneNumbers = function() {
  return this.phoneNumbers;
};

/**
* Set the field value
* @memberof customers.Customer
* @param {Array.<customers.Card>} cards An array of 
*/
Customer.prototype.setCards = function(cards) {
  this.cards = cards;
};

/**
* Get the field value
* @memberof customers.Customer
* @return {Array.<customers.Card>} An array of 
*/
Customer.prototype.getCards = function() {
  return this.cards;
};

/**
* Set the field value
* Additional information about the customer.
*
* @memberof customers.Customer
* @param {customers.CustomerMetadata} metadata 
*/
Customer.prototype.setMetadata = function(metadata) {
  this.metadata = metadata;
};

/**
* Get the field value
* Additional information about the customer.
* @memberof customers.Customer
* @return {customers.CustomerMetadata} 
*/
Customer.prototype.getMetadata = function() {
  return this.metadata;
};

/**
* @memberof customers.Customer
* @private
*/
Customer.prototype.getMetaInfo = function(fieldName) {
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

Customer.prototype.toString = function() {
  return JSON.stringify(this);
};

Customer._meta_ =  {fields:  {}};
Customer._meta_._class_ =  Customer;
Customer._meta_.fields["id"] = {};
Customer._meta_.fields["id"].type = String;
Customer._meta_.fields["merchant"] = {};
Customer._meta_.fields["merchant"].type = base_Reference;
Customer._meta_.fields["firstName"] = {};
Customer._meta_.fields["firstName"].type = String;
Customer._meta_.fields["lastName"] = {};
Customer._meta_.fields["lastName"].type = String;
Customer._meta_.fields["marketingAllowed"] = {};
Customer._meta_.fields["marketingAllowed"].type = Boolean;
Customer._meta_.fields["customerSince"] = {};
Customer._meta_.fields["customerSince"].type = Number;
Customer._meta_.fields["orders"] = {};
Customer._meta_.fields["orders"].type = Array;
Customer._meta_.fields["orders"].elementType = base_Reference;
Customer._meta_.fields["addresses"] = {};
Customer._meta_.fields["addresses"].type = Array;
Customer._meta_.fields["addresses"].elementType = customers_Address;
Customer._meta_.fields["emailAddresses"] = {};
Customer._meta_.fields["emailAddresses"].type = Array;
Customer._meta_.fields["emailAddresses"].elementType = customers_EmailAddress;
Customer._meta_.fields["phoneNumbers"] = {};
Customer._meta_.fields["phoneNumbers"].type = Array;
Customer._meta_.fields["phoneNumbers"].elementType = customers_PhoneNumber;
Customer._meta_.fields["cards"] = {};
Customer._meta_.fields["cards"].type = Array;
Customer._meta_.fields["cards"].elementType = customers_Card;
Customer._meta_.fields["metadata"] = {};
Customer._meta_.fields["metadata"].type = customers_CustomerMetadata;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = Customer;
}

