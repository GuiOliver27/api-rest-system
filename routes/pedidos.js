const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        message: 'Return the requests'
    });
});

router.post('/', (req, res, next) => {
    res.status(201).send({
        message: 'The request was created'
    });
});

router.get('/:id_produto', (req, res, next) => {
    const id = req.params.id_produto

        res.status(200).send({
            message: 'Request details',
            id_pedido: id
        });
});

router.delete('/', (req, res, next) => {
    res.status(201).send({
        message: 'Request deleted'
    });
});

module.exports = router;