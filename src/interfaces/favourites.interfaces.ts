export interface IFavourites {
  id: string;
  buyer_id: string;
  product_id: string;
}

export interface IFavouritesCreate {
  buyer_id: string;
  product_id: string;
}
