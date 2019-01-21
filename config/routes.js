const router = require('express').Router();
const listings = require('../controllers/listings');

router.route('/')
  .get((req, res) => {
    res.status(200).json('Welcome to the <name TBC> API.');
  });

router.route('/listings')
  .get(listings.index)
  .post(listings.create);

router.route('/listings/:id')
  .get(listings.show)
  .put(listings.update)
  .delete(listings.delete);

router.route('/*')
  .all((req, res) => res.notFound());

module.exports = router;
