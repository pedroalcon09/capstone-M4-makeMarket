export interface IBuys {
  id: string;
  buyer_id: string;
  product_id: string;
  created_at: Date;
  status: string;
  grade: number;
  feedback: string;
}

export interface IBuysCreate {
  buyer_id: string;
  product_id: string;
}

export interface IBuysPay {
  grade: number;
  feedback: string;
}
