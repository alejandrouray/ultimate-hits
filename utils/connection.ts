import mongoose, { Model } from "mongoose"

const { DATABASE_URL } = process.env

export const connect = async () => {
  const conn = await mongoose
    .connect(DATABASE_URL as string)
    .catch(err => console.log(err))
  console.log("Mongoose Connection Established")

  const GenreSchema = new mongoose.Schema({
    title: String,
    subgenres: Array,
    origins: Array
  })

  const Genre = mongoose.models.Genre || mongoose.model("Genre", GenreSchema)

  return { conn, Genre }
}