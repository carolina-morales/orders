import { AXIOS_ORDERS } from "../../utils/constants";
import { OrdersPayload } from "./interfaces";

export const getOrders = async (): Promise<OrdersPayload> => {
  try {
    const resp = await AXIOS_ORDERS.get('/orders');
    return resp.data;
  } catch (error) {
    throw error;
  }
}