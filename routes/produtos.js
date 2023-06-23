const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        message: 'Return all the products'
    });
});

router.post('/', (req, res, next) => {
    res.status(201).send({
        message: 'Insert a product'
    });
});

router.get('/:id_produto', (req, res, next) => {
    const id = req.params.id_produto

    if (id === 'especial') {
        res.status(200).send({
            message: 'You discovered the special ID',
            id: id
        });
    } else {
        res.status(200).send({
            message: 'Product received'
        });
    }
});

router.patch('/', (req, res, next) => {
    res.status(201).send({
        message: 'Product changed'
    });
});

router.delete('/', (req, res, next) => {
    res.status(201).send({
        message: 'Product deleted'
    });
});

module.exports = router;