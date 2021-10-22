const { Router } = require('express');
const router = Router();
const movies = require('../example.json')
console.log(movies);

router.get('/', (req,res)=>{
    res.json(movies)
})

router.post('/', (req,res)=>{
    console.log(req.body)
    res.send('Received')
})


module.exports= router;