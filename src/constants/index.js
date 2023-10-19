import AllInboxIcon from "@mui/icons-material/AllInbox";
import MarkChatUnreadIcon from "@mui/icons-material/MarkChatUnread";

export const ACTIVE_INACTIVE_STATUS_DROPDOWN_OPTIONS = ["Active", "Inactive"];
export const ACTIVE_INACTIVE_STATUS_DROPDOWN_OPTIONS_OBJ = {
  active: "Active",
  inactive: "Inactive",
};
export const ARCHIVED_STATUS_DROPDOWN_OPTIONS = [false, true];
export const PROVINCES = ["Punjab", "KPK", "Sindh", "Balochistan"];
export const DEALER_REQUEST_STATUS_OPTIONS = {
  pending: "Pending",
  approved: "Approved",
  rejected: "Rejected",
};
export const DEALER_TYPES = ["Cash", "Policy"];

export const ORDER_STATUS_DROPDOWN_OPTIONS = [
  { name: "Pending", colorClass: "pending" },
  { name: "Verifying Payment", colorClass: "verifying-payment" },
  { name: "Awaiting Approval", colorClass: "awaiting-approval" },
  { name: "On Hold", colorClass: "onhold" },
  { name: "Approved", colorClass: "approved" },
  { name: "Cancelled", colorClass: "cancelled" },
  { name: "Shipped", colorClass: "shipped" },
  { name: "Delivered", colorClass: "delivered" },
];
export const ORDER_STATUSES = {
  pending: "Pending",
  verifyingPayment: "Verifying Payment",
  awaitingApproval: "Awaiting Approval",
  onHold: "On Hold",
  approved: "Approved",
  cancelled: "Cancelled",
  shipped: "Shipped",
  delivered: "Delivered",
};
export const DEALER_STATUS_DROPDOWN_OPTIONS = ["Active", "Inactive"];
export const DATE_FORMAT = "DD/MM/YYYY";
export const DATE_FORMAT_YYYY_MM_DD = "YYYY-MM-DD";
export const HOUR_24_FORMAT = "HH:mm";
export const HOUR_12_FORMAT = "hh:mm a";
export const REGEX_NUMERIC = /[^0-9]/gi;
export const REGEX_TEXT_ONLY = /[^a-zA-Z ]/gi;
export const REGEX_OPEN_FIELD = /(.*?)/;
export const REGEX_ALPHA_NUMERIC = /[^A-Za-z0-9]/gi;
export const REGEX_ALPHA_NUMERIC_WITH_SPACES = /[^A-Za-z0-9 ]/gi;
export const REGEX_DECIMAL_TWO_PLACES = /^(\d*\.{0,1}\d{0,2}$)/;
export const REGEX_ANYTHING_BUT_SPACES = /[\s]/gi;
export const REGEX_EMAIL =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const REGEX_NUMBERS_1_TO_100 = /\b(0*(?:[1-9][0-9]?|100))\b/g;
export const REGEX_NUMBERS_0_TO_100 = /\b(0*(?:[0-9][0-9]?|100))\b/g;

export const PRODUCT_CATEGORY_TYPES = {
  fertilizer: "Fertilizer",
  pesticide: "Pesticide",
  seed: "Seed",
};

export const ORDER_TYPES_OBJ = { cash: "Cash", plan: "Policy" };

export const ORDER_FILTER_STATUSES = [
  "On Hold",
  "Pending",
  "Verifying Payment",
  "Awaiting Approval",
  "Approved",
  "Cancelled",
  "Shipped",
  "Delivered",
];

export const PROOF_OF_PAYMENT_ATTACHMENT = ["Attached", "Not Attached"];

export const PRICE_TYPES = {
  mrp: "Invoice Price",
  grossPrice: "Net Price",
  advanceBookingPrice: "After Discount Price (Policy)",
  salePrice: "Special Net Price",
};

export const RATE_CARD_TYPES = ["Sale", "Policy"];
export const RATE_CARD_TYPES_OBJ = { sale: "Sale", policy: "Policy" };

export const NOTIFICATION_ACTIVITY_TYPES = {
  orderPlaced: "Order Placed",
  proofOfPayment: "Proof of Payment",
  dealerRequest: "Dealer Request",
};

