import fileServise from "./fileServise.js";
import Post from "./Post.js";

class Servise {
  async create(post, picture) {
      const fileName = await fileServise.saveFile(picture)
    const createdPost = await Post.create({...post, pic: fileName});
    return createdPost;
  }

  async readPosts() {
    return await Post.find();
  }

  async readPost(id) {
    if (!id) {
      const error = new Error("No id provided");
      error.statusCode = 400;
      throw Error(error);
    }
    return await Post.findById(id);
  }

  async updatePost(id, post) {
    if (!id) {
      const error = new Error("No id provided");
      error.statusCode = 400;
      throw Error(error);
    }
    return await Post.findByIdAndUpdate(id, post, { new: true });
  }

  async deletePost(id) {
      console.log('id:', id);
    if (!id) {
      const error = new Error("No id provided");
      error.statusCode = 400;
      throw Error(error);
    }
    const deleted = await Post.findByIdAndDelete(id);
    console.log("deleted: ", deleted);
    if (!deleted) {
      const error = new Error("No user found - incorrect id");
      error.statusCode = 400;
      throw Error(error);
    }
    return deleted;
  }
}

export default new Servise();
