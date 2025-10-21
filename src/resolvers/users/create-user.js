import { userModel } from "../../model/user-model.js";

export const createUser = async (req, res) => {
  const newUser = req.body;
  console.log(newUser);

  await userModel.create({
    name: newUser.name,
    email: newUser.email,
    phone: newUser.phone,
  });
  res.status(200).json("success");
};
