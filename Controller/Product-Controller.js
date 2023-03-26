const Product = require('../Model/Product-Model');

exports.getAll= async (req,res)=>{
    const list = await Product.find({});
    res.send(
        list
    )
}
exports.getSingle = async (req,res) =>{
    const singleData = await Product.findOne({id : req.params.id});
    res.send(singleData);
}
exports.add = async (req,res)=>{
    const data = req.body;
    const newProduct = new Product(data);
    const result = await newProduct.save();
    res.send(result)
}
exports.update = async (req,res)=>{
    console.log(req.body)
    const {id, name, price, cateogry, details} = req.body;
    try{
        const result = await Product.updateOne({id : req.params.id},{$set :{
            name : name,
            price : price,
            cateogry : cateogry,
            details : details
        }})
        res.send(result);
    }catch(data){
        console.log(data.message)
        res.send(data);
    }
}
exports.deleteSingle = async (req, res) =>{
    const deleteData = await Product.findOneAndDelete({id : req.params.id});
    res.send(deleteData);
}