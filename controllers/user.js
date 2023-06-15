import { User } from "../models/user.js";

const getAllUsers = async (req, res) => {
    const users = await User.find({});
    res.json({
        success: true,
        users
    });
};

const addUser = async (req, res) => {
    const { name, email, password } = req.body;
    console.log(req.query);
    await User.create({
        name,
        email,
        password
    });

    res.status(201).cookie("ecom", "ajio").json({
        success: true,
        message: 'Registered successfully'
    });
};

const getUserBySpecialId = (req, res) => {
    res.json({
        success: true,
        message: "just joking"
    })
};

const getUserById = async(req, res)=>{
    const {id} = req.params;
    const user = await User.findById(id);
    console.log(req.params);
    res.json({
        success: true,
        user: user
    }); 
};

export { getAllUsers, addUser, getUserById, getUserBySpecialId};