export const NOTIFICATION_ACTIVITY_TYPES_COLOR_CLASSES = [
  { name: "Order Placed", colorClass: "orange" },
  { name: "Proof of Payment", colorClass: "green" },
  { name: "Dealer Request", colorClass: "blue" },
];

export const NOTIFICATION_TABS = [
  { tabKey: "all", tabTitle: "All", tabIcon: <AllInboxIcon /> },
  { tabKey: "unread", tabTitle: "Unread", tabIcon: <MarkChatUnreadIcon /> },
];

export const NOTIFICATION_FILTER = [
  "Proof of Payment",
  "Dealer Request",
  "Order Placed",
];

export const GREEN_SWITCH_COLOR = "#67B004";

export const POLICY_MOP = ["Cash", "Advance", "Credit"];

export const REWARD_TYPES = ["Pre Sale", "During Sale", "Post Sale"];
export const INCENTIVE_TYPES = ["Transacted", "Collected", "Quantitative"];
export const DISCOUNT_TYPE = ["Percentage", "Absolute"];
export const DISCOUNT_TYPE_OBJ = {
  percentage: "Percentage",
  absolute: "Absolute",
};

export const INCENTIVE_TYPES_OBJ = {
  transacted: {
    name: "Transacted",
    discountTypes: [
      { label: "Percentage", value: "Percentage" },
      { label: "Absolute", value: "Absolute" },
    ],
  },
  collected: {
    name: "Collected",
    discountTypes: [
      { label: "Percentage", value: "Percentage" },
      { label: "Absolute", value: "Absolute" },
    ],
  },
  quantitative: {
    name: "Quantitative",
    discountTypes: [{ label: "Percentage", value: "Percentage" }],
  },
};

export const REWARD_TYPES_CONDITIONS = (
  rewardType,
  incentiveType,
  incentiveDiscountType
) => {
  switch (rewardType) {
    case "Pre Sale": {
      switch (incentiveType) {
        case "Transacted":
          return true;
        case "Collected": {
          switch (incentiveDiscountType) {
            case "Percentage":
              return true;
            case "Absolute":
              return false;
            default:
              return true;
          }
        }
        case "Quantitative":
          return true;
        default:
          return true;
      }
    }
    case "During Sale":
      switch (incentiveType) {
        case "Transacted":
          return true;
        case "Collected": {
          switch (incentiveDiscountType) {
            case "Percentage":
              return false;
            case "Absolute":
              return true;
            default:
              return true;
          }
        }
        case "Quantitative": {
          switch (incentiveDiscountType) {
            case "Percentage":
              return false;
            case "Absolute":
              return true;
            default:
              return true;
          }
        }
        default:
          return true;
      }
    case "Post Sale":
      switch (incentiveType) {
        case "Transacted": {
          switch (incentiveDiscountType) {
            case "Percentage":
              return false;
            case "Absolute":
              return false;
            default:
              return true;
          }
        }
        case "Collected": {
          switch (incentiveDiscountType) {
            case "Percentage":
              return false;
            case "Absolute":
              return false;
            default:
              return true;
          }
        }
        case "Quantitative": {
          switch (incentiveDiscountType) {
            case "Percentage":
              return false;
            case "Absolute":
              return true;
            default:
              return true;
          }
        }
        default:
          return true;
      }
    default:
      return true;
  }
};

export const MOP_TYPES_OBJ = {
  cash: {
    name: "Cash",
    incentiveType: [
      { label: "Transacted", value: "Transacted" },
      { label: "Quantitative", value: "Quantitative" },
    ],
  },
  advance: {
    name: "Advance",
    incentiveType: [
      { label: "Collected", value: "Collected" },
      { label: "Transacted", value: "Transacted" },
    ],
  },
  credit: {
    name: "Credit",
    incentiveType: [
      { label: "Transacted", value: "Transacted" },
      { label: "Quantitative", value: "Quantitative" },
    ],
  },
};

export const USER_ROLES = {
  oemAdmin: "OEM Admin",
  dealer: "Dealer",
  sales: "Sales",
};
