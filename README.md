# Hogwarts Houses App

Live Demo : [hogwarts-houses-app](https://hogwarts-houses-app-bdyn.vercel.app)

Backend API : [hogwarts-backend](https://hogwarts-backend-bq1b.onrender.com/houses)

Hogwarts Houses App is a full-stack web application that allows users to explore information about the four Hogwarts houses.
Users can search for houses by name (e.g `gry`, `huff`) and view details such as the founder, house colors and defining traits.
The backend serves houses data via a RESTful API including filtering logic based on query parameters.
Built with React/TailwindCSS on the frontend and Node.js/Express on the backend.

1. On _load_ the user is presented with an input field that can be used to type their query. Also, after a brief loading delay,
   all four house cards are fetched and displayed.

- Typing in the main input field will send a request to the server-side 1 second after the last keystroke.
- Typing in the house card's trait search input fields will filter that house's traits based on the input value.

2. When a request has been sent, the user is presented with a loading indicator until the response has arrived.
3. When the request arrives at the server-side, a filtering process based on the query begins, the outcome of which is returned as a response.
4. The react app receives the data and displays matching house cards.
5. If the main input is cleared , the full list of houses is fetched again.

## How to run locally

1. **Install all dependencies:**

- Node.js v22.15.0 or higher required

  ```bash
  npm run install:all
  ```

2. **Set up environment variables (in reality this is optional, there are default fallbacks):**

   ```bash
   # In the backend directory
   cp .env.example .env
   ```

   This will create a `.env` file with the necessary environment variables. Make sure to update any values if needed.

3. **Start both frontend and backend servers:**
   ```bash
   npm run start
   ```

The application will be available at:

- Frontend: [http://localhost:5173](http://localhost:5173)
- Backend: [http://localhost:3001](http://localhost:3001)

### Additional Commands

- **Clean up all node_modules:**
  ```bash
  npm run cleanup
  ```
  This will remove all `node_modules` directories from the root, backend, and frontend folders. Useful for doing a clean reinstall of dependencies.

## How to test

### Backend

Tests are written using `jest` and `supertest`.

To run backend tests:

```bash
cd backend && npm test
```

Test cover:

- Filtering logic
- Fallback behaviour
- Complete data retrieval
- API route responses

## Tech stack

### Frontend

- React v19
- Typescript
- Vite
- TailwindCSS

### Backend

- Node.js
- Express
- Jest

### Deployment

- Frontend: Vercel
- Backend: Render

## Optimization

- Refactored backend to separate routing (`houses.routes.js`) from business logic (`houses.functions.js`)
- Designed clean REST API with conditional response based on query parameters.
- Debounced input to reduce redundant API calls and improve performance during typing.
- Displayed loading indicators while waiting for server responses to enhance perceived responsiveness.
- Filtered traits locally within each house card without the need for another API call.
- Automatically reset and refetched data when the main input is cleared, improving usability.

## Future Work

- Use a database to handle large volumes of data efficiently (e.g. MongoDB)
- Infinite scroll or paginated display for large datasets.
- Make the app fully responsive for mobile and tablet devices.
- Add loading spinners dynamically for each house card returned by the API.
- Use animations for card rendering to improve user experience.
- Front end unit and integration testing.
- Improve error handling
- Set up logging for backend routes.
