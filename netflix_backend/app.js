const express = require('express');
const PORT = 5000;
const app = express()
app.use(express.json())

const cors = require('cors')
app.use(cors())

const bcrypt = require('bcrypt')

require('dotenv').config();

const mongoose = require('mongoose')
const mongoURl = process.env.MONGODB_URI;

mongoose.connect(mongoURl, {

}).then(() => {
    console.log('Connected to the Database')
}).catch((e) => {
    console.log('Not Connected')
})

require('./db_schema.js')
const user = mongoose.model('netflix_data')

app.post('/addUser', async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body)
    const encryptedPassword = await bcrypt.hash(password, 10)
    try {
        const oldUser = await user.findOne({ email })
        if (oldUser) {
             res.send({ error: " User Exist" })
        } else {
            user.create({
                email,
                password: encryptedPassword,
            })
            res.send({ status: "ok" })
        }

    } catch (e) {
        res.send({ status: "error" })
    }
})

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const foundUser = await user.findOne({ email: email });
        if (!foundUser) {
            console.log('userEmail NOT FOUND');
            return res.status(404).send({ status: false, message: 'Email not found' });
        }
        const isValidPassword = await bcrypt.compare(password, foundUser.password);
        if (!isValidPassword) {
            console.log('Password Incorrect');
            return res.status(401).send({ status: false, message: 'Login failed: Invalid  Email or Password' });
        }
        console.log('Login successful');
        return res.status(200).send({ status: true, message: 'Login Successful' });

    } catch (error) {
        console.error('An error occurred in login post API:', error);
        return res.status(500).send({ status: false, message: 'Internal Server Error' });
    }
});



app.listen(PORT, () => {
    console.log('Server Started')
})