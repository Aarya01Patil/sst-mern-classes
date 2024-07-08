const userModel = require('../models/user');

// Create a new user
exports.createUser = async (req, res) => { 
    try {
        const newUser = await userModel.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            created_At: req.body.created,
        });
        return res.status(201).json({ message: "User Created", user: newUser });
    } catch (err) {
        console.error("Error creating user:", err);
        return res.status(500).json({ message: "Failed to create user", error: err.message });
    }
}

// Get all users
exports.getAllUsers = async (req, res) => {
    try {
        const allUsers = await userModel.find();
        return res.json(allUsers);
    } catch (err) {
        console.error("Error fetching all users:", err);
        return res.status(500).json({ message: "Failed to fetch users", error: err.message });
    }
}

// Get user by ID
exports.getUserByID = async (req, res) => {
    try {
        const user = await userModel.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.json(user);
    } catch (err) {
        console.error("Error fetching user by ID:", err);
        return res.status(500).json({ message: "Failed to fetch user", error: err.message });
    }
}

// Update user by ID
exports.updateUser = async (req, res) => {
    try {
        const updatedUser = await userModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.json(updatedUser);
    } catch (err) {
        console.error("Error updating user:", err);
        return res.status(500).json({ message: "Failed to update user", error: err.message });
    }
}

// Delete user by ID
exports.deleteUser = async (req, res) => {
    try {
        const deletedUser = await userModel.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.json(deletedUser);
    } catch (err) {
        console.error("Error deleting user:", err);
        return res.status(500).json({ message: "Failed to delete user", error: err.message });
    }
}

// Login user
exports.loginUser = async (req, res) => {
    try {
        const user = await userModel.findOne({ email: req.body.email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        if (user.password !== req.body.password) {
            return res.status(401).json({ message: "Invalid Credentials" });
        }
        return res.json({ message: "Login Successful" });
    } catch (err) {
        console.error("Error logging in user:", err);
        return res.status(500).json({ message: "Login failed", error: err.message });
    }
}

// Logout user (example function)
exports.logoutUser = async (req, res) => {
    // Perform logout operations here if needed
    return res.json({ message: "Logout Successful" });
}
