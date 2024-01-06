const Post = require('../models/post.model');
const { SequelizeValidationError } = require("../utils/errorHandler");

exports.getAllPosts = async () => {
    const result = await Post.findAll();
    return result;
};

exports.getPostById = async (id) => {
    const result = await Post.findOne({where: { id } });
    return result;
};

exports.editPostById = async (id, editedPost) => {
    const doEdit = await Post.update(
      { title: editedPost.title, 
        content: editedPost.content },
      { where: { id }}
    );
    if(!doEdit) return false;
    const result = await Post.findOne({where: { id } });
    return result;
};

exports.deletePostById = async (id) => {
    const result = Post.destroy({ where: { id } });
    return result;
};

exports.createPost = async (post) => {
  try {
      const result = await Post.create(post);
      console.log("Post created successfully");
      return result;
    } catch (err) {
      throw new SequelizeValidationError(err, 400);
    }
}