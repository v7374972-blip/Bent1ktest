const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

// Express route handling login attempt
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Define allowed patterns (e.g., standard ASCII printable characters only)
    const validUsernamePattern = /^[a-zA-Z0-9_.-]+$/;
    const validPasswordPattern = /^[\x20-\x7E]+$/; // Printable ASCII range

    // Check if inputs conform to allowable character sets
    const isUsernameValid = validUsernamePattern.test(username);
    const isPasswordValid = validPasswordPattern.test(password);

    if (!isUsernameValid || !isPasswordValid) {
        // Trigger error state if non-ASCII or invalid characters are detected
        return res.status(400).send({
            success: false,
            message: "Incorrect username or password."
        });
    }

    // Proceed with authentication logic (e.g., verifying credentials against database)
    // ...
});
