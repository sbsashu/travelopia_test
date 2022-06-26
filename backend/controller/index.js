const {Product} = require("../model/Product")
const {validateEmail} = require("../utils")
module.exports = {
    addDetail: async (req, res) => {
       let { 
       name,
       email,
       country,
       noofperson,
       currency 
    } = req.body;
     
    if(!validateEmail(email)) {
        return res.json({message: "Email is not valid"})
    }

    let checkEmail = await Product.findOne({email: req.body.email});

    if(checkEmail) {
        return res.status(302).json({message: "Email already exists"})
    } 

    if(email && name,
    email &&
    country &&
    noofperson &&
    currency ) {
        req.body.currency = currency * noofperson;
        let result = new Product(req.body);
        await result.save()
        if(result.error) {
            return res.json(result.error);
        }

        res.json(result);
    }
    },
    getDetails: async (req, res) => {
        
        const result = await Product.find({});
        res.json(result)
    }
}