export let users = [
  {
    id: "1",
    username: "John",
    phone: "99009900",
  },
  {
    id: "2",
    username: "Bob",
    phone: "99112233",
  },
  {
    id: "3",
    username: "Jordan",
    phone: "99114455",
  },
];

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
