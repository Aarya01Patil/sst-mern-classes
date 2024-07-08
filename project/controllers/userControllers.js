const userModel = require('../models/user');

exports.createUser = async (req, res) => { 
    try {
        const newUser = await userModel.create({
            user_name: req.body.user_name,
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

exports.getAllUsers = async (req, res) => {
    try {
        const allUsers = await userModel.find();
        return res.json(allUsers);
    } catch (err) {
        console.error("Error fetching all users:", err);
        return res.status(500).json({ message: "Failed to fetch users", error: err.message });
    }
}

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

