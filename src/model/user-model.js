import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
  id: ObjectId,
  name: String,
  email: String,
  phone: Number,
  addres: String,
  role: { type: String, enum: ["User", "Admin"] },
  orderedFoods: { type: Schema.ObjectId, require: true, ref: `order` },
  ttl: Date,
  isVerified: Boolean,
  createdAt: Date,
  updatedAt: Date,
});

export const userModel = mongoose.model("user", UserSchema);
