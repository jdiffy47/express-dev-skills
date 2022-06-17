import { skills } from '../data/skills-data.js'

function index(req, res) {
  Skills.find({})
  .then(skills => {
    res.render('skills/index', {
      skills : skills
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

export {
  index
}