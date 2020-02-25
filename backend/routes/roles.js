const router = require('express').Router();
let roles = require('../models/roles.model');

router.route('/').get((req, res) => {
    roles.find()
        .then(roles => res.json(roles))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post(function(req, res) {
    const role_title = req.body.role_title;

    const NewRoles = new roles({
        role_title
    })

    NewRoles.save()
        .then(roles => {
            res.status(200).json({'roles': 'new role added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new role failed');
        });
  });

module.exports = router;