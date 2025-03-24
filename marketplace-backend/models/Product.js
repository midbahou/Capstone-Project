import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: String,
  imageUrl: {
    type: String,
    required: true,
  },
  isDeleted: {
    // Soft delete flag: true means the product is deleted but still exists in the database
    type: Boolean,
    default: false,
  },
});

productSchema.index({ name: 1 });
productSchema.index({ description: 1 });
productSchema.index({ category: 1 });
productSchema.index({ price: 1 });
productSchema.index({ imageUrl: 1 });

export default mongoose.model("Product", productSchema);
