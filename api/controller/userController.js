import User from "../model/UserModel.js";

export const create = async(req, res)=>{
    try {
        const userData = new User(req.body);
        const {name, email, phone} = userData;

        if(!name || !email || !phone){
            return res.status(400).json({message:"All fields are required."})
        }
    
        const userExist = await User.findOne({
            $or: [{ phone }, { email }],
          });
        if(userExist){
            return res.status(400).json({message: "User already exists."});
        }
        const savedUser = await userData.save();
        res.status(200).json(savedUser);

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server error." }); 

    }
};


export const fetch = async (req, res) =>{
    try {
        const users = await User.find();
        if(users.length ==0){
            return res.status(404).json({message:"User Not Found."});
        }
        res.status(200).json(users);
        
    } catch (error) {
        res.status(500).json({ error: "Internal Server error." });   
    }
};

export const update = async(req, res) =>{
    try {
        const id = req.params.id;
        const userExist = await User.findOne({_id:id});
        if (!userExist){
            return res.status(400).json({message:"User Not Found"});
        }

        const updateUser = await User.findByIdAndUpdate(id, req.body, {new:true});
        res.status(201).json(updateUser);
    } catch (error) {
        res.status(500).json({ error: "Internal Server error." });
        
    }
};