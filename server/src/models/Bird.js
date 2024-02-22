import { Schema } from "mongoose";
import { ACCOUNT_REF, SCHEMA_OPTIONS, VIRTUAL_CREATOR_OPTIONS } from "../utils/SchemaUtils.js";

function validateSeen() {
  return new Date(this.dateSeen) < new Date()
}

export const BirdSchema = new Schema({
  name: { type: String, required: true, maxlength: 100 },
  imgUrl: { type: String, required: true, maxlength: 500 },
  location: { type: String, required: true, maxlength: 500 },
  dateSeen: { type: Date, required: validateSeen, default: () => new Date() },
  description: { type: String, default: '', maxlength: 500 },

  // RELATIONSHIPS
  creatorId: ACCOUNT_REF

}, SCHEMA_OPTIONS)


// BirdSchema.virtual('creator', {
//   ref: 'Account',
//   localField: 'creatorId',
//   foreignField: '_id',
//   justOne: true
// })

// BETTER SHORTHAND
BirdSchema.virtual('creator', VIRTUAL_CREATOR_OPTIONS)

BirdSchema.virtual('watchersCount', {
  ref: 'Watcher',
  localField: '_id',
  foreignField: 'birdId',
  count: true
})
