import mongoose, { Schema } from 'mongoose'

const activitySchema = new mongoose.Schema({
    activities: [
        {
            url: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            }
        }
    ],
    package_id: {
        type: Schema.Types.ObjectId,
        ref: "package"
    }
})

const Activity = mongoose.model('package', activitySchema)

export default Activity;



