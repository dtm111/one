var express = require('express');
var router = express.Router();
var Category = require('../models/Category');
var Product = require('../models/Product');



/* POST new category. CREAT*/
router.post('/:name', function(req, res, next) {

    var newCategory = new Category({
        name: req.params.name
    });
    newCategory.save(function(err) {
        if (err) { 
            res.send(err);
            console.log('validation faild ' + err); 
        }
        else {
        console.log('Category Created');
        res.send('Category Created');
        }
    });

});


/* GET categories listing. READ*/
router.get('/', function(req, res, next) {

    Category.find(function(err, categories) {
        if (err) {
            res.status(500).send(err);
        }
        else {

            // send the list of all categories
            res.send(categories);
        }
    });
});

/* GET product by ID. READ*/
router.get('/:name', function(req, res, next) {

    Product.find({
        category: req.params.name
    }, function(err, prds) {
        if (err) {
            res.send(err);
        }
        else {
            Category.findOne({
                name: req.params.name
            }, function(err, category) {
                if (err) {
                    res.send(err);
                }
                else {
                    category.products = prds;
                    category.populate('products');
                    res.send(category);
                }
            });

        }
    });


});


/* DELETE categories listing. DELETE*/
router.delete('/:name', function(req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', "*");
    
    Product.update({category: req.params.name},{category: 'noCategory'}, {multi: true}, function(err) {
        if (err){
            res.send(err);
        }
        else{
        
        Category.findOneAndRemove({name: req.params.name}, function(err, category) {
            if(err){
                res.send(err);
            }
            else{
                res.send('Deleted category ' + category.name);
            }
        });
        
        }
    });

});



module.exports = router;
