const Customer = require("../model/customer")
const { upSingleFile } = require("../service/fileService")

const getCustomer = (req, res) => {
    res.status(200).json({
        mss: 'success'
    })
}

const getCustomerById = (req, res) => {
    res.status(200).json({
        mss: 'success'
    })
}

const createCustomer = (req, res) => {
    res.status(200).json({
        mss: 'success'
    })
}

const updateCustomer = (req, res) => {
    res.status(200).json({
        mss: 'success'
    })
}

const delteteCustomer = (req, res) => {
    res.status(200).json({
        mss: 'success'
    })
}
const uploadSingleFile = async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    let result = await upSingleFile(req.files.image);
    console.log(">>> check result: ", result)


    return res.send("ok single")

}

module.exports = { getCustomer, getCustomerById, createCustomer, delteteCustomer, updateCustomer, uploadSingleFile }