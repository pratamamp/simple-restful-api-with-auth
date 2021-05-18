# <h1 align="center">Auth API testing</h1>


## Installation

use [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server.

```sh
yarn
```

Add .env file contain
PORT, DB_CONNECTION & SECRET_KEY



after that, run the server
```sh
yarn dev
```



## BaseURL

local dev :
```sh
localhost:3300
```
## 

demo url:
```sh
https://restful-api-node-mongo.herokuapp.com/
```

#### End Point
public access
```sh
Method                  URL
-------------------------------------------------------------
GET                     /
```

private access
```sh
Method                  URL
------------------------------------------------------------
GET                     /employee
POST                    /employee
PUT                     /employee
DELETE                  /employee
```

auth
```sh
Method                  URL
-----------------------------------------------------------
POST                    /register
POST                    /login
```

