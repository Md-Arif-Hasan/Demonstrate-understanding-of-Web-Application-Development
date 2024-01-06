const express = require('express');
const router = express.Router();


const postRouter = require('./post.route');

router.use('/posts', postRouter);

module.exports = router;