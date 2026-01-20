import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return v.length >= 2 && v.length <= 50;
            },
            message: (props) =>
                `${props.value} length must be between 2 and 50 characters!`,
        },
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        match: [/^\S+@\S+\.\S+$/, "Please use a valid email address."],
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
});

const User = mongoose.model("User", userSchema);

export default User;
