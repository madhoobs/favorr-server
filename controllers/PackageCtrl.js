const { Package } = require('../models')

const GetPackageByFavor = async (req, res) => {
  try {
    const packages = await Package.find({ favor: req.params.favorId })
    res.send(packages)
  } catch (error) {
    throw error
  }
}
const GetPackage = async (req, res) => {
  try {
    const package = await Package.findById(req.params.packageId)
    res.send(package)
  } catch (error) {
    throw error
  }
}

const CreatePackage = async (req, res) => {
  try {
    let package = { ...req.body }
    // Get favorID from params and add it to the new package
    package.favor = req.params.favorId
    let newPackage = await Package.create(package)
    res.send(newPackage)
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
      msg: 'Delete the Package',
      payload: req.params.package_id,
      status: 'Ok',
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetPackageByFavor,
  CreatePackage,
  UpdatePackage,
  DeletePackage,
  GetPackage,
}
