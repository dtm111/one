var express = require('express');
var router = express.Router();
var Product = require('../models/Product');


/* POST new product. CREAT*/
router.post('/new', function(req, res, next) {

    var newProduct = Product({
        name: req.body.name,
        purchasePrice: req.body.purchasePrice,
        sellingPrice: req.body.sellingPrice,
        category: req.body.category
    });
    
    newProduct.save(function(err) {
        if (err) { 
            console.log('Validation faild' + err);}
            
        else {
            console.log('Product Created'); 
            res.send('Product Created');
            
        }
        
    });
    
});

/* GET products listing. READ*/
router.get('/list', function(req, res, next) {

    Product.find(function(err, products) {
        
        if (err) {
            res.status(500).send(err);
        }
        else {

            // send the list of all products
            res.send(products);
        }
    });
});

/* GET product by ID. READ*/
router.get('/:id', function(req, res, next) {

    Product.findById(req.params.id, function(err, product) {
        
        if (err) {
            res.status(500).send(err);
        }
        else {

            // send the list of all products
            res.send(product);
        }
    });
});


/* PUT products listing. UPDATE*/
router.put('/update/:id', function(req, res, next) {

    Product.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, upsert: true, setDefaultsOnInsert:true, runValidators:true},
        
        
        function(err, products) {
        
        if (err) {
            res.status(500).send(err);
        }
        else {

            // send the list of all products
            res.send(products);
        }
    });

});

/* DELETE categories listing. DELETE*/
router.delete('/delete/:id', function(req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', "*");

    Product.findOneAndRemove({
        id: req.params.name
    }, function(err) {
        if (err) console.log('Removal faild');
        else console.log('Category Deleted');
        res.send("deleted");

    });
});




module.exports = router;


