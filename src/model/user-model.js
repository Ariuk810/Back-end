const model = {
  _id: "5a9427648b0beebeb69579e7",
  name: "Mercedes Tyler",
  email: "mercedes_tyler@fakegmail.com",
  phone: 12345,
  movie_id: "573a1390f29313caabcd4323",
  text: "Eius veritatis vero facilis quaerat fuga temporibus. Praesentium exped…",
  date: "2002-08-18T04:56:07.000+00:00",
};

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
  id: ObjectId,
  name: String,
  email: String,
  phone: Number,
});
