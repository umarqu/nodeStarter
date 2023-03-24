import express from 'express';
import chalk from 'chalk';
import Debug from 'debug';
import morgan from 'morgan'
import path from 'path'
//import sessionRouter from './src/routers/sessionsRouter'

const __dirname = path.resolve();
const PORT = process.env.PORT || 3000;
const debug = Debug("app");
const app = express();


app.use(morgan('tiny')) // returns the request in terminal
app.use(express.static(path.join(__dirname,'/public/'))); // helps to use static files

//app.set('views', './src/views');
//app.set('view engine','ejs')

//app.use('/sessions', sessionRouter) // sessionsRoute will hold all the route code. for everything for /sessions

// comes here and looks for public/index, checks for index. if there is nothing in public then it does res.send
app.get('/',(req,res) =>{
    //res.render('index', {title: 'Blobmantics', data:['a','b','c']})
    res.send('Hello from the apps'); 
})

app.listen(PORT, ()=>{
    debug(`listening on port ${chalk.green(PORT)}`);
})