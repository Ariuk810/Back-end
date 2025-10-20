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

export const getUsers = async (req, res) => {
  const dbUsers = await userModel.find();
  console.log(dbUsers);

  res.status(200).json(users);
};
