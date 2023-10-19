const errorResponseHandler = (error) => {
  return Promise.reject(error);
};

export default errorResponseHandler;
