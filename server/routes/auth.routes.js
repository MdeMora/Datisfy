const express = require('express');
const authRoutes = express.Router();

const passport = require('passport');
const bcrypt = require('bcryptjs');

const User = require('../models/User.model')


authRoutes.post('/signup', (req, res, next) => {

    console.log("------ PAYLOAD EN DESTINO -----", req.body)
    const email = req.body.email;
    const password = req.body.password;
    const username = req.body.username

    if (!email || !password) {
        res.status(400).json({ message: 'Provide email and password' });
        return;
    }
    
    console.log(req.body)

    if (password.length < 2) {
        res.status(400).json({ message: 'Please make your password at least 3 characters long for security purposes.' });
        return;
    }

    User.findOne({ email }, (err, foundUser) => {

        if (err) {
            res.status(500).json({ message: "email check went bad." });
            return;
        }

        if (foundUser) {
            res.status(400).json({ message: 'email taken. Choose another one.' });
            return;
        }

        const salt = bcrypt.genSaltSync(10);
        const hashPass = bcrypt.hashSync(password, salt);

        const aNewUser = new User({
            email: email,
            password: hashPass,
            username: username
        });

        console.log(aNewUser)

        aNewUser.save(err => {
            if (err) {
                res.status(400).json({ message: 'Saving user to database went wrong.' });
                return;
            }

            // Automatically log in user after sign up
            // .login() here is actually predefined passport method
            req.login(aNewUser, (err) => {

                if (err) {
                    res.status(500).json({ message: 'Login after signup went bad.' });
                    return;
                }

                // Send the user's information to the frontend
                // We can use also: res.status(200).json(req.user);
                res.status(200).json(aNewUser);
            });
        });
    });
});


authRoutes.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, theUser, failureDetails) => {
        if (err) {
            res.status(500).json({ message: 'Something went wrong authenticating user' });
            return;
        }

        if (!theUser) {
            // "failureDetails" contains the error messages
            // from our logic in "LocalStrategy" { message: '...' }.
            res.status(401).json(failureDetails);
            return;
        }

        // save user in session
        req.login(theUser, (err) => {
            if (err) {
                res.status(500).json({ message: 'Session save went bad.' });
                return;
            }

            // We are now logged in (that's why we can also send req.user)
            res.status(200).json(theUser);
        });
    })(req, res, next);
});



authRoutes.post('/logout', (req, res, next) => {
    // req.logout() is defined by passport
    req.logout();
    res.status(200).json({ message: 'Log out success!' });
});


authRoutes.get('/loggedin', (req, res, next) => {
    // req.isAuthenticated() is defined by passport
    if (req.isAuthenticated()) {
        console.log("--Esto es lo que hay en req.user",req.user)
        res.status(200).json(req.user);
        return;
    }
    res.status(403).json({ message: 'Unauthorized' });
});



module.exports = authRoutes;