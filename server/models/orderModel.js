import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    isVeg: { type: Boolean, required: true },
    price: { type: Number, required: true },
    description: { type: String, trim: true },
    quantity: { type: Number, required: true, min: 1 },
    imageUrl: { type: String },
    subtotal: { type: Number, required: true, min: 0 },
  },
  { _id: false }
);

const offerSchema = new mongoose.Schema(
  {
    code: { type: String, required: true },
    title: { type: String, required: true },
    minOrderValue: { type: Number, required: true },
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

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    outletId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "outlets",
      required: true,
    },
    outletName: { type: String, required: true },
    orderDate: { type: Date, default: Date.now },
    cartItems: [ cartItemSchema ],
    offer: {
      type: offerSchema,
      required: false,
    },
    subtotal: { type: Number, required: true },
    salesTaxRate: { type: Number, required: true }, // 0.18 for 18% tax
    salesTax: { type: Number, required: true },     // Total sales tax in Rs.
    shippingFee: { type: Number, default: 0 },      // Delivery charges in Rs.
    totalAmount: { type: Number, required: true },
    status: {
      type: String,
      enum: [
        "Ordered",
        "Preparing",
        "Out for Delivery",
        "Delivered",
        "Cancelled",
      ],
      default: "Ordered",
    },
  },
  { timestamps: true }
);

const OrderModel = new mongoose.model("orders", orderSchema);

export default OrderModel;
