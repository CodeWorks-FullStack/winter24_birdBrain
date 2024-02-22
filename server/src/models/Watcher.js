import { Schema } from "mongoose";
import { ACCOUNT_REF, SCHEMA_OPTIONS } from "../utils/SchemaUtils.js";

export const WatcherSchema = new Schema({
  accountId: ACCOUNT_REF,
  birdId: { type: Schema.Types.ObjectId, required: true, ref: 'Bird' }
}, SCHEMA_OPTIONS)

WatcherSchema.virtual('profile', {
  ref: 'Account',
  localField: 'accountId',
  foreignField: '_id',
  justOne: true
})