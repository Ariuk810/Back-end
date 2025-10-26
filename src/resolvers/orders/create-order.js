import { orderModel } from "../../model/order-model.js";

export const createOrder = async (req, res) => {
  const newOrder = req.body;

  await orderModel.create({
    totalPrice: newOrder.totalPrice,
  });

  res.status(200).json("success");
};
