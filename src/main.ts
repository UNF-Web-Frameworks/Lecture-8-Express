import express from 'express';
import bodyparser from 'body-parser'
const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use('/static',express.static('public'));

app.get('/Dog',(req,res,next)=>{
    res.write('Get the Dog');
    next();
});

app.get('/Dog',(req,res,next)=>{
    res.write('Get the Dog 2');
    res.end();
});

app.post('/Dog',(req,res,next)=>{
    res.send('Create the Dog');
});


app.patch('/Dog/:dogName',(req,res,next)=>{
    res.send(`Update the Dog ${req.params.dogName}`);
});

app.use('/',(req,res,next)=>{
    res.send('Hello World');
});

app.listen(3000);