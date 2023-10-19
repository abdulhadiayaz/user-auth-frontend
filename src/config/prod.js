module.exports = {
  domain: process.env.REACT_APP_SERVER_IP,
  version: process.env.REACT_APP_WEB_VERSION,
  platform: process.env.REACT_APP_PLATFORM,
  baseUrl: process.env.REACT_APP_BASE_URL,
  s3_access_key: process.env.REACT_APP_S3_TAZAH_KAROBAR_ACCESS_KEY,
  s3_secret_key: process.env.REACT_APP_S3_TAZAH_KAROBAR_SECRET_ACCESS_KEY,
  s3_bucket_name: process.env.REACT_APP_S3_TAZAH_KAROBAR_BUCKET_NAME,
  s3_dir_name_products:
    process.env.REACT_APP_S3_TAZAH_KAROBAR_DIR_NAME_PRODUCTS,
  s3_dir_name_order_invoices:
    process.env.REACT_APP_S3_TAZAH_KAROBAR_DIR_NAME_ORDER_INVOICES,
  s3_dir_name_order_proof_of_payments:
    process.env.REACT_APP_S3_TAZAH_KAROBAR_DIR_NAME_ORDER_PROOF_OF_PAYMENTS,
  s3_region: process.env.REACT_APP_S3_TAZAH_KAROBAR_REGION,
};
