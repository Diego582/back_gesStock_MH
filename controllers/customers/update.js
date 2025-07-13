import Customer from "../../models/Customer.js";


export default async (req, res, next) => {
    try {
        let updatedCustomer = await Customer.findByIdAndUpdate(
            req.params._id, 
            req.body,
            {new:true}
            ).select()
            if (updatedCustomer){
                return res.status(200).json({
                    success: true,
                    message: 'Customer updated',
                    response: updatedCustomer
                })
            }else{
                return res.status(400).json({
                    success: false,
                    message: 'not updated',
                    response: null
                })
            }
    } catch (error) {
        next(error)
    }
}