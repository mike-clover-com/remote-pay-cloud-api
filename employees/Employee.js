/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var employees_AccountRole = require("../employees/AccountRole");
var base_Reference = require("../base/Reference");

/**
* @constructor
* @memberof employees
*/
var Employee = function() {
  this._class_ = Employee;
  this.id = undefined;
  this.name = undefined;
  this.nickname = undefined;
  this.customId = undefined;
  this.email = undefined;
  this.inviteSent = undefined;
  this.claimedTime = undefined;
  this.deletedTime = undefined;
  this.pin = undefined;
  this.unhashedPin = undefined;
  this.role = undefined;
  this.roles = undefined;
  this.isOwner = undefined;
  this.shifts = undefined;
  this.payments = undefined;
  this.orders = undefined;
  this.employeeCards = undefined;
  this.merchant = undefined;
};


/**
* Set the field value
* Unique identifier
*
* @memberof employees.Employee
* @param {String} id 
*/
Employee.prototype.setId = function(id) {
  this.id = id;
};

/**
* Get the field value
* Unique identifier
* @memberof employees.Employee
* @return {String} 
*/
Employee.prototype.getId = function() {
  return this.id;
};

/**
* Set the field value
* Full name of the employee
*
* @memberof employees.Employee
* @param {Null|String} name 
*/
Employee.prototype.setName = function(name) {
  this.name = name;
};

/**
* Get the field value
* Full name of the employee
* @memberof employees.Employee
* @return {Null|String} 
*/
Employee.prototype.getName = function() {
  return this.name;
};

/**
* Set the field value
* Nickname of the employee (shows up on receipts)
*
* @memberof employees.Employee
* @param {Null|String} nickname 
*/
Employee.prototype.setNickname = function(nickname) {
  this.nickname = nickname;
};

/**
* Get the field value
* Nickname of the employee (shows up on receipts)
* @memberof employees.Employee
* @return {Null|String} 
*/
Employee.prototype.getNickname = function() {
  return this.nickname;
};

/**
* Set the field value
* Custom ID of the employee
*
* @memberof employees.Employee
* @param {Null|String} customId 
*/
Employee.prototype.setCustomId = function(customId) {
  this.customId = customId;
};

/**
* Get the field value
* Custom ID of the employee
* @memberof employees.Employee
* @return {Null|String} 
*/
Employee.prototype.getCustomId = function() {
  return this.customId;
};

/**
* Set the field value
* Email of the employee (optional)
*
* @memberof employees.Employee
* @param {Null|String} email 
*/
Employee.prototype.setEmail = function(email) {
  this.email = email;
};

/**
* Get the field value
* Email of the employee (optional)
* @memberof employees.Employee
* @return {Null|String} 
*/
Employee.prototype.getEmail = function() {
  return this.email;
};

/**
* Set the field value
* Returns true if this employee was sent an invite to activate their account
*
* @memberof employees.Employee
* @param {Null|Boolean} inviteSent 
*/
Employee.prototype.setInviteSent = function(inviteSent) {
  this.inviteSent = inviteSent;
};

/**
* Get the field value
* Returns true if this employee was sent an invite to activate their account
* @memberof employees.Employee
* @return {Null|Boolean} 
*/
Employee.prototype.getInviteSent = function() {
  return this.inviteSent;
};

/**
* Set the field value
* Timestamp of when this employee claimed their account
*
* @memberof employees.Employee
* @param {Null|Number} claimedTime must be a long integer
*/
Employee.prototype.setClaimedTime = function(claimedTime) {
  this.claimedTime = claimedTime;
};

/**
* Get the field value
* Timestamp of when this employee claimed their account
* @memberof employees.Employee
* @return {Null|Number} must be a long integer
*/
Employee.prototype.getClaimedTime = function() {
  return this.claimedTime;
};

/**
* Set the field value
* Timestamp of when this employee was deleted
*
* @memberof employees.Employee
* @param {Null|Number} deletedTime must be a long integer
*/
Employee.prototype.setDeletedTime = function(deletedTime) {
  this.deletedTime = deletedTime;
};

/**
* Get the field value
* Timestamp of when this employee was deleted
* @memberof employees.Employee
* @return {Null|Number} must be a long integer
*/
Employee.prototype.getDeletedTime = function() {
  return this.deletedTime;
};

/**
* Set the field value
* Employee PIN (hashed)
*
* @memberof employees.Employee
* @param {Null|String} pin 
*/
Employee.prototype.setPin = function(pin) {
  this.pin = pin;
};

/**
* Get the field value
* Employee PIN (hashed)
* @memberof employees.Employee
* @return {Null|String} 
*/
Employee.prototype.getPin = function() {
  return this.pin;
};

/**
* Set the field value
* Employee PIN
*
* @memberof employees.Employee
* @param {Null|String} unhashedPin 
*/
Employee.prototype.setUnhashedPin = function(unhashedPin) {
  this.unhashedPin = unhashedPin;
};

/**
* Get the field value
* Employee PIN
* @memberof employees.Employee
* @return {Null|String} 
*/
Employee.prototype.getUnhashedPin = function() {
  return this.unhashedPin;
};

/**
* Set the field value
* Employee System Role
*
* @memberof employees.Employee
* @param {Null|employees.AccountRole} role 
*/
Employee.prototype.setRole = function(role) {
  this.role = role;
};

/**
* Get the field value
* Employee System Role
* @memberof employees.Employee
* @return {Null|employees.AccountRole} 
*/
Employee.prototype.getRole = function() {
  return this.role;
};

