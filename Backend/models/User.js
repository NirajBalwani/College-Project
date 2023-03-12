import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 50
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    admin: {
        required: true,
        type: Boolean,
        default: false
    },
    tokens: [{
        type: String
    }],
    likes: [
        { type: String }
    ],
    comments: [{
        packageId: {
            type: String,
        },
        commentDesc: {
            type: String
        }
    }],
}, {
    timestamps: true
})


const User = mongoose.model("User", userSchema)

export default User
