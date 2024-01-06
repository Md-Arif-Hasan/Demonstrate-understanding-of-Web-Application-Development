# Demonstrate understanding of Web Application Development

# REST API for Posts using Node.js and Express.js

This project implements a simple RESTful API for managing posts using Node.js and Express.js. It provides endpoints to fetch all posts, fetch a post by ID, create a new post, edit an existing post, and delete a post.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Post Model](#post-model)

## Technologies Used

Built with JavaScript, Node.js, and Express.js for the backend. Utilizes Sequelize as the ORM, MySQL as the database, and Postman for API testing.


## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Md-Arif-Hasan/Kontinentalist_backend/
    cd Kontinentalist_backend
    ```

2. **Install dependencies using npm:**

    ```bash
    npm install
    ```

3. **Configure the database settings:**

    - Copy the `.env.example` file to `.env` and update the database connection details.

4. **Run the application:**

    ```bash
    npm start
    ```

    Your API will be accessible at http://localhost:3000 (or another port if specified).

## Usage

Make requests to the API using a tool like Postman or curl.

## Endpoints

1. **GET /posts**

   - **Description:** Fetches all posts.

   - **Example:**

        ```bash
        curl http://localhost:3000/posts
        ```

2. **GET /posts/{id}**

   - **Description:** Fetches a post with the specified ID.

   - **Example:**

        ```bash
        curl http://localhost:3000/posts/1
        ```

3. **POST /posts**

   - **Description:** Creates a new post.

   - **Example:**

        ```bash
        curl -X POST -H "Content-Type: application/json" -d '{"title": "New Post", "content": "This is the content."}' http://localhost:3000/posts
        ```

4. **PATCH /posts/{id}**

   - **Description:** Edits a post with the specified ID.

   - **Example:**

        ```bash
        curl -X PATCH -H "Content-Type: application/json" -d '{"title": "Updated Post"}' http://localhost:3000/posts/1
        ```

5. **DELETE /posts/{id}**

   - **Description:** Deletes a post with the specified ID.

   - **Example:**

        ```bash
        curl -X DELETE http://localhost:3000/posts/1
        ```

## Post Model

The Post model has the following attributes:

- `title` (string): Title of the post.
- `content` (string): Content of the post.
