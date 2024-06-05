//importing express
const express = require('express');
//applying express to this app
const app = express();
const PORT = process.env.PORT || 3000;
//middleware
app.use(express.static('../client'));
app.use(express.static('../client/src/css'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//exporting routes folder
require('./routes/htmlRoutes')(app);
//listening through port 3000
app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
