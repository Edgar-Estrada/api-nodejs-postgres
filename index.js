const express = require('express');
const morgan = require('morgan');
const app = express();
const {pool} = require('./database');

app.set('port',process.env.PORT || 3000);

app.use(morgan('dev'));
app.use(express.json());

app.use('/login',require('./routes/user.routes'));

app.listen(3000,()=>{
    console.log('Server on port', app.get('port'));
})