import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const { MONGO_USER, MONGO_PASSWORD } = process.env

const mongoURI = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@calendarappcluster.imrrxn4.mongodb.net/calendarAppDb`

export const dbConnection = async () => {
  try {
    await mongoose.connect(mongoURI)
    console.log('Database connected!!')
  } catch (error) {
    console.log(error)
    throw new Error('Error initializing database')
  }
}
