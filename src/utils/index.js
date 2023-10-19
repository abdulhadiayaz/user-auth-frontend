import { ORDER_STATUSES } from "../constants";
import { ON_CHANGE_STATUS_OPTIONS } from "../screens/Orders/Orders.constants";
import Resizer from "react-image-file-resizer";

// Status change handler for order detail screen
export const orderOptionsHandler = (orderType, status) => {
  let options = [];
  if (
    status === ORDER_STATUSES.pending ||
    status === ORDER_STATUSES.verifyingPayment
  ) {
    options = ON_CHANGE_STATUS_OPTIONS.PENDING_VERIFYING_PAYMENT;
  } else if (status === ORDER_STATUSES.onHold) {
    options = ON_CHANGE_STATUS_OPTIONS.ON_HOLD;
  } else if (status === ORDER_STATUSES.awaitingApproval) {
    options = ON_CHANGE_STATUS_OPTIONS.AWAITING_APPROVAL;
  } else if (status === ORDER_STATUSES.approved) {
    options = ON_CHANGE_STATUS_OPTIONS.APPROVED;
  } else if (status === ORDER_STATUSES.shipped) {
    options = ON_CHANGE_STATUS_OPTIONS.SHIPPED;
  } else if (status === ORDER_STATUSES.delivered) {
    options = [];
  } else if (status === ORDER_STATUSES.cancelled) {
    options = [];
  }
  return options;
};

export const handleFileRename = (fileList) => {
  return new File(
    [fileList[0]],
    fileList[0].name
      .substring(0, fileList[0].name.lastIndexOf("."))
      .replace(/\s+/g, "") +
      "_" +
      Date.now() +
      fileList[0].name.substring(fileList[0].name.lastIndexOf(".")),
    { type: fileList[0].type }
  );
};

export const handleMultipleFileRename = (file) => {
  return new File(
    [file],
    file.name.substring(0, file.name.lastIndexOf(".")).replace(/\s+/g, "") +
      "_" +
      Date.now() +
      file.name.substring(file.name.lastIndexOf(".")),
    { type: file.type }
  );
};

export const structurePrice = (number) => {
  return number.toLocaleString("en-PK", {
    style: "currency",
    currency: "PKR",
    maximumFractionDigits: 0,
  });
};

export const resizeImage = (
  file,
  maxWidth,
  maxHeight,
  compressFormat,
  quality,
  rotation,
  outputType
) =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      maxWidth,
      maxHeight,
      compressFormat,
      quality,
      rotation,
      (uri) => {
        resolve(uri);
      },
      outputType
    );
  });

export const removeObjectWithId = (arr, id) => {
  const objWithIdIndex = arr.findIndex((obj) => obj.id === id);
  arr.splice(objWithIdIndex, 1);

  return arr;
};

export const removeObjectWithIndex = (arr, index) => {
  arr.splice(index, 1);

  return arr;
};

export const calculateDiscountedPrice = (price, discount) => {
  return price - Number(discount / 100) * Number(price);
};
