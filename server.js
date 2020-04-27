const express = require('express');
const app = express();
const authRoutes = require('./routes/auth-routes')

// set up view engine
app.set('view engine', 'ejs');


// set up routes
app.use('/auth', authRoutes)


// create home route
app.get('/', (req, res) => {
    res.render('home');
})

app.listen(4000, () => console.log('app listening on port 4000'))