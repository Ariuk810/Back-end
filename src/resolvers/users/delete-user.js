export const deleteUser = (req, res) => {
  const userId = req.params.id;

  const initialLength = users.length;
  users = users.filter((user) => user.id !== userId);

  if (users.length < initialLength) {
    res.send(`User with id ${userId} deleted successfully.`);
  } else {
    res.status(404).send("User not found.");
  }
};
