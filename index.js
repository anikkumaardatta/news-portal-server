const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

const categories = require('./data/categories.json');
const newses = require('./data/news.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('News api Running')
})

app.get('/categories', (req, res) =>{
    res.send(categories)
})

app.get('/news/:id', (req, res) =>{
    const id = req.params.id;
    const seletedNews = newses.find(news => news._id === id);
    res.send(seletedNews);
})

app.get('/news', (req, res) => {
    res.send(newses)
})

app.get('/category/:id', (req, res) =>{
    const id = req.params.id;
    if(id === '08'){
        res.send(newses)
    }
    else{
        const categoryNewses = newses.filter(news => news.category_id === id);
        res.send(categoryNewses);
    }
})


app.listen(port, () =>{
    console.log('news portal server is running on port ', port);
})