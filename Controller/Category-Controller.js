const Category = require("../Model/Category-Model");


exports.getAll = async (req, res) => {
    const list = await Category.find({});
    res.send(list);
}

exports.singleOne = async (req, res) =>{
    const singleData = await Category.find({id : req.params.id});
    res.send(singleData);
}

exports.add = async (req, res) => {
    const newCategory = new Category(req.body);
    const result = await newCategory.save();
    res.send(result);
}

exports.update = async (req, res) => {
    const {id, name} = req.body;
    const result = await Category.updateOne({id : id},{$set : {
        id : id,
        name : name
    }})
    res.send(result);
}

exports.deleteOne = async (req, res) =>{
    const result = await Category.deleteOne({id : req.params.id});
    res.send(result);
}