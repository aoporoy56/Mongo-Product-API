const Product = require('../Model/Product-Model');

exports.getAll= async (req,res)=>{
    const list = await Product.find({});
    if(list.length > 0)
        res.json({
            result : 1,
            message : "Data Get",
            data : list
        })
    else
        res.json({
            result : 0,
            message : "No Data",
            data : list
        })
}
exports.getSingle = async (req,res) =>{
    const singleData = await Product.findOne({id : req.params.id});

    if(singleData)
        res.json({
            result : 1,
            message : "Data Get",
            data : singleData
        })
    else
        res.json({
            result : 0,
            message : "No Data",
            data : singleData
        })
}
exports.search = async (req,res) => {
    const searchResult = await Product.find({name : {$regex : ".*"+req.params.search+".*"}})
    if(searchResult)
        res.json({
            result : 1,
            message : "Data Get",
            data : searchResult
        })
    else
        res.json({
            result : 0,
            message : "Data Get",
            data : searchResult
        })
}
exports.add = async (req,res)=>{
    try{
        const newProduct = new Product(req.body);
        const result = await newProduct.save();
        res.json({
            result : 1,
            message : "Data Added",
            data : result
        })
    }catch(error){
        res.json({
            result : 0,
            message : "Failed",
            data : error.message
        })
    }
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
        res.json({
            result : 1,
            message : "Data Updated",
            data : result
        })
    }catch(error){
        res.json({
            result : 0,
            message : "Failed",
            data : error.message
        })
    }
}
exports.deleteSingle = async (req, res) =>{
    const deleteData = await Product.deleteOne({id : req.params.id});
    if(deleteData.deletedCount > 0)
        res.json({
            result : 1,
            message : "Data Deleted",
            data : deleteData
        })
    else
        res.json({
            result : 0,
            message : "Failed",
            data : deleteData
        })
        
}