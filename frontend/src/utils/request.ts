// /* eslint-disable require-await */
// import { injectBearer } from 'brainless-token-manager';
// import { extend } from 'umi-request';
// import { redirect } from 'react-router-dom';

// const REQ_TIMEOUT = 25 * 1000;

// export const PREFIX_API = import.meta.env.VITE_APP_API_URL;

// const requestApi = async (suffixUrl: string, params?: any , method = 'get') => {
//   const token: string = 'abc';
//   // injectBearer(token, configs)
//   const requestExtend = extend({
//     method,
//     params,
//     prefix: PREFIX_API,
//     timeout: REQ_TIMEOUT,
//     errorHandler: (error) => {
//       throw error?.data || error?.response;
//     },
//   });
  
//   return requestExtend(suffixUrl);
// };

// export { requestApi };
