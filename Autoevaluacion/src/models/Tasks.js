import {Schema, model} from "mongoose";

const blogSchema = new Schema(
    {
        title: {
            type: String
        },
        desciption: {
            type: String
        },
        completed: {
            type: Boolean
        }
    }, {
        timestamps: true,
        strict: false
    }
)

export default model("tasks", blogSchema);