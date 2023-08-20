const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');
const siteController = require('../app/controllers/SiteController');

router.get('/:slug', newsController.show);

router.get('/', newsController.index);

module.exports = router;
