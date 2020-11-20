import { User } from "./user.model"

export interface Adoption {
  _id: String,
  user: User,
  image: String,
  publication_type: String,
  pet_name: String,
  species: String,
  gender: String,
  maturity: String,
  castred: Boolean,
  quantity_male: Number,
  quantity_female: Number,
  description: String,
  data_nascimento: Date,
  rated: Boolean
}