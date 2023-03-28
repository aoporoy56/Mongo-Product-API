const mongoose = require("mongoose");

categoreSchema = mongoose.Schema({
    id : {
        type : Number,
        required : [true, "Category Id Needed"],
        unique : [true, "Please Id Change"]
    },
    name : {
        type : String,
        required : [true, "Category Name Empty"]
    }
})
Category  = mongoose.model("Cateogry",categoreSchema);
module.exports = Category;