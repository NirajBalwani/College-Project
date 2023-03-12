import express from "express";
import Auth from '../controllers/auth.js'
import User from "../models/User.js";
import bcrypt from 'bcrypt';
// import { verifyUser } from "../services/validate.js";
const router = express.Router();
const JWT_SECRET = "MohammedRizwanMohammedRizwanMohammedRizwan";

router.post("/register", Auth.register)
router.post("/login", Auth.login)
router.post("/dashboard/adminlogin", Auth.adminLogin)
router.post("/add-user", async (req, res) => {
    try {
        const user = await User(req.body);

        const newUser = await user.save();
        return res
            .status(201)
            .json({ msg: "Your account has been created ", newUser });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: "Internal Server Error" })
    }
})

router.put("/update-user", async (req, res) => {
    try {
        console.log(req.body);
        const id = req.body.id
        if (req.body.password) {
            if (req.body.password === req.body.confirmPassword) {
                const salt = await bcrypt.genSalt(10);
                const hash = await bcrypt.hash(req.body.password, salt);
                const filter = { _id: id };
                const update = {
                    $set: {
                        firstName: req.body.firstName,
                        lastName: req.body.lastName,
                        email: req.body.email,
                        password: hash,
                        confirmPassword: req.body.confirmPassword
                    }
                }
                const updatedUser = await User.updateOne(filter, update)
                console.log(updatedUser);
                return res.status(201).json({ msg: "User Updated ", updatedUser })
            }
        }
        else {
            const filter = { _id: id };
            const update = {
                $set: {
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: req.body.email,
                }
            }
            const updatedUser = await User.updateOne(filter, update)
            console.log(updatedUser);
            return res.status(201).json({ msg: "User Updated ", updatedUser })
        }

    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: "Internal Server Error" })
    }
})

router.delete("/delete-user", async (req, res) => {
    try {
        const id = req.body.id
        await User.findByIdAndDelete(id);
        return res.status(200).json({ msg: "User Deleted Successfully" })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: "Internal Server Error" })
    }
})

router.get("/fetch-one-user/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.find({ _id: id })
        return res.status(200).json({ user })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: "Internal Server Error" })
    }
})

router.get("/get-all-users", async (req, res) => {
    try {
        const users = await User.find()
        return res.status(200).json({ users })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: "Internal Server Error" })
    }
})

export default router;

