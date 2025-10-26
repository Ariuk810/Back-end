import { orderModel } from "../../model/order-model.js";

export const getOrder = async (req, res) => {
  const dbOrders = await orderModel.find();

  res.status(200).json(dbOrders);
};
