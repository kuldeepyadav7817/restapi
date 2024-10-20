const express = require("express");
const app = express();
const users = require("./MOCK_DATA.json");
const port = 3000;

app.get("/api/users", (req, res) => {
  res.send(users);
});

app.get("/users", (req, res) => {
  res.send(
    users
      .map((user) => {
        return `
            <ul>
              <li>ID: ${user.id}</li>
              <li>Email: ${user.email}</li>
              <li>First Name: ${user.first_name}</li>
              <li>Last Name: ${user.last_name}</li>
              <li>Gender: ${user.gender}</li>
            </ul>
            <hr />
          `;
      })
      .join("")
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
