
import { skill } from '../models/skill.js'

function index(req, res) {
  skill.find({})
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

function newSkill(req, res) {
  res.render('skills/new')
}

export {
  index,
  newSkill as new
}