const express = require('express');
const controller = require('../controllers/analytics');
const router = express.Router();

// http://localhost:5000/api/analytics/overview
router.get('/overview', controller.analytics);

// http://localhost:5000/api/analytics/analytics
router.get('/analytics', controller.overview);

module.exports = router;