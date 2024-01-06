const express = require('express');
const postController = require('../controllers/post.controller');


const router = express.Router();

router.route('/').get(postController.getAllPosts);
router.route('/').post(postController.createPost); 

router.route('/:id').get(postController.getPostById);
router.route('/:id').patch(postController.editPostById);
router.route('/:id').delete(postController.deletePostById);

module.exports = router;