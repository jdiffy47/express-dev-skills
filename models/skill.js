import mongoose from "mongoose";

const Schema = mongoose.Schema

const skillSchema = new Schema({
  text: String,
  done: Boolean
})

const skill = mongoose.model('skill',
skillSchema)

export {
  skill
}