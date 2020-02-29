const router = require('express').Router();
let candidates = require('../models/candidates.model');

router.route('/').get((req, res) => {
    candidates.find()
        .then(candidates => res.json(candidates))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post(function(req, res) {
    const First_Name = req.body.First_Name;
    const Last_Name = req.body.Last_Name;
    const Email = req.body.Email;
    const Phone = req.body.Number;
    const Position = req.body.Position;
    const City = req.body.City;
    const State = req.body.State;
    const Zip = req.body.Zip;

    const NewCandidates = new candidates({
        First_Name,
        Last_Name,
        Email,
        Phone,
        Position, 
        City,
        State,
        Zip
    })

NewCandidates.save()
    .then(candidates => {
        res.status(200).json({'candidates': 'new candidates added successfully'});
    })
    .catch(err => {
        res.status(400).send('adding new candidate failed');
});

router.route('/:id').get((req, res) => {
    candidates.findById(req.params.id)
        .then(candidates => res.json(candidates))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => { 
    candidates.findByIdAndDelete(req.params.id)
        .then(() => res.json('Candidate deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
    });
});

module.exports = router;


