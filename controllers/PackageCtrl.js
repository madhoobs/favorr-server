const { Package } = require('../models')
const {Favor} = require('../models')

const GetPackage = async (req, res) => {
  try {
    const packages = await Package.find({})
    res.send(packages)
  } catch (error) {
    throw error
  }
}

const CreatePackage = async (req, res) => {
  try {
    const { payload } = res.locals
    let package = { ...req.body }
    package.favor = payload.id
    let newPackage = await Package.create(package)
    // Add the new order to the user's order list
    await Favor.findById(package.favor).then((favor) => {
      favor.packages.push(newPackage._id)
      user.save().catch((err) => {
        console.log('Adding package to favor failed. ' + err)
      })
    })
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
      msg: 'Delete the Package',
      payload: req.params.package_id,
      status: 'Ok',
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
