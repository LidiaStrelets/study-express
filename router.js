import { Router } from "express";
import controller from "./controller.js";
import Post from "./Post.js";

const router = new Router()

router.get('/posts', controller.readAllPosts )
router.get('/posts/:id', controller.readPostById)
router.post('/posts', controller.createPost)
router.put('/posts/:id', controller.updatePostById)
router.delete('/posts/:id', controller.deletePostById)

export default router