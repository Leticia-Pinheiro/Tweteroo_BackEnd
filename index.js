import express from 'express'
import cors from 'cors'

const server = express()
server.use(cors())


let usuario ={
    username: '',
    avatar: ''
}

let tweets = []

let tweet = {
    username: '',
    tweet: '',
    avatar: ''
}

server.use(express.json());

server.post("/sign-up", (req, res) => {
    if (req.body.username && req.body.avatar) {
        const usuarioRegistrado = usuario.find(
            (usuario) => usuario.username === req.body.username
        );
        if (usuario) {
            res.status(400).send('Usuário já existe');
        } else {
            usuario.push(req.body);            
            res.status(201).send('OK');
        }
    } else {
        res.status(400).send('Falta nome de usuário ou avatar');
    }     
});

server.post("/tweets", (req, res) => {
    
    const tweetMensagem = req.body.tweet;
    const { usuário } = req.headers;
    if (tweetMensagem && usuário) {
        tweet.push(req.body)
        const userTweet = users.find(
            (usuario) => usuario.username === tweet.username
        );
        tweet = { ...tweet, avatar: userTweet.avatar };
        tweets.push(tweet);
        res.status(201).send('OK');
    } else {
        res.status(400).send('Falta nome de usuário ou tweet');
    }
});




server.listen(5000)

