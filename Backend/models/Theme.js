import mongoose from "mongoose";

const themeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const ThemeModel = mongoose.model("theme", themeSchema)

export default ThemeModel;

