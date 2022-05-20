export interface ISellerLogin {
  email: string;
  pasword: string;
}

export interface ISeller {
  id: string;
  name: string;
  email: string;
  password: string;
  totalSales: number;
  grade: number;
  created_at: Date;
  updated_at: Date;
}

export interface ISellerCreate {
  name: string;
  email: string;
  password: string;
}

export interface ISellerUpdate {
  name?: string;
  email?: string;
  password?: string;
}
