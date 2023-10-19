import axios from "axios";

export const testApi = () => {
  return axios.get(`/api/test`);
};

export const getUser = () => {
  return axios.get(`/api/users/`);
};

//User login API
export const loginReq = (body) => {
  return axios.post(`/api/users/oemLogin`, body);
};

export const forgotPasswordrReq = (username) => {
  return axios.get(`/api/users/forgotPassword?username=${username}`);
};

export const confirmPasswordrReq = (body) => {
  return axios.post(`/api/users/confirmPassword`, body);
};

// Product Screen APIs
export const addProductReq = (userId, subCompanyId, product) => {
  return axios.post(
    `/api/users/${userId}/subCompanies/${subCompanyId}/products/create`,
    product
  );
};

export const getProductsReq = (userId, params) => {
  return axios.get(`/api/users/${userId}/products`, {
    params,
  });
};

export const changeStatusProductReq = (
  userId,
  subCompanyId,
  productId,
  body
) => {
  return axios.put(
    `/api/users/${userId}/subCompanies/${subCompanyId}/products/${productId}/changeStatus`,
    body
  );
};

export const getCategoriesReq = (userId, subCompanyId) => {
  return axios.get(
    `/api/users/${userId}/subCompanies/${subCompanyId}/categories`
  );
};
export const getSubCategoryReq = (userId, subCompanyId, categoryId) => {
  return axios.get(
    `/api/users/${userId}/subCompanies/${subCompanyId}/categories/${categoryId}/subCategories`
  );
};

export const getCompanyProductTypesReq = (userId, companyId) => {
  return axios.get(`/api/users/${userId}/companies/${companyId}/productTypes`);
};

export const getCropsReq = () => {
  return axios.get(`/api/crops`);
};

export const getUnitReq = () => {
  return axios.get(`/api/units`);
};

export const getSubCompaniesReq = (userId) => {
  return axios.get(`/api/users/${userId}/subCompanies`);
};

export const getProductDetailsReq = (userId, productId) => {
  return axios.get(`/api/users/${userId}/products/${productId}/oem`);
};

export const putProductReq = (userId, subCompanyId, productId, body) => {
  return axios.put(
    `/api/users/${userId}/subCompanies/${subCompanyId}/products/${productId}`,
    body
  );
};

//Variants APIs
export const getVariantsReq = (userId, productId, search) => {
  return axios.get(
    `/api/users/${userId}/products/${productId}/productVariants?search=${search}`
  );
};

export const addVariantReq = (userId, subCompanyId, productId, variant) => {
  return axios.post(
    `/api/users/${userId}/subCompanies/${subCompanyId}/products/${productId}/productVariants/create`,
    variant
  );
};
export const changeStatusProductVariantReq = (
  userId,
  subCompanyId,
  productId,
  productVariantId,
  body
) => {
  return axios.put(
    `/api/users/${userId}/subCompanies/${subCompanyId}/products/${productId}/productVariants/${productVariantId}/changeStatus`,
    body
  );
};

export const getVariantDetailsReq = (userId, productId, variantId) => {
  return axios.get(
    `/api/users/${userId}/products/${productId}/productVariants/${variantId}`
  );
};

export const editVariantReq = (
  userId,
  subCompanyId,
  productId,
  variantId,
  body
) => {
  return axios.put(
    `/api/users/${userId}/subCompanies/${subCompanyId}/products/${productId}/productVariants/${variantId}`,
    body
  );
};

//Pricing API's
export const getAllVariantsReq = (userId, params, filterBody) => {
  return axios.post(`/api/users/${userId}/productVariants/all`, filterBody, {
    params,
  });
};

//put pricing API
export const updatePricingReq = (
  userId,
  subCompanyId,
  productId,
  productVariantId,
  payload
) => {
  return axios.put(
    `/api/users/${userId}/subCompanies/${subCompanyId}/products/${productId}/productVariants/${productVariantId}/pricing`,
    payload
  );
};

//Dealer Directory API's
export const addDealerDirectoryReq = (userId, subCompanyId, dealer) => {
  return axios.post(
    `/api/users/${userId}/subCompanies/${subCompanyId}/dealerDirectories/create`,
    dealer
  );
};

export const getSubCompanyPlansReq = (userId, subCompanyId) => {
  return axios.get(`/api/users/${userId}/subCompanies/${subCompanyId}/plans`);
};

export const getAllDealerDirectoriesReq = (userId, params) => {
  return axios.post(`/api/users/${userId}/dealerDirectories`, "", { params });
};

export const getDirectoryDealerDetailsReq = (userId, dealerDirectoryId) => {
  return axios.get(
    `/api/users/${userId}/dealerDirectories/${dealerDirectoryId}`
  );
};

