export interface OrdersPayload {
  success: boolean;
  orders: Order[];
  page: Page;
}

export interface Order {
  id: string;
  number: string;
  marketPlaceId: null;
  groupId: null;
  name: string;
  email: null;
  fulfillmentStatus: Status;
  currency: string;
  totals: Totals;
  taxesIncluded: string;
  taxLines: any[];
  units: Units;
  status: Status;
  locationId: null;
  reference: null;
  tags: string[];
  payment: Payment;
  customer: Customer;
  refunds: any[];
  billingAddress: IngAddress;
  shippingMethod: null;
  shippingLabel: null;
  shippingAddress: IngAddress;
  items: Partial<ItemProduct>[];
  packages: any[];
  meta: null;
  dates: Dates;
  cancelReason: null;
  note: null;
  locations: any[];
  checkoutId: null;
  partialFulfillment: null;
}

export interface IngAddress {
  id: null;
  firstName: string;
  lastName: string;
  dni: null;
  address1: string;
  address2: null;
  address3: null;
  country: Country;
  state: Country;
  city: string;
  postalCode: string;
  phone: string;
  email: null;
  company: string;
  references: null;
}

export interface Country {
  code: Code;
  name: Name;
  codeIso2: null;
  codeIso3: null;
}

export enum Code {
  CA = "CA",
  On = "ON",
}

export enum Name {
  Canada = "Canada",
  Ontario = "Ontario",
}

export interface Customer {
}

export interface Dates {
  deliveredAt: null;
  canceledAt: null;
  closedAt: null;
  createdAt: string;
  updatedAt: string;
  paidAt: string;
}

export interface Status {
  id: null;
  status: null | string;
  ecartapi: Ecartapi;
  ecartapiId: string;
  partiallAvailable?: string;
  financial?: Ecartapi;
}

export enum Ecartapi {
  Paid = "paid",
  Unfulfilled = "unfulfilled",
}

export interface ItemProduct {
  id: string;
  variantId: null | string;
  productId: null | string;
  offerId: null;
  sku: null | string;
  fulfillment: Fulfillment;
  name: string;
  upc: null;
  requiresShipping: string;
  quantity: string;
  currentQuantity: null;
  price: string;
  discount: string;
  associatedItems: any[];
  bundled: string;
  tax: null;
  taxable: string;
  weight: null | string;
  vendor: null | string;
  imageUrl: null;
  ecartapiUrl: string;
}

export interface Fulfillment {
  quantity: string;
  service: string;
  status: null;
}

export interface Payment {
  method: null;
  status: Ecartapi;
}

export interface Totals {
  subtotal: string;
  total: string;
  tax: string;
  discount: string;
  weight: string;
  shipping: string;
}

export interface Units {
  weight: string;
}

export interface Page {
  next: null;
  previous: null;
}