export interface User {
  _id: String
  user_login?: String
  password?: String
  user_type?: String
  name: String
  image: String
  description: String
  cnpj: String
  contact?: {
    cell_phone?: Number
    instagram: String
    facebook: String
    landline: Number
  }
  bank_account: String
  paypal_account: String
  address: {
    neighborhood: String
    street: String
    number: String
    apartament_number: String
  }
}