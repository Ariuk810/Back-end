import { userModel } from "../../model/user-model.js";

export const updateUser = async (req, res) => {
  const updatedUser = req.body;

  await userModel.findByIdAndUpdate(req.body.id, {
    name: updateUser.name,
    email: updateUser.email,
    phone: updateUser.phone,
  });
  res.send("User updated successfully!");
};
