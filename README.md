Sure! Here's the README structured in a more concise, straightforward manner for your project:

---

# Fullstack Development Internship - Backend Task

- **Name:** Kuldeep Patel
- **Email:** patelkuldip1308@gmail.com
- **Phone No:** 6352688586

## Technologies Used
- **Backend:**
  - Node.js
  - Express
  - MongoDB (using Mongoose)
  - TypeScript
- **Frontend:**
  - ReactJS
  - HTML
  - Tailwind CSS
- **APIs:**
  - Axios
- **Deployment:**
  - Vercel (for the backend)

## API Endpoints

### 1. Search Book by Name
- **Method:** POST
- **API:** [Search by Name](https://backend-alpha-rosy-41.vercel.app/api/books/searchByName)
- **Description:** Search for a book by its name.
- **Request Body:**
  ```json
  {
    "bookName": "The name of the book you want to search"
  }
  ```

### 2. Get Books by Rent Price Range
- **Method:** POST
- **API:** [Search by Rent](https://backend-alpha-rosy-41.vercel.app/api/books/searchByRent)
- **Description:** Retrieve a list of books within a specified rent price range.
- **Request Body:**
  ```json
  {
    "minRent": "Minimum rent price",
    "maxRent": "Maximum rent price"
  }
  ```

### 3. Get Books by Category, Name, and Rent per Day
- **Method:** POST
- **API:** [Search by Category, Name, and Rent](https://backend-alpha-rosy-41.vercel.app/api/books/searchByCategoryNameRent)
- **Description:** Retrieve a list of books matching the specified category, book name, and rent price.
- **Request Body:**
  ```json
  {
    "bookName": "The name of the book",
    "category": "Category of the book",
    "rentPerDay": "Rent price per day"
  }
  ```

### 4. Book Issue API
- **Method:** POST
- **API:** [Book Issue](https://backend-alpha-rosy-41.vercel.app/api/transactions/bookissue)
- **Description:** Issue a book to a user and store the transaction details.
- **Request Body:**
  ```json
  {
    "bookName": "The name of the book",
    "userName": "The name of the user issuing the book",
    "issueDate": "The date of issue"
  }
  ```

### 5. Book Return API
- **Method:** POST
- **API:** [Book Return](https://backend-alpha-rosy-41.vercel.app/api/transactions/return)
- **Description:** Return a book to a user and update the transaction details.
- **Request Body:**
  ```json
  {
    "bookName": "The name of the book",
    "userName": "The name of the user returning the book",
    "returnDate": "The date of return"
  }
  ```

### 6. Get Book History and Status
- **Method:** POST
- **API:** [Book History](https://backend-alpha-rosy-41.vercel.app/api/transactions/bookhistory)
- **Description:** Retrieve a list of users who have issued a specific book in the past, and the current status of the book.
- **Request Body:**
  ```json
  {
    "bookName": "The name of the book"
  }
  ```

### 7. Get User History
- **Method:** POST
- **API:** [User History](https://backend-alpha-rosy-41.vercel.app/api/transactions/userhistory)
- **Description:** Retrieve a list of books issued to a specific user.
- **Request Body:**
  ```json
  {
    "userName": "The name of the user"
  }
  ```

### 8. Get Book History in Date Range
- **Method:** POST
- **API:** [Date Range History](https://backend-alpha-rosy-41.vercel.app/api/transactions/date-range)
- **Description:** Retrieve a list of books issued within a specific date range.
- **Request Body:**
  ```json
  {
    "startDate": "Start date",
    "endDate": "End date"
  }
  ```

---

Feel free to add any additional information or modify sections as needed!
