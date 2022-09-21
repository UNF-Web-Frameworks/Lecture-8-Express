import express from 'express';
import bodyparser from 'body-parser';

const app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use('/files',express.static('public'));

let dogArray:{name:string,race:string}[]=[
    {
        name:"fido",
        race:"lab"
    },
    {
        name:"donkey",
        race:"pit"
    }
]

app.get('/Dogs',(req,res,next)=>{
    res.send(dogArray);
});
app.post('/Dogs',(req,res,next)=>{
    dogArray.push(req.body);
    res.status(201).send(dogArray);
});

app.delete('/Dogs/:dogName',(req,res,next)=>{
    let idx = dogArray.findIndex(d=>d.name===req.params.dogName);
    if(idx<0)
    {
        res.status(404).send('Dog not Found');
    }
    else
    {
        dogArray.splice(idx,1);
        res.status(200).send(dogArray);
    }
    
});

app.use("/",(req,res,next)=>{
    console.log(req.url);
    res.send('Hello World');
});


app.listen(3000);
