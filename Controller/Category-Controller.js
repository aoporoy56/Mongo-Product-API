const Category = require("../Model/Category-Model");


exports.getAll = async (req, res) => {
    const list = await Category.find({});
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

exports.singleOne = async (req, res) =>{
    const singleData = await Category.find({id : req.params.id});
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

exports.add = async (req, res) => {
    try{
        const newCategory = new Category(req.body);
        const result = await newCategory.save();
        res.json({
            result : 1,
            message : "Data Added",
            data : result
        });
    }catch(error){
        res.json({
            result : 0,
            message : "Failed",
            data : error.message
        })
    }
}

exports.update = async (req, res) => {
    const {id, name} = req.body;
    
    try{
        const result = await Category.updateOne({id : id},{$set : {
            id : id,
            name : name
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

exports.deleteOne = async (req, res) =>{
    const deleteData = await Category.deleteOne({id : req.params.id});
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