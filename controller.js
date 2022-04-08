import Post from "./Post.js";
import service from "./service.js";

class Controller {
  async createPost(req, res) {
    try {
      const post = await service.create(req.body, req.files.pic);

      res.status(200).json(post);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async readAllPosts(req, res) {
    try {
      const posts = await service.readPosts();
      res.status(200).json(posts);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async readPostById(req, res) {
    try {
      const { id } = req.params;

      const post = await service.readPost(id);
      res.status(200).json(post);
    } catch (e) {
      res.status(e.statusCode || 500).json(e.message);
    }
  }

  async updatePostById(req, res) {
    try {
      const post = req.body;
      const { id } = req.params;

      const updatedPost = await service.updatePost(id, post);
      res.status(200).json(updatedPost);
    } catch (e) {
      res.status(e.statusCode || 500).json(e.message);
    }
  }

  async deletePostById(req, res) {
    try {
      const { id } = req.params;
      const deletedPost = await service.deletePost(id);
      res.status(200).json(deletedPost);
    } catch (e) {
      res.status(e.statusCode || 500).json(e.message);
    }
  }
}

export default new Controller();
