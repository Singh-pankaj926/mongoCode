const express = require('express');
const app = express();
const router = express.Router();
const validators = require('../controller/utility/validators/validatorsIndex');
const {getCompoundList, saveNewCompound, getCompoundDetails, updateCompound, deleteCompound} = require('../controller/service/Compound/compoundService')

// // Router level middleware
// router.use((req, res, next) => {
//     console.log(`I will write route level, first middleware here`);
//     next();
// }, (req, res, next) => {
//     console.log(`I will write route level, third middleware here`);
//     next();
// });


router.get('/getCompoundList', (req, res) => {
    getCompoundList(req, res);
    // res.send("reached the desired point ")
})

// validators.getList,

router.get('/getCompoundDetails', (req, res) => {
    getCompoundDetails(req, res);
    // res.send("reached the desired point ")
})
// validators.getDetails,

router.post('/insertNewCompound', (req, res) => {
    saveNewCompound(req,res);
})
// validators.saveCompoundDetails,

router.patch('/editCompundDetails', (req, res) => {
    updateCompound(req,res);
})
// validators.updateCompundDetails,

router.delete('/deleteCompound', (req, res) => {
    deleteCompound(req,res);
})
// validators.deleteCompundDetails,


module.exports = router


