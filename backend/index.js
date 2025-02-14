import express from 'express';
import bodyParser from 'body-parser';
import datas from './data.js';
import path from "path"




const app = express();
const port = 5000;
const posts = datas;
let idNum = posts.length;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.set("view engine", "ejs");
app.use(express.json());


// get all posts
app.get("/", (req, res) =>{
    res.render("index.ejs", {
        posts: posts
    });
})

app.get("/post", (req, res) =>{
    res.render("form.ejs");
})

// Create de nuit post
app.post("/post", (req, res) =>{
    const newId = idNum +1;
    const title = req.body.title;
    const content = req.body.content;
    
    const newPost = {
        id: newId,
        title: title,
        content: content
    };
    posts.push(newPost);
    idNum = newId;
    res.redirect("/")

})

// section editing

app.get("/edit/:id", (req, res) =>{
    const id = parseInt(req.params.id);
    const editPost = posts.find((post) => post.id === id);
    res.render("form.ejs", {
        posts: editPost
    })
})

// Post editing post
app.post("/edit/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const editPost = posts.find((post) => post.id === id);

    if (!editPost) {
        console.error(`Post with id ${id} not found`);
        return res.status(404).send("Post not found");
    }

    console.log(editPost.title);

    if (req.body.title) editPost.title = req.body.title;
    if (req.body.content) editPost.content = req.body.content;

    res.redirect("/");
});
// delete post
app.get("/delete/:id", (req, res) =>{
    const id = parseInt(req.params.id);
    const deletePost = posts.findIndex((post) => post.id === id);
    if(deletePost === -1){
        console.log("Post not deleted try again!")
    }else{
        posts.splice(deletePost, 1)
        res.redirect("/")
    }
})

app.listen(port, (req, res) =>{
    console.log(`This server is running on port ${port}`)
})