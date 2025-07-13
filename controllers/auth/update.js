import User from "../../models/User.js";
import bcrypt from "bcrypt";

export default async (req, res, next) => {
    try {
        const userId = req.params._id; 
        const { mail, newPassword } = req.body;

        const userToUpdate = await User.findById(userId);
        if (!userToUpdate) {
            return res.status(404).json({
                success: false,
                message: 'User not found',
                response: null
            });
        }

        if (newPassword) {
            const hashedPassword = await bcrypt.hash(newPassword, 10);
            userToUpdate.password = hashedPassword;
        }

        if (mail) {
            userToUpdate.mail = mail;
        }

        await userToUpdate.save();
        //await userToUpdate.save();

        return res.status(200).json({
            success: true,
            message: 'User updated',
            response: {user:{
                _id:userToUpdate._id,
                name:userToUpdate.name,
                lastName:userToUpdate.lastName,
                mail: userToUpdate.mail,
                photo: userToUpdate.photo}
            ,token:req.header('authorization')}
        });

    } catch (error) {
        next(error);
    }
};