/**
* Set the field value
* @memberof employees.Employee
* @param {Null|Array.<base.Reference>} roles An array of 
*/
Employee.prototype.setRoles = function(roles) {
  this.roles = roles;
};

/**
* Get the field value
* @memberof employees.Employee
* @return {Null|Array.<base.Reference>} An array of 
*/
Employee.prototype.getRoles = function() {
  return this.roles;
};

/**
* Set the field value
* Returns true if this employee is the owner account for this merchant
*
* @memberof employees.Employee
* @param {Null|Boolean} isOwner 
*/
Employee.prototype.setIsOwner = function(isOwner) {
  this.isOwner = isOwner;
};

/**
* Get the field value
* Returns true if this employee is the owner account for this merchant
* @memberof employees.Employee
* @return {Null|Boolean} 
*/
Employee.prototype.getIsOwner = function() {
  return this.isOwner;
};

/**
* Set the field value
* This employee's shifts
*
* @memberof employees.Employee
* @param {Null|Array.<base.Reference>} shifts An array of 
*/
Employee.prototype.setShifts = function(shifts) {
  this.shifts = shifts;
};

/**
* Get the field value
* This employee's shifts
* @memberof employees.Employee
* @return {Null|Array.<base.Reference>} An array of 
*/
Employee.prototype.getShifts = function() {
  return this.shifts;
};

/**
* Set the field value
* This employee's payments
*
* @memberof employees.Employee
* @param {Null|Array.<base.Reference>} payments An array of 
*/
Employee.prototype.setPayments = function(payments) {
  this.payments = payments;
};

/**
* Get the field value
* This employee's payments
* @memberof employees.Employee
* @return {Null|Array.<base.Reference>} An array of 
*/
Employee.prototype.getPayments = function() {
  return this.payments;
};

/**
* Set the field value
* This employee's orders
*
* @memberof employees.Employee
* @param {Null|Array.<base.Reference>} orders An array of 
*/
Employee.prototype.setOrders = function(orders) {
  this.orders = orders;
};

/**
* Get the field value
* This employee's orders
* @memberof employees.Employee
* @return {Null|Array.<base.Reference>} An array of 
*/
Employee.prototype.getOrders = function() {
  return this.orders;
};

/**
* Set the field value
* This employee's employee cards
*
* @memberof employees.Employee
* @param {Null|Array.<base.Reference>} employeeCards An array of 
*/
Employee.prototype.setEmployeeCards = function(employeeCards) {
  this.employeeCards = employeeCards;
};

/**
* Get the field value
* This employee's employee cards
* @memberof employees.Employee
* @return {Null|Array.<base.Reference>} An array of 
*/
Employee.prototype.getEmployeeCards = function() {
  return this.employeeCards;
};

/**
* Set the field value
* The merchant employing this employee
*
* @memberof employees.Employee
* @param {Null|base.Reference} merchant 
*/
Employee.prototype.setMerchant = function(merchant) {
  this.merchant = merchant;
};

/**
* Get the field value
* The merchant employing this employee
* @memberof employees.Employee
* @return {Null|base.Reference} 
*/
Employee.prototype.getMerchant = function() {
  return this.merchant;
};

/**
* @memberof employees.Employee
* @private
*/
Employee.prototype.getMetaInfo = function(fieldName) {
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

Employee.prototype.toString = function() {
  return JSON.stringify(this);
};

Employee._meta_ =  {fields:  {}};
Employee._meta_._class_ =  Employee;
Employee._meta_.fields["id"] = {};
Employee._meta_.fields["id"].type = String;
Employee._meta_.fields["name"] = {};
Employee._meta_.fields["name"].type = String;
Employee._meta_.fields["nickname"] = {};
Employee._meta_.fields["nickname"].type = String;
Employee._meta_.fields["customId"] = {};
Employee._meta_.fields["customId"].type = String;
Employee._meta_.fields["email"] = {};
Employee._meta_.fields["email"].type = String;
Employee._meta_.fields["inviteSent"] = {};
Employee._meta_.fields["inviteSent"].type = Boolean;
Employee._meta_.fields["claimedTime"] = {};
Employee._meta_.fields["claimedTime"].type = Number;
Employee._meta_.fields["deletedTime"] = {};
Employee._meta_.fields["deletedTime"].type = Number;
Employee._meta_.fields["pin"] = {};
Employee._meta_.fields["pin"].type = String;
Employee._meta_.fields["unhashedPin"] = {};
Employee._meta_.fields["unhashedPin"].type = String;
Employee._meta_.fields["role"] = {};
Employee._meta_.fields["role"].type = employees_AccountRole;
Employee._meta_.fields["roles"] = {};
Employee._meta_.fields["roles"].type = Array;
Employee._meta_.fields["roles"].elementType = base_Reference;
Employee._meta_.fields["isOwner"] = {};
Employee._meta_.fields["isOwner"].type = Boolean;
Employee._meta_.fields["shifts"] = {};
Employee._meta_.fields["shifts"].type = Array;
Employee._meta_.fields["shifts"].elementType = base_Reference;
Employee._meta_.fields["payments"] = {};
Employee._meta_.fields["payments"].type = Array;
Employee._meta_.fields["payments"].elementType = base_Reference;
Employee._meta_.fields["orders"] = {};
Employee._meta_.fields["orders"].type = Array;
Employee._meta_.fields["orders"].elementType = base_Reference;
Employee._meta_.fields["employeeCards"] = {};
Employee._meta_.fields["employeeCards"].type = Array;
Employee._meta_.fields["employeeCards"].elementType = base_Reference;
Employee._meta_.fields["merchant"] = {};
Employee._meta_.fields["merchant"].type = base_Reference;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = Employee;
}

