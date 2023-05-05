const express = require('express');
const bodyParser = require('body-parser')

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const avatarRoutes = require('./routes/avatarRoutes');
const tripRoutes = require('./routes/tripRoutes');

app.use('/api/avatars', avatarRoutes);
app.use('/api/trips', tripRoutes);


/** **/
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
