//               1.BANANA
// import fs from "fs";
// const text = fs.readFileSync("data.txt", "utf-8");
// console.log(text);
// const findtext = "bananas are for monkeys";
// const find = text.indexOf(findtext);
// if (find !== -1) {
//   console.log(`Phrase found at index: ${index}`);
// } else console.log("No");

import express from "express";

const app = express();
const PORT = 1000;
const users = [
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

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/users", (req, res) => {
  res.status(200).json(users);
});

app.post("/users", (req, res) => {
  const newUser = req.body;
  users.push(newUser);

  res.send("New user added!");
});

app.put("/users", (req, res) => {
  const updatedUser = req.body;

  users = users.map((user) =>
    user.id === updatedUser.id ? updatedUser : user
  );

  res.send("User updated successfully!");
});

app.delete("/users", () => {});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
