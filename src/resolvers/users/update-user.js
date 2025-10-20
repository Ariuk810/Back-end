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

export const updateUser = (req, res) => {
  const updatedUser = req.body;

  users = users.map((user) =>
    user.id === updatedUser.id ? updatedUser : user
  );

  res.send("User updated successfully!");
};
