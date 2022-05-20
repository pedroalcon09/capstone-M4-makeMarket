export interface IBuyerLogin {
  email: string;
  pasword: string;
}

export interface IBuyer {
  id: string;
  name: string;
  email: string;
  pasword: string;
  created_at: Date;
  updated_at: Date;
}

export interface IBuyerCreate {
  name: string;
  email: string;
  pasword: string;
}

export interface IBuyerUpdate {
  name?: string;
  email?: string;
  password?: string;
}
