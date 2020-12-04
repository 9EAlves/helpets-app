import { User } from "./user.model"

export interface Disappeared {
    _id: String
    image: String
    publication_type: String
    pet_name?: String
    species: String
    gender: String
    event_date: String
    description: String
    user: User
    rated: Boolean
}