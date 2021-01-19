/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */


/**
* @memberof remotemessage
* @enum {string}
*/
var Method = {
  ACK : "ACK",
  ACTIVITY_MESSAGE_FROM_ACTIVITY : "ACTIVITY_MESSAGE_FROM_ACTIVITY",
  ACTIVITY_MESSAGE_TO_ACTIVITY : "ACTIVITY_MESSAGE_TO_ACTIVITY",
  ACTIVITY_REQUEST : "ACTIVITY_REQUEST",
  EMPLOYEE_PERMISSIONS_REQUEST : "EMPLOYEE_PERMISSIONS_REQUEST",
  ACTIVITY_RESPONSE : "ACTIVITY_RESPONSE",
  BREAK : "BREAK",
  CAPTURE_PREAUTH : "CAPTURE_PREAUTH",
  CAPTURE_PREAUTH_RESPONSE : "CAPTURE_PREAUTH_RESPONSE",
  CARD_DATA : "CARD_DATA",
  CARD_DATA_RESPONSE : "CARD_DATA_RESPONSE",
  CASHBACK_SELECTED : "CASHBACK_SELECTED",
  CLEAR_SESSION : "CLEAR_SESSION",
  CLOSEOUT_REQUEST : "CLOSEOUT_REQUEST",
  CLOSEOUT_RESPONSE : "CLOSEOUT_RESPONSE",
  CLOVER_DEVICE_LOG_REQUEST : "CLOVER_DEVICE_LOG_REQUEST",
  CONFIGURATION_CHANGE : "CONFIGURATION_CHANGE",
  CONFIRM_PAYMENT_MESSAGE : "CONFIRM_PAYMENT_MESSAGE",
  CUSTOMER_INFO_MESSAGE : "CUSTOMER_INFO_MESSAGE",
  DISCOVERY_REQUEST : "DISCOVERY_REQUEST",
  DISCOVERY_RESPONSE : "DISCOVERY_RESPONSE",
  FINISH_CANCEL : "FINISH_CANCEL",
  FINISH_OK : "FINISH_OK",
  FORCECONNECT : "FORCECONNECT",
  GET_PRINTERS_REQUEST : "GET_PRINTERS_REQUEST",
  GET_PRINTERS_RESPONSE : "GET_PRINTERS_RESPONSE",
  INCREMENT_PREAUTH_REQUEST : "INCREMENT_PREAUTH_REQUEST",
  INCREMENT_PREAUTH_RESPONSE : "INCREMENT_PREAUTH_RESPONSE",
  INVALID_STATE_TRANSITION : "INVALID_STATE_TRANSITION",
  KEY_PRESS : "KEY_PRESS",
  LAST_MSG_REQUEST : "LAST_MSG_REQUEST",
  LAST_MSG_RESPONSE : "LAST_MSG_RESPONSE",
  LOG_MESSAGE : "LOG_MESSAGE",
  OPEN_CASH_DRAWER : "OPEN_CASH_DRAWER",
  ORDER_ACTION_ADD_DISCOUNT : "ORDER_ACTION_ADD_DISCOUNT",
  ORDER_ACTION_ADD_LINE_ITEM : "ORDER_ACTION_ADD_LINE_ITEM",
  ORDER_ACTION_REMOVE_DISCOUNT : "ORDER_ACTION_REMOVE_DISCOUNT",
  ORDER_ACTION_REMOVE_LINE_ITEM : "ORDER_ACTION_REMOVE_LINE_ITEM",
  ORDER_ACTION_RESPONSE : "ORDER_ACTION_RESPONSE",
  PAIRING_CODE : "PAIRING_CODE",
  PAIRING_REQUEST : "PAIRING_REQUEST",
  PAIRING_RESPONSE : "PAIRING_RESPONSE",
  PARTIAL_AUTH : "PARTIAL_AUTH",
  PAYMENT_CONFIRMED : "PAYMENT_CONFIRMED",
  PAYMENT_REJECTED : "PAYMENT_REJECTED",
  PAYMENT_VOIDED : "PAYMENT_VOIDED",
  PRINT_CREDIT : "PRINT_CREDIT",
  PRINT_CREDIT_DECLINE : "PRINT_CREDIT_DECLINE",
  PRINT_IMAGE : "PRINT_IMAGE",
  PRINT_JOB_STATUS_REQUEST : "PRINT_JOB_STATUS_REQUEST",
  PRINT_JOB_STATUS_RESPONSE : "PRINT_JOB_STATUS_RESPONSE",
  PRINT_PAYMENT : "PRINT_PAYMENT",
  PRINT_PAYMENT_DECLINE : "PRINT_PAYMENT_DECLINE",
  PRINT_PAYMENT_MERCHANT_COPY : "PRINT_PAYMENT_MERCHANT_COPY",
  PRINT_TEXT : "PRINT_TEXT",
  REFUND_PRINT_PAYMENT : "REFUND_PRINT_PAYMENT",
  REFUND_REQUEST : "REFUND_REQUEST",
  REFUND_RESPONSE : "REFUND_RESPONSE",
  REMOTE_ERROR : "REMOTE_ERROR",
  RESET : "RESET",
  RESET_DEVICE_RESPONSE : "RESET_DEVICE_RESPONSE",
  RETRIEVE_CUSTOM_ACTIVITIES_REQUEST : "RETRIEVE_CUSTOM_ACTIVITIES_REQUEST",
  RETRIEVE_CUSTOM_ACTIVITIES_RESPONSE : "RETRIEVE_CUSTOM_ACTIVITIES_RESPONSE",
  RETRIEVE_DEVICE_STATUS_REQUEST : "RETRIEVE_DEVICE_STATUS_REQUEST",
  RETRIEVE_DEVICE_STATUS_RESPONSE : "RETRIEVE_DEVICE_STATUS_RESPONSE",
  RETRIEVE_PAYMENT_REQUEST : "RETRIEVE_PAYMENT_REQUEST",
  RETRIEVE_PAYMENT_RESPONSE : "RETRIEVE_PAYMENT_RESPONSE",
  RETRIEVE_PENDING_PAYMENTS : "RETRIEVE_PENDING_PAYMENTS",
  RETRIEVE_PENDING_PAYMENTS_RESPONSE : "RETRIEVE_PENDING_PAYMENTS_RESPONSE",
  SET_ORDER : "SET_ORDER",
  SHOW_LOYALTY_POINTS_CALCULATED : "SHOW_LOYALTY_POINTS_CALCULATED",
  SHOW_LOYALTY_POINTS_EARNED_SCREEN : "SHOW_LOYALTY_POINTS_EARNED_SCREEN",
  SHOW_LOYALTY_POINTS_RECEIPT_PRINTED : "SHOW_LOYALTY_POINTS_RECEIPT_PRINTED",
  SHOW_ORDER_SCREEN : "SHOW_ORDER_SCREEN",
  SHOW_PAYMENT_RECEIPT_OPTIONS : "SHOW_PAYMENT_RECEIPT_OPTIONS",
  SHOW_THANK_YOU_SCREEN : "SHOW_THANK_YOU_SCREEN",
  SHOW_WELCOME_SCREEN : "SHOW_WELCOME_SCREEN",
  SHUTDOWN : "SHUTDOWN",
  SIGNATURE_VERIFIED : "SIGNATURE_VERIFIED",
  START_VAS : "START_VAS",
  STOP_VAS : "STOP_VAS",
  TERMINAL_MESSAGE : "TERMINAL_MESSAGE",
  TIP_ADDED : "TIP_ADDED",
  TIP_ADJUST : "TIP_ADJUST",
  TIP_ADJUST_RESPONSE : "TIP_ADJUST_RESPONSE",
  TX_START : "TX_START",
  TX_START_RESPONSE : "TX_START_RESPONSE",
  TX_STATE : "TX_STATE",
  UI_STATE : "UI_STATE",
  VAS_CONFIG : "VAS_CONFIG",
  VAS_CONFIG_CHANGED : "VAS_CONFIG_CHANGED",
  VAS_PAYLOAD_MESSAGE : "VAS_PAYLOAD_MESSAGE",
  VAS_STATE : "VAS_STATE",
  VAULT_CARD : "VAULT_CARD",
  VAULT_CARD_RESPONSE : "VAULT_CARD_RESPONSE",
  VERIFY_SIGNATURE : "VERIFY_SIGNATURE",
  VOID_PAYMENT : "VOID_PAYMENT",
  VOID_PAYMENT_RESPONSE : "VOID_PAYMENT_RESPONSE",
  VOID_PAYMENT_REFUND : "VOID_PAYMENT_REFUND",
  VOID_PAYMENT_REFUND_RESPONSE : "VOID_PAYMENT_REFUND_RESPONSE",
  VOID_CREDIT : "VOID_CREDIT",
  VOID_CREDIT_RESPONSE : "VOID_CREDIT_RESPONSE",
  REGISTER_FOR_CUST_DATA : "REGISTER_FOR_CUST_DATA",
  CUSTOMER_PROVIDED_DATA_MESSAGE : "CUSTOMER_PROVIDED_DATA_MESSAGE",
  LOYALTY_CONFIG : "LOYALTY_CONFIG",
  SHOW_RECEIPT_OPTIONS : "SHOW_RECEIPT_OPTIONS",
  SHOW_RECEIPT_OPTIONS_RESPONSE : "SHOW_RECEIPT_OPTIONS_RESPONSE",
  REQUEST_SIGNATURE : "REQUEST_SIGNATURE",
  REQUEST_SIGNATURE_RESPONSE : "REQUEST_SIGNATURE_RESPONSE",
  BALANCE_INQUIRY : "BALANCE_INQUIRY",
  BALANCE_INQUIRY_RESPONSE : "BALANCE_INQUIRY_RESPONSE",
  REQUEST_TIP : "REQUEST_TIP",
  REQUEST_TIP_RESPONSE : "REQUEST_TIP_RESPONSE",
  CARD_DETAILS : "CARD_DETAILS",
  CARD_DETAILS_RESPONSE : "CARD_DETAILS_RESPONSE"
};


//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = Method;
}

