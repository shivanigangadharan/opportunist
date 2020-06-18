const express = require('express');
const router = express.Router();

//item model
const Item = require('../../models/Item');

//@route GET api/items
//@description: Gett all items
//@access Public
router.get('/', (req, res) => {
    Item.find()
        .sort({ date: -1 })
        .then(items => res.json(items))
});

// @route POST api/items
// @description: Create an Item
// @access Public
router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name,
        description: req.body.description,
        link: req.body.link,
        opp_type: req.body.opp_type,
        gender: req.body.gender,
        education: req.body.education,
        application_start: req.body.application_start,
        application_end: req.body.application_end,
        location: req.body.location

    });
    newItem.save().then(item => res.json(item));
});


// @route DELETE api/items/:id
// @description: Delete an Item
// @access Public
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() =>
            res.json({ success: true }))
        )
        .catch(err => res.status(404).json({ success: false }));
});


module.exports = router;

// {
// 	"name": "Outreachy",
// 	"description":"Outreachy is a paid, remote internship program. 			Outreachy's goal is to support people from groups underrepresented in tech.",
// 	"link":"https://www.outreachy.org/",
// 	"type":"Open-source program",
// 	"gender": [
// 		"Female", "Transgender", "Other"
// 	],
// 	"education": "12th pass",
// 	"application_start": "",
// 	"application_end": "",
// 	"location":"Remote"
// }