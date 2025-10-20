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

export const createUser = (req, res) => {
  const newUser = req.body;
  users.push(newUser);

  res.send("New user added!");
};
