# Simple ts JWT

Simple Example of how to use JSON Web Tokens in TypeScript, using the 'azion/jwt' library.

### Usage:

Install dependencies:

```bash

npm install

# If you are testing locally => run 'npm run compile && npm link' in lib and then link the example.
# npm link azion@1.3.0

```

Run the build command:

```bash

npx edge-functions@latest build --preset typescript --mode compute

```

Run the dev command:

```bash

npx edge-functions@latest dev

```

If everything goes as expected, the application runs successfully.

To access a public route execute the command:

```bash
curl -X GET http://localhost:3333/public
```

To generate a token execute the command:

```bash
curl -X POST http://localhost:3333/login \
     -H "Content-Type: application/json" \
     -d '{"user": "user1@test.com", "password": "My_Pass*"}'
```

The answer will be like:

```json
{"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c2VyMUB0ZXN0LmNvbSIsInJvbGUiOiJhZG1pbiIsImV4cCI6MTcyMDgwMTQ5OX0.ZN0T7VjxUD7rGT4QUTE0P-Id8mZH0tjAhqweScycOHE"}
```

To access a protected route execute the command:

```bash
curl -X GET http://localhost:3333/protected \
     -H "Authorization: Bearer <TOKEN>"
```

The answer will be like:

```json
{"jwt":{"header":{"alg":"HS256","typ":"JWT"},"payload":{"sub":"user1@test.com","role":"admin","exp":1720801499}},"message":"Protected route."}
```
