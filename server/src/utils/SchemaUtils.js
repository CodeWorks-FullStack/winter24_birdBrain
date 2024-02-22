import { Schema } from "mongoose"

export const SCHEMA_OPTIONS = { timestamps: true, toJSON: { virtuals: true } }
export const CREATOR_ID = { type: Schema.Types.ObjectId, required: true, ref: 'Account' }

export const VIRTUAL_CREATOR_OPTIONS = {
  ref: 'Account',
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true
}