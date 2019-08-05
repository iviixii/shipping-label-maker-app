export interface IShippingLabel {
  to?: IReceiver;
  from?: ISender;
  weight?: number;
  shippingOption?: number;
}

export interface ISender {
  name: string;
  street: string;
  city: string;
  state: string;
  zip: string;
}

export interface IReceiver {
  name: string;
  street: string;
  city: string;
  state: string;
  zip: string;
}