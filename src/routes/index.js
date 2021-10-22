const { Router } = require('express')
const router = Router();

// routes
router.get('/', (req, res) =>{
    const  data = [
        {
            "name": "Yeraldin Salazar",
            "Programa": " My first Api rest "
        }
    ]
    res.json(data);
})

module.exports = router;