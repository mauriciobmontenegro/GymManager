const express = require('express')
const routes = express.Router()
const instructors = require('./instructors')

routes.get('/', function(req, res) {
    return res.redirect("/instructors")
})

routes.get('/instructors', function(req, res) {
    return res.render("instructors/index")
})

routes.get('/instructors/create', function(req, res) {
    return res.render("instructors/create")
})

routes.get('/instructors/:id', instructors.show)

routes.post('/instructors/', instructors.post)

routes.get('/members', function(req, res) {
    return res.send("members")
})

module.exports = routes


/*server.get("/", function (req, res) {
    const about = {
        avatar_url: "https://avatars2.githubusercontent.com/u/57838986?s=460&u=7485c61f700dfb5f1d5d7bb89082993a6e2327f0&v=4",
        name: "Mauricio Montenegro",
        role: "Frontend Developer",
        description: "Originally from Brazil, passionate about the tech scene with experiences in engineering, planning and management of projects/clients. Very dynamic and flexible due to living in many countries and being in touch with different cultures, characteristics that have helped me when managing a team.",
        links: [
            { name: "Github", url: "https://github.com/mmont17/" },
            { name: "LinkedIn", url: "https://www.linkedin.com/in/mauriciobmontenegro/" },
            { name: "Twitter", url: "https://twitter.com/mmont17/" },
            { name: "Instagram", url: "https://www.instagram.com/mauriciomontenegro/" },
        ],
    }
    return res.render("about", { about: about })
})

server.get("/classes", function (req, res) {
    return res.render("classes", { items: videos })
})

server.get("/video", function(req, res){
    const id = req.query.id
    const video = videos.find(function(video){
        return video.id == id
    })

    if (!video) {
        return res.send("Video not found!")
    }

    return res.render("video", { item: video })
}) */