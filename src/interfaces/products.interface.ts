export interface IProducts {
  id: string;
  seller_id: string;
  name: string;
  price: number;
  description: string;
  stock: number;
  url_img: string;
  category_id: string;
  created_at: Date;
  updated_at: Date;
}

export interface IProductsCreate {
  name: string;
  price: number;
  description: string;
  stock: number;
  url_img: string;
  category_id: string;
  seller_id: string;
}

export interface IProductsCreateReq {
  name: string;
  price: number;
  description: string;
  stock: number;
  url_img: string;
  category_id: string;
}

export interface IProductsCreate {
  name: string;
  price: number;
  description: string;
  stock: number;
  url_img: string;
  category_id: string;
}

export interface IProductsUpdate {
  name?: string;
  price?: number;
  description?: string;
  stock?: number;
  url_img?: string;
  category_id?: string;
}
