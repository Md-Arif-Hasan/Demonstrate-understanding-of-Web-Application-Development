const postService = require("../services/post.service");
const { AppError } = require("../utils/errorHandler");
const { sendResponse } = require("../utils/contentNegotiation");

("use strict");

exports.getAllPosts = async (req, res, next) => {
  try {
    const posts = await postService.getAllPosts();
    return sendResponse(req, res, 200, posts);
  } catch (err) {
    next(err);
  }
};

exports.createPost = async (req, res, next) => {
  try {
    const {title, content} = req.body;
    if (!title || !content) {
      throw new AppError("Title & content are needed", 400, false);
    }
    const createdPost = await postService.createPost(req.body);
    return sendResponse(req, res, 201, createdPost);
  } catch (err) {
    next(err);
  }
};

exports.getPostById = async (req, res, next) => {
  try {
    const post = await postService.getPostById(req.params.id);
    return sendResponse(req, res, 200, post);
  } catch (err) {
    next(err);
  }
};


exports.editPostById = async (req, res, next) => {
  try {
    const postItemsToEdit = req.body;
    const editedPost = await postService.editPostById(req.params.id, postItemsToEdit);
    return sendResponse(req, res, 200, editedPost);
} catch (err) {
    next(err);
  }
};

exports.deletePostById = async (req, res, next) => {
  try {
    await postService.deletePostById(req.params.id);
    return sendResponse(req, res, 200, "Post deleted");
  } catch (err) {
    next(err);
  }
};