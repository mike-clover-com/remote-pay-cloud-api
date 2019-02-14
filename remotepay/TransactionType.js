/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */


/**
* @memberof remotepay
* @enum {string}
*/
TransactionType = {
  PAYMENT : "PAYMENT",
  CREDIT : "CREDIT",
  AUTH : "AUTH",
  DATA : "DATA",
  BALANCE_INQUIRY : "BALANCE_INQUIRY",
  PAYMENT_REVERSAL : "PAYMENT_REVERSAL",
  PAYMENT_ADJUSTMENT : "PAYMENT_ADJUSTMENT",
  CREDIT_REVERSAL : "CREDIT_REVERSAL",
  REFUND_ADJUSTMENT : "REFUND_ADJUSTMENT",
  CASH_ADVANCE : "CASH_ADVANCE",
  CAPTURE_PREAUTH : "CAPTURE_PREAUTH",
  VAS_DATA : "VAS_DATA"
};


//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = TransactionType;
}

