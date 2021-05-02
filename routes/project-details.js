const express = require('express');
const router = express.Router();
const PplPost = require('../models/Ppl');

//Get all ppl posts
router.get('/', async (req, res) => {
    try{
        const pplposts = await PplPost.find();
        res.json(pplposts);
    }
    catch(err){
        res.json({message: err});
    }
});

//Submit a post
router.post('/', async (req, res) => {
    const pplpost = new PplPost({
        title: req.body.title,
        ppl_count: req.body.ppl_count
    });
    
    /* Check
    console.log("ready to save");
    console.log(
        post.title
    );*/
    
    try{
    const savedpplPost = await pplpost.save();
    res.json(savedpplPost);
    } catch(err){
    res.json({message: err});
    }
});

//Get specific post
router.get('/:pplpostId', async (req, res) => {
    try{
        const pplpost = await PplPost.findById(req.params.postId);
        res.json(pplpost);
    } catch(err) {
        res.json({message: err});
    }
});

//Update
router.patch('/:pplpostId', async (req,res) => {
    try {
        const updatedPplPost = await PplPost.updateOne({_id: req.params.pplpostId}, {$set: {title: req.body.title}});
        res.json(updatedPplPost);
    }
    catch(err) {
        res.json({message: err});
    }
    });

//Delete a post
router.delete('/:pplpostId', async (req,res) => {
    try{
        const removedPplPost = await PplPost.remove({_id: req.params.pplpostId});
        res.json(removedPplPost)
    }
    catch(err) {
        res.json({message: err})
    }
});

module.exports = router;