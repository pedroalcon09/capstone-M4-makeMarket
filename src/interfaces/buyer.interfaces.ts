export interface buyerLogin {
  email: string;
  pasword: string;
}

export interface IBuyer {
  id: string;
  name: string;
  email: string;
  password: string;
  created_at: Date;
  updated_at: Date;
}

export interface IBuyerCreate {
  name: string;
  email: string;
  password: string;
}

export interface IBuyerUpdate {
  name?: string;
  email?: string;
  password?: string;
}

export interface IBuyerUpdate {
  name?: string;
  email?: string;
  password?: string;
}
