type PRODUCT_DATA = {
  id : string,
  title : string,
  handle? : string,
  alt? : string,
  images? : Array,
  variants? : Array
}

type DATA_TYPE = {
  title?: string,
  products? : Array<PRODUCT_DATA>
};

type SOCIAL_ACCOUNT = {
  type : string,
};

type SOCIAL_ACCOUNTS = {
  data: Array<SOCIAL_ACCOUNT>
};