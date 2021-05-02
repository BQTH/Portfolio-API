const express = require('express');
const router = express.Router();
const ProjectModel = require('../models/Project');

//Get all projects
router.get('/', async (req, res) => {
    try{
        console.log("trying to get")
        const projects = await ProjectModel.find();
        console.log(projects)
        res.json(projects);
        
    }
    catch(err){
        console.log("failed to get")
        res.json({message: err});
        console.log(err)
    }
});

//Submit a project
router.post('/', async (req, res) => {
    const project = new ProjectModel({
        title: req.body.title,
        description: req.body.description,
        url: req.body.url,
        lat: req.body.lat,
        lon: req.body.lon
    });
    
    /* Check
    console.log("ready to save");
    console.log(
        post.title
    );*/
    
    try{
    const savedproject = await project.save();
    res.json(savedproject);
    } catch(err){
    res.json({message: err});
    }
});

//Get specific project
router.get('/:projectId', async (req, res) => {
    try{
        const project = await ProjectModel.findById(req.params.projectId);
        res.json(project);
    } catch(err) {
        res.json({message: err});
    }
});

//Update a project
router.patch('/:projectId', async (req,res) => {
    try {
        const updatedProject = await ProjectModel.updateOne({_id: req.params.projectId}, {$set: {title: req.body.title}});
        res.json(updatedProject);
    }
    catch(err) {
        res.json({message: err});
    }
    });

//Delete a project
router.delete('/:projectId', async (req,res) => {
    try{
        const removedProject = await ProjectModel.remove({_id: req.params.projectId});
        res.json(removedProject)
    }
    catch(err) {
        res.json({message: err})
    }
});

module.exports = router;