export const editDirectoryDealerReq = (
  userId,
  subCompanyId,
  dealerDirectoryId,
  body
) => {
  return axios.put(
    `/api/users/${userId}/subCompanies/${subCompanyId}/dealerDirectories/${dealerDirectoryId}`,
    body
  );
};

//Dealer Requests API's
export const getDealerRequestsReq = (userId, params) => {
  return axios.get(`/api/users/${userId}/dealerRequests`, {
    params,
  });
};

export const getDealerRequestDetailsReq = (userId, dealerRequestId) => {
  return axios.get(`/api/users/${userId}/dealerRequests/${dealerRequestId}`);
};

export const getMappedDealerDirectoriesReq = (
  userId,
  dealerRequestId,
  params,
  body
) => {
  return axios.post(
    `/api/users/${userId}/dealerRequests/${dealerRequestId}/dealerDirectories`,
    body,
    {
      params,
    }
  );
};

export const getAllDealersReq = (userId, params) => {
  return axios.get(`/api/users/${userId}/dealers`, {
    params,
  });
};

// Status update API
export const updateDealerRequestStausReq = (
  userId,
  subCompanyId,
  dealerRequestId,
  body
) => {
  return axios.put(
    `/api/users/${userId}/subCompanies/${subCompanyId}/dealerRequests/${dealerRequestId}/changeStatus`,
    body
  );
};

//Dashboard API
export const getDashboardStatsReq = (userId) => {
  return axios.get(`/api/users/${userId}/dashboard`);
};
// Order API's
export const getAllOrdersReq = (userId, params, body) => {
  return axios.post(`/api/users/${userId}/orders`, body, { params });
};

export const getOrderDetailsReq = (userId, orderId) => {
  return axios.get(`/api/users/${userId}/orders/${orderId}`);
};

export const updateOrderStatusReq = (
  userId,
  subCompanyId,
  orderId,
  payload
) => {
  return axios.put(
    `/api/users/${userId}/subCompanies/${subCompanyId}/orders/${orderId}`,
    payload
  );
};

export const getDealerDetailsReq = (userId, dealerId) => {
  return axios.get(`/api/users/${userId}/dealers/${dealerId}/oem`);
};
export const changeStatusDealerReq = (userId, subCompanyId, dealerId, body) => {
  return axios.put(
    `/api/users/${userId}/subCompanies/${subCompanyId}/dealers/${dealerId}/changeStatus`,
    body
  );
};
export const getOrderStatusReasonReq = (params) => {
  return axios.get(`/api/orderReasons`, {
    params,
  });
};
export const getDealerOrdersReq = (userId, dealerId) => {
  return axios.get(`/api/users/${userId}/dealers/${dealerId}/orders`);
};

export const deleteOrderInvoiceReq = (
  userId,
  subCompanyId,
  orderId,
  invoiceId
) => {
  return axios.delete(
    `/api/users/${userId}/subCompanies/${subCompanyId}/orders/${orderId}/invoices/${invoiceId}`
  );
};
export const getOrderLogsReq = (userId, subCompanyId, orderId) => {
  return axios.get(
    `/api/users/${userId}/subCompanies/${subCompanyId}/orders/${orderId}/logs`
  );
};

// Packages APIs
export const getPackageVariantsReq = (userId, subCompanyId, location) => {
  return axios.get(
    `/api/users/${userId}/subCompanies/${subCompanyId}/productVariants/packageVariants?location=${location}`
  );
};

export const addPackageReq = (userId, subCompanyId, body) => {
  return axios.post(
    `/api/users/${userId}/subCompanies/${subCompanyId}/packages`,
    body
  );
};

export const getAllPackagesReq = (userId, params) => {
  return axios.get(`/api/users/${userId}/packages/oem`, {
    params,
  });
};

export const updatePackageStatusReq = (
  userId,
  subCompanyId,
  packageId,
  status
) => {
  return axios.put(
    `api/users/${userId}/subCompanies/${subCompanyId}/packages/${packageId}/changeStatus`,
    status
  );
};

export const getPackageDetailsReq = (userId, packageId) => {
  return axios.get(`/api/users/${userId}/packages/${packageId}/oem`);
};

// Bulk Discount API
export const AddBulkDiscountReq = (userId, subCompanyId, body) => {
  return axios.post(
    `/api/users/${userId}/subCompanies/${subCompanyId}/bulkDiscounts`,
    body
  );
};

export const getBulkDiscountVariantsReq = (userId, subCompanyId, validity) => {
  return axios.post(
    `/api/users/${userId}/subCompanies/${subCompanyId}/productVariants/bulkDiscountVariants`,
    validity
  );
};

