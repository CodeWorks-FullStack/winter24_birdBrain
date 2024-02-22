import { Schema } from "mongoose";
import { CREATOR_ID, SCHEMA_OPTIONS } from "../utils/SchemaUtils.js";

function validateSeen() {
  return new Date(this.dateSeen) < new Date()
}

export const BirdSchema = new Schema({
  name: { type: String, required: true, maxlength: 100 },
  imgUrl: { type: String, required: true, maxlength: 500 },
  location: { type: String, required: true, maxlength: 500 },
  dateSeen: { type: Date, required: validateSeen },
  description: { type: String, default: '', maxlength: 500 },

  // RELATIONSHIPS
  creatorId: CREATOR_ID

}, SCHEMA_OPTIONS)