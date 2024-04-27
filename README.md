# Bank of Flatiron
## This is a simple bank of flatiron app
### **By Whitney Shisia**
#### description
    React application that displays a
    list of your recent bank transactions, among other features.
##### Setup/Installation Requirements
    - Download zip in the code section of github to your desired folder
    - Extract the files
    - Open the folder with vs code.

    After unbundling the project:

1. Run `npm install` in your terminal.
2. Run `npm run server`. This will run your backend on port `8001`.
3. In a new terminal, run `npm start`. This will run your React app on port `8000`.

Make sure to open browser to verify that your backend is working before you proceed!

The app uses [Semantic UI](https://semantic-ui.com/) for styling. If you see any
unfamiliar classNames on some components, don't sweat! That's coming from
Semantic UI and you shouldn't need to touch it.

If you are unfamiliar with HTML tables, take a look at the
[docs with an example here](https://www.w3schools.com/html/html_tables.asp)

## Endpoints

The base URL for your backend is: `http://localhost:8001`

##  Deliverables

As a user, I should be able to:

- See a table of the transactions.
- Fill out and submit the form to add a new transaction. This should add the new
  transaction to the table **as well as post the new transaction to the backend
  API for persistence**.
- Filter transactions by typing into the search bar. Only transactions with a
  description matching the search term should be shown in the transactions
  table.

### Endpoints for Core Deliverables

#### GET /transactions

Example Response:

```json
[
  {
    "id": 1,
    "date": "2019-12-01",
    "description": "Paycheck from Bob's Burgers",
    "category": "Income",
    "amount": 1000
  },
  {
    "id": 2,
    "date": "2019-12-01",
    "description": "South by Southwest Quinoa Bowl at Fresh & Co",
    "category": "Food",
    "amount": -10.55
  }
]
```

#### POST `/transactions`

Required Headers:

```js
{
  "Content-Type": "application/json"
}
```

Request Object:

```json
{
  "date": "string",
  "description": "string",
  "category": "string",
  "amount": number
}
```

Example Response:

```json
{
  "id": 1,
  "date": "2019-12-01",
  "description": "Paycheck from Bob's Burgers",
  "category": "Income",
  "amount": 1000
}
```

## Advanced Deliverables

These deliverables are not required to pass the code challenge, but if you have
the extra time, or even after the code challenge, they are a great way to
stretch your skills.

> Note: If you are going to attempt these advanced deliverables, please be sure
> to have a working commit with all the Core Deliverables first!

As a user, I should be able to:

- Sort transactions alphabetically by category or description.
- Delete a transaction which will remove it from the table and delete it from the backend.

### Endpoints for Advanced Deliverables

#### DELETE /transactions/:id

Example Response:

```json
{}
```
       
## Live link
Deployed Frontend can be accessed here (https://whitshisia.github.io/phase-1/)
Deployed Backend can be accessed here [APP](https://phase-1-2.onrender.com/res/)


## Known Bugs
    The application works perfectly well, no bugs.

## Technologies used
    - JS
    - react

## Support and contact details
    - email :: shisiawhitney215@gmail.com
    - phone :: +254705719325

### License
*Licenced under the MIT Licence
Copyright (c) 2024 **Whitney Shisia