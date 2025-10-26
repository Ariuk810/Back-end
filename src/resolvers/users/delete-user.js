import { userModel } from "../../model/user-model.js";

export const deleteUser = async (req, res) => {
  const deletedUser = req.body;

  await userModel.findByIdAndDelete(deletedUser.id);
  res.send("deleted user!!");
};