export const getAllBulkDiscountsReq = (userId, params) => {
  return axios.get(`/api/users/${userId}/bulkDiscounts`, {
    params,
  });
};

export const updateBulkDiscountStatusReq = (
  userId,
  subCompanyId,
  bulkDiscountId,
  status
) => {
  return axios.put(
    `api/users/${userId}/subCompanies/${subCompanyId}/bulkDiscounts/${bulkDiscountId}/changeStatus`,
    status
  );
};

export const getBulkDiscountDetailsReq = (userId, bulkDiscountId) => {
  return axios.get(`/api/users/${userId}/bulkDiscounts/${bulkDiscountId}`);
};

export const archiveBulkVariantReq = (
  userId,
  subCompanyId,
  bulkDiscountId,
  productVariantBulkDiscountsId
) => {
  return axios.put(
    `api/users/${userId}/subCompanies/${subCompanyId}/bulkDiscounts/${bulkDiscountId}/productVariantBulkDiscounts/${productVariantBulkDiscountsId}/archive`
  );
};

// Rate Card APIs
export const getRateCardVariantsReq = (userId, subCompanyId, body) => {
  return axios.post(
    `/api/users/${userId}/subCompanies/${subCompanyId}/productVariants/rateCardVariants`,
    body
  );
};

export const AddSaleRateCardReq = (userId, subCompanyId, body) => {
  return axios.post(
    `/api/users/${userId}/subCompanies/${subCompanyId}/saleCards`,
    body
  );
};

export const AddPolicyRateCardReq = (userId, subCompanyId, body) => {
  return axios.post(
    `/api/users/${userId}/subCompanies/${subCompanyId}/plans`,
    body
  );
};

export const getPolicyRateCardsReq = (
  userId,
  pageNumber,
  pageLimit,
  searchTerm
) => {
  return axios.get(
    `/api/users/${userId}/plans/all?pageLimit=${pageLimit}&pageNumber=${pageNumber}&search=${searchTerm}`
  );
};
export const getSaleCardsReq = (userId, pageNumber, pageLimit, searchTerm) => {
  return axios.get(
    `/api/users/${userId}/saleCards?pageLimit=${pageLimit}&pageNumber=${pageNumber}&search=${searchTerm}`
  );
};

export const changePolicyCardStatus = (userId, planId, subCompanyId, body) => {
  return axios.put(
    `api/users/${userId}/subCompanies/${subCompanyId}/plans/${planId}/changeStatus`,
    body
  );
};

export const changeSaleCardStatus = (
  userId,
  subCompanyId,
  saleCardId,
  body
) => {
  return axios.put(
    `api/users/${userId}/subCompanies/${subCompanyId}/saleCards/${saleCardId}/changeStatus`,
    body
  );
};

export const getOneSaleCardsReq = (userId, saleCardId) => {
  return axios.get(`/api/users/${userId}/saleCards/${saleCardId}`);
};

export const getOnePolicyCardsReq = (userId, policyId) => {
  return axios.get(`/api/users/${userId}/plans/${policyId}`);
};

export const archiveSaleCardVariantReq = (
  userId,
  subCompanyId,
  saleCardId,
  productVariantSaleCardId
) => {
  return axios.put(
    `api/users/${userId}/subCompanies/${subCompanyId}/saleCards/${saleCardId}/productVariantSaleCards/${productVariantSaleCardId}/archive`
  );
};

// Notifications
export const getNotificationsCount = (userId) => {
  return axios.get(`/api/users/${userId}/notifications/count`);
};

export const getAllNotifications = (userId, type, filter) => {
  return axios.post(
    `/api/users/${userId}/notifications/all?type=${type}`,
    filter
  );
};

export const readNotification = (userId, subCompanyId, notificationId) => {
  return axios.put(
    `/api/users/${userId}/subCompanies/${subCompanyId}/notifications/${notificationId}`
  );
};

//Sales Officers
export const getAllSalesOfficers = (userId, params) => {
  return axios.get(`/api/users/${userId}/sales/oem`, {
    params,
  });
};

export const addSalesOfficerReq = (userId, body) => {
  return axios.post(`/api/users/${userId}/sales/create/oem`, body);
};

export const getSalesDealersReq = (userId, body) => {
  return axios.post(`/api/users/${userId}/dealers/salesDealers/oem`, body);
};

export const getSalesOfficerDetailsReq = (userId, salesId, subCompanyId) => {
  return axios.get(
    `/api/users/${userId}/subCompanies/${subCompanyId}/sales/${salesId}/oem`
  );
};

