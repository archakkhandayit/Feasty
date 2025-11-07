import mongoose from "mongoose";

const foodItemSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    isVeg: { type: Boolean, required: true },
    price: { type: Number, required: true, min: 0 },
    description: { type: String, trim: true },
    imageUrl: {
      type: String,
      validate: {
        validator: (url) =>
          /^https?:\/\/.+\.(jpg|jpeg|png|webp|avif|gif)$/i.test(url),
        message: "Invalid image URL format",
      },
    },
    category: { type: String, required: true },
  },
  { timestamps: true, _id: false }
);

const offerModel = new mongoose.Schema(
  {
    code: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    minOrderValue: { Type: Number, required: true, min: 0 },
    discount: {
      type: { type: String, enum: ["PERCENTAGE", "FLAT"], required: true },
      value: { type: Number, required: true },
      maxDiscountAmount: { type: Number },
    },
    status: {
      type: String,
      enum: ["ACTIVE", "INACTIVE", "EXPIRED"],
      default: "ACTIVE",
    },
  },
  { _id: false }
);

const outletSchema = new mongoose.Schema({
  ownerId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "users",
    required: true,
  },
  name: {
    type: String,
    minLength: [3, "Min Name length in 3"],
    maxLength: 30,
    required: true,
    unique: true,
  },
  imageUrl: { type: URL, required: true },
  deliveryTime: { type: String, required: true }, // "10–15 mins"
  hours: { type: String, required: true },        // "Mon–Sun: 10:00 AM - 10:00 PM"
  cuisines: { type: String },                     // "Snacks, Beverages, Frozen Food"
  location: { type: String, required: true },     // "Benachity, Durgapur"
  menu: [foodItemSchema],
  offers: [offerModel],
  salesTaxRate: { type: Number, required: true }, // 0.18 for 18% tax
  shippingFee: { type: Number, default: 0 },      // delivery charges in Rs.
});

const OutletModel = new mongoose.model("outlet", outletSchema);

export default OutletModel;
