import { Router } from "express";
import Product from "../models/Product.js";

export const productRouter = new Router();

/**
 * GET /products - Fetching Products (Exclude Soft-Deleted Items)
 */
productRouter.get("/", async (req, res) => {
    try {
        // Fetch all products that are not marked as deleted (isDeleted: false)
        const product = await Product.find({ isDeleted: false });
        console.log("fetched products:", product);

        if (product.length === 0) {
            return res.status(404).send("No products found!");
        }
        res.json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error!" });
    }
});

/**
 * POST /products - Add new product
 */
productRouter.post("/", async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
});

/**
 * GET /products/all - fetch all products
 */
productRouter.get("/all", async (req, res) => {
    try {
        // Fetch all products, including those marked as deleted (isDeleted: true)
        // This route might be restricted to admin users only
        const allProducts = await Product.find(); // No filter applied

        res.json(allProducts);
    } catch (error) {
        console.error("Error fetching all products:", error);
        res
            .status(500)
            .json({ message: "Server error while fetching all products" });
    }
});

/**
 * GET /products/:id - Get product by ID
 */
productRouter.get("/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id); // get product by id
        res.json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
});

/**
 * PATCH /products/:id - Update or Edit product id
 */
productRouter.patch("/:id", async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id, // The ID of the product to update
            req.body, // The data to update (only the fields sent in the request)
            { new: true }
        ); // Return the updated document instead of the original

        res.json(updatedProduct);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
});

/**
 * DELETE /products/:id - delete product id
 */
productRouter.delete("/:id", async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndUpdate(req.params.id, {
            isDeleted: true,
        }); // Perform a soft delete by setting the isDeleted field to true
        if (!deletedProduct) return res.status(404).send("Product Not found!");
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
});

/**
 * Restore a Soft-Deleted Product /products/:id/restore
 */
productRouter.patch("/:id/restore", async (req, res) => {
    try {
        const productId = req.params.id;

        // Restore a soft-deleted product by setting the isDeleted field back to false
        const restoredProduct = await Product.findByIdAndUpdate(
            productId,
            { isDeleted: false },
            { new: true } // Return the updated product
        );

        // Check if the product exists
        if (!restoredProduct) {
            return res
                .status(404)
                .json({ message: "Product not found or already restored" });
        }

        // Respond with the restored product
        res.json(restoredProduct);
    } catch (error) {
        console.error("Error restoring product:", error);
        res
            .status(500)
            .json({ message: "Server error while restoring the product" });
    }
});
