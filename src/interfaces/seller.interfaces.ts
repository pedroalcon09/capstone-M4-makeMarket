export interface ISellerLogin {
  email: string;
  pasword: string;
}

export interface ISeller {
  id: string;
  name: string;
  email: string;
  pasword: string;
  totalSales: number;
  grade: number;
  created_at: Date;
  updated_at: Date;
}

export interface ISellerCreate {
  name: string;
  email: string;
  pasword: string;
}

export interface ISellerUpdate {
  name: string;
  email: string;
}
