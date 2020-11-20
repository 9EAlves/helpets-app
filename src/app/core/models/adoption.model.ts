export interface Adoption {
  _id: String,
  user: String,
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
  data_nascimento: Date
}