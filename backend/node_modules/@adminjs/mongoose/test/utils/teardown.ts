import mongoose from 'mongoose'

const teardownE2ETests = async (): Promise<void> => {
  await Promise.all(
    mongoose.connections.map(connection => connection.close(true)),
  )
  await mongoose.connection.close()
  await mongoose.disconnect()
  process.exit()
}

export default teardownE2ETests
