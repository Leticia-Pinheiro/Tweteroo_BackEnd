import express from 'express'
import cors from 'cors'

const server = express()
server.use(cors())

let usuarios = []

let tweet ={
    username: '',
    avatar: '',
    tweet: ''
}

let tweets = []



server.use(express.json());

server.post("/sign-up", (req, res) => {
    console.log(req.body)
    if (req.body.username && req.body.avatar) {      
        
            tweet = req.body;            
            res.status(201).send('OK');
            usuarios.push(tweet)
        
    } else {
        res.status(400).send('Falta nome de usuário ou avatar');
    }     
});

server.post("/tweets", (req, res) => {
    
    const tweetMensagem = req.body.tweet;    
    if (tweetMensagem) {
        tweet = req.body       
        tweets.push(tweet);
        res.status(201).send('OK');
    } else {
        res.status(400).send('Falta nome de usuário ou tweet');
    }
});

server.get("/tweets", (req, res) => {        
    res.send(tweets)
});




server.listen(5000)

