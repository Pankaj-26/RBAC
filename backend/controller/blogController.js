const Blog = require('../models/Blog')

const createPost = async (req, res) => {
  try {
    const post = new Blog({
      ...req.body,
      user: req.user._id,
    })

    await post.save()
    res.status(201).json(post)
  } catch (err) {
    return res.status(500).json({ message: 'Internal server error' })
  }
}

const getPost = async (req, res) => {
  try {
    const post = await Blog.find().populate('author', 'name')

    return res.status(200).json(post)
  } catch (err) {
    return res.status(500).json({ message: 'Internal server error' })
  }
}

const updatePost = async (req, res) => {
  try {
    const post = await Blog.findById(req.params.id)
    if (!post) {
      return res.status(404).json({ message: 'Post not found' })
    }

    post.title = req.body.title || post.title
    post.content = req.body.content || post.content
    await post.save()

    return res.status(200).json({ message: 'Post updated successfully' })
  } catch (err) {
    return res.status(500).json({ message: 'Internal server error' })
  }
}

const deletePost = async (req, res) => {
  try {
    const post = await Blog.findById(req.params.id)
    if (!post) {
      return res.status(404).json({ message: 'Post not found' })
    }
    await post.deleteOne()
    return res.status(200).json({ message: 'Post deleted successfully' })
  } catch (err) {
    return res.status(500).json({ message: 'Internal server error' })
  }
}

module.exports = { createPost, getPost, updatePost, deletePost }
