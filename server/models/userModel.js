import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      minLength: [3, "Min Name length in 3"],
      maxLength: 30,
      required: true,
    },
    email: { type: String, required: true, unique: true},
    role: {
      type: String,
      enum: ["USER", "ADMIN", "SUPERADMIN"],
      required: true,
    },
    password: { type: String, required: true },
    address: [
      {
        fullName: {
          type: String,
          minLength: [3, "Min Name Lenght is 3"],
          maxLength: 30,
          required: true,
        },
        phoneNumber: {
          type: Number,
          min: 1000000000,
          max: 9999999999,
          required: true,
        },
        addressLine1: {
          type: String,
          required: true,
          minLength: [5, "Min Address Lenght is 5"],
          maxLength: 50,
          required: true,
        },
        city: {
          type: String,
          minLength: [3, "Min City Length is 3"],
          maxLength: 20,
          required: true,
        },
        pinCode: {
          type: Number,
          min: 100000,
          max: 999999,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

const UserModel = new mongoose.model("user", userSchema);

export default UserModel;
