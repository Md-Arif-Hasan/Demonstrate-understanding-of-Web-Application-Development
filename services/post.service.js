const postRepository = require("../repositories/post.repository");
const { AppError } = require("../utils/errorHandler");

("use strict");

async function createPost(post) {
    const result = await postRepository.createPost(post);
    return result;
}

async function getAllPosts() {
    const allPost = await postRepository.getAllPosts();
    return allPost;
}

async function editPostById(id, postItemsToEdit) {
    const result = await postRepository.editPostById(id, postItemsToEdit);
    if(!result) throw new AppError("Post not found", 404, false);
    return result;
}

async function deletePostById(id) {
    const result = await postRepository.deletePostById(id);
    if(!result) throw new AppError("Post not found", 404, false);
    return result;
}

async function getPostById(id) {
    const result = await postRepository.getPostById(id);
    if(!result) throw new AppError("Post not found", 404, false);
    return result;
}

module.exports = {
  getAllPosts,
  createPost,
  getPostById,
  editPostById,
  deletePostById,
};