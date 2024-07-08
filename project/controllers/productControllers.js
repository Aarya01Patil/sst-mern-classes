const ProductModel = require("../models/product");

exports.createProducts = async (req, res) => {
    try{
        const newProduct = await ProductModel.create({
            product_name: req.body.product_name,
            product_price: req.body.product_price,
            isInStock: req.body.isInStock,
            product_description: req.body.product_description,
            product_category: req.body.product_category,
        });
        return res.status(201).json({ message: "Product Created", product: newProduct });
    }
    catch(err){
        console.error("Error creating product:", err);
        return res.status(500).json({ message: "Failed to create product", error: err.message });
    }
}

exports.getAllProducts = async(req , res)=>{
    try{
        const allProducts = await ProductModel.find();
        return res.json(allProducts);
    }
    catch(err){
        console.error("Error fetching all products:", err);
        return res.status(500).json({ message: "Failed to fetch products", error: err.message });
    }
}

exports.getProductByID = async(req , res)=>{
    try{
        const product = await ProductModel.findById(req.params.id);
        if(!product){
            return res.status(404).json({message: "Product not found"});
        }
        return res.json(product);
    }
    catch(err){
        console.error("Error fetching product by ID:", err);
        return res.status(500).json({ message: "Failed to fetch product", error: err.message });
    }
}

exports.updateProduct = async(req , res)=>{
    try {
        const updatedProduct = await ProductModel.findByIdAndUpdate
        (req.params.id, req.body, { new: true });
        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }
        return res.json(updatedProduct);
    }
    catch(err){
        console.error("Error updating product:", err);
        return res.status(500).json({ message: "Failed to update product", error: err.message });
    }
}

exports.deleteProduct = async(req , res)=>{
    try{
        const deletedProduct = await ProductModel.findByIdAndDelete(req.params.id);
        if(!deletedProduct){
            return res.status(404).json({message: "Product not found"});
        }
        return res.json(deletedProduct);
    }
    catch(err){
        console.error("Error deleting product:", err);
        return res.status(500).json({ message: "Failed to delete product", error: err.message });
    }
}