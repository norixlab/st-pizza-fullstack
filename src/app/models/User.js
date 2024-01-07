import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        isVerify: {
            type: Boolean,
            default: false,
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
        // forgotPasswordToken: String,
        // forgotPasswordTokenExpiry: Date,
        // verifyToken: String,
        // verifyTokenExpiry: Date,
    },
    { timestamps: true },
);

export default mongoose.models.User || mongoose.model('User', UserSchema);
