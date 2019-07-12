const Post = require('../models/Post');
const path = require('path');
const fs = require('fs');

module.exports = {
    async index(req, res){
        const posts = await Post.find().sort('-createdAt'); //ordena decrescente
        
        return res.json(posts);
    },

    async store(req, res){
        const {author, place, description, hashtag} = req.body;
        const { filename: image } = req.file;

        const [name] = image.split('.');
        const fileName = `${name}.jpg`;

        const post = await Post.create({
            author,
            place,
            description,
            hashtag,
            image: fileName,
        });

        req.io.emit('post', post);
       
        return res.json({ok: post});
      
    }
};