const { default: mongoose } = require("mongoose");

const { Schema } = mongoose;

const KittenSchema = new Schema({
    name: String
});

const Kitten = mongoose.model("kitten", KittenSchema);

module.exports = Kitten