export const getSalesOfficerDealersDetailsReq = (
  userId,
  salesId,
  subCompanyId
) => {
  return axios.get(
    `/api/users/${userId}/subCompanies/${subCompanyId}/sales/${salesId}/dealers/oem`
  );
};

export const updateSalesDealerStatusReq = (
  userId,
  salesUserId,
  subCompanyId,
  dealerId,
  body
) => {
  return axios.put(
    `/api/users/${userId}/subCompanies/${subCompanyId}/sales/${salesUserId}/dealers/${dealerId}/changeStatus/oem`,
    body
  );
};

export const updateSalesDealersReq = (
  userId,
  subCompanyId,
  salesUserId,
  body
) => {
  return axios.put(
    `/api/users/${userId}/subCompanies/${subCompanyId}/sales/${salesUserId}/dealers/add`,
    body
  );
};

//Price List
export const getPriceListReq = (userId, subCompanyId) => {
  return axios.get(
    `/api/users/${userId}/subCompanies/${subCompanyId}/productVariants/priceListVariants`
  );
};
export const createPriceListReq = (userId, subCompanyId, priceList) => {
  return axios.post(
    `/api/users/${userId}/subCompanies/${subCompanyId}/priceLists`,
    priceList
  );
};
export const getAllPriceListsReq = (userId, params) => {
  return axios.get(`/api/users/${userId}/priceLists`, {
    params,
  });
};

export const getOnePriceListReq = (userId, priceListId) => {
  return axios.get(`/api/users/${userId}/priceLists/${priceListId}`);
};

// Policy Cards
export const getPriceListsForAddScreenReq = (userId, subCompanyId, body) => {
  return axios.post(
    `/api/users/${userId}/subCompanies/${subCompanyId}/priceLists/policyPriceLists`,
    body
  );
};

export const createPolicyCardReq = (userId, subCompanyId, policyCard) => {
  return axios.post(
    `/api/users/${userId}/subCompanies/${subCompanyId}/subCompanyPolicies`,
    policyCard
  );
};

export const getAllPolicyCardsReq = (userId, params) => {
  return axios.get(`/api/users/${userId}/subCompanyPolicies`, { params });
};

export const getAllPolicyCardDetailsReq = (userId, policyCardId) => {
  return axios.get(
    `/api/users/${userId}/subCompanyPolicies/${policyCardId}/oem`
  );
};

export const getDealerDirectoriesToAssignReq = (
  userId,
  subCompanyId,
  policyCardId
) => {
  return axios.get(
    `/api/users/${userId}/subCompanies/${subCompanyId}/subCompanyPolicies/${policyCardId}/dealerDirectories/list/oem`
  );
};

export const addDealerDirectoriesToPolicyReq = (
  userId,
  subCompanyId,
  policyCardId,
  dealers
) => {
  return axios.post(
    `/api/users/${userId}/subCompanies/${subCompanyId}/subCompanyPolicies/${policyCardId}/dealerDirectories/assign/oem`,
    dealers
  );
};

// Incentives
export const creatIncentiveReq = (userId, subCompanyId, incentive) => {
  return axios.post(
    `/api/users/${userId}/subCompanies/${subCompanyId}/incentives`,
    incentive
  );
};

export const getAllIncentivesReq = (userId, subCompanyId, validity) => {
  return axios.post(
    `/api/users/${userId}/subCompanies/${subCompanyId}/incentives/all`,
    validity
  );
};

// Dealer Tags
export const getDealerDirectoriesToAttachtoTagsReq = (userId, subCompanyId) => {
  return axios.get(
    `/api/users/${userId}/subCompanies/${subCompanyId}/dealerDirectories/all`
  );
};

export const addDealerTagReq = (userId, subCompanyId, body) => {
  return axios.post(
    `/api/users/${userId}/subCompanies/${subCompanyId}/subCompanyTags`,
    body
  );
};

export const getTagsToAttachtoPolicyReq = (
  userId,
  subCompanyId,
  subCompanyPolicyId
) => {
  return axios.get(
    `/api/users/${userId}/subCompanies/${subCompanyId}/subCompanyPolicies/${subCompanyPolicyId}/subCompanyTags/list`
  );
};

export const attachDealerTagsReq = (
  userId,
  subCompanyId,
  subCompanyPolicyId,
  tags
) => {
  return axios.post(
    `/api/users/${userId}/subCompanies/${subCompanyId}/subCompanyPolicies/${subCompanyPolicyId}/subCompanyTags/assign`,
    tags
  );
};

export const getAllSubCompanyTags = (userId, params) => {
  return axios.get(`/api/users/${userId}/subCompanyTags`, { params });
};
