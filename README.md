# Express JS Practice

**Setup**

- **Install dependencies:** `npm install`

**Run (local)**

- **Start with nodemon (dev):** `npm run devStart`
- **Start directly:** `node server.js`

Run these in PowerShell from the project root:

```powershell
npm install
npm run devStart
# or
node server.js
```

**Available routes (examples)**

- **GET /** — renders `views/index.ejs`
- **GET /users** — returns `User List`
- **GET /users/new** — returns `New User`
- **POST /users** — placeholder route for creating a user
- **GET /users/:id** — returns a user by id (also supports PUT and DELETE)
- **GET /posts** — returns `Post List`
- **GET /posts/new** — returns `New Post`

**Quick verification (PowerShell)**

```powershell
curl http://localhost:3000/
curl http://localhost:3000/users
Invoke-RestMethod http://localhost:3000/posts
```

**Notes / gotchas**

- The app listens on port `3000` by default (`server.js`).
- `views/index.ejs` currently uses `<%= locals.text12312 %>` but `server.js` renders with `{ text: "World" }` — this will print `undefined` in the view. Fix by either changing the view to `<%= text %>` or updating the render call to `res.render('index', { text12312: 'World' })`.
- `nodemon` runs via the `devStart` script and is a devDependency — ensure dev dependencies are installed (`npm install`).
