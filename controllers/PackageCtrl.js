const { Package } = require("../models")

const GetPackage = async (req, res) => {
  try {
    const packages = await Package.find({})
    res.send(packages)
  } catch (error) {
    throw error
  }
}

 const CreatePackage = async (req, res) =>{
  try {
    const package = await Package.create({ ...req.body })
    res.send(package)
  } catch (error) {
    throw error
  }
 }

 const UpdatePackage = async (req, res) => {
   try {
     const package = await Package.findByIdAndUpdate(
       req.params.package_id,
       req.body,
       {
         new: true,
       }
     )
     res.send(package)
   } catch (error) {
     throw error
   }
 }

 const DeletePackage = async (req, res) => {
   try {
     await Package.deleteOne({ _id: req.params.package_id })
     res.send({
       msg: "Delete the Package",
       payload: req.params.package_id,
       status: "Ok",
     })
   } catch (error) {
     throw error
   }
 }
 
module.exports = {
  GetPackage,
  CreatePackage,
  UpdatePackage,
  DeletePackage,
}
