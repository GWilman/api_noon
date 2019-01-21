const Listing = require('../models/listing');

function listingsIndex(req, res, next) {
  Listing
    .find()
    .then(listings => res.status(200).json(listings))
    .catch(next);
}

function listingsCreate(req, res, next) {
  Listing
    .create(req.body)
    .then(listing => res.status(201).json(listing))
    .catch(next);
}

function listingsShow(req, res, next) {
  Listing
    .findById(req.params.id)
    .then((listing) => {
      if (!listing) return res.notFound();
      res.status(200).json(listing);
    })
    .catch(next);
}

function listingsUpdate(req, res, next) {
  Listing
    .findById(req.params.id)
    .then((listing) => {
      if (!listing) return res.notFound();
      for (const field in req.body) {
        listing[field] = req.body[field];
      }
      return listing.save();
    })
    .then(listing => res.status(200).json(listing))
    .catch(next);
}

function listingsDelete(req, res, next) {
  Listing
    .findById(req.params.id)
    .then((listing) => {
      if (!listing) return res.notFound();
      return listing.remove();
    })
    .then(() => res.status(200).json({'message': 'Listing deleted'}))
    .catch(next);
}

module.exports = {
  index: listingsIndex,
  create: listingsCreate,
  show: listingsShow,
  update: listingsUpdate,
  delete: listingsDelete
};
