const compoundModel = require('../../../model/schema/schema')
    
async function getCompoundList(req,res){
    try{
        const responseOfGetCompoundList = await compoundModel.find();
        if(!responseOfGetCompoundList){
            res.status(400).send("msg: Error in fetching data")
        }
        
        res.send(responseOfGetCompoundList);        
    }catch(err){
        console.log(err);
        res.send("msg: ERROR")
    }
}

async function saveNewCompound(req,res){
    try{
        const responseOfSaveCompound = await compoundModel.create(req.body)
        if(!responseOfSaveCompound){
            return res.status(500).send("msg: Error in saving data")
        }
        
        return res.send(responseOfSaveCompound)
    }catch(err){
        console.log(err);
        return res.send("msg: ERROR")
    }
}

async function getCompoundDetails(req,res){
    try{
        const compoundId = req.query.id;
        const responseOfgetCompoundDetails = await compoundModel.findOne({_id:compoundId})
        if(!responseOfgetCompoundDetails){
            return res.status(400).send("msg: Error in fetching data")
        }
        
        return res.send(responseOfgetCompoundDetails)
    }catch(err){
        console.log(err);
        return res.send("msg: ERROR")
    }
}

async function updateCompound(req,res){
    try{
        const compoundId = req.query.id;
        const responseOfupdateCompound = await compoundModel.findOne({_id:compoundId})
        if(!responseOfupdateCompound){
            return res.status(400).send("msg: Error in fetching data")
        }
        
        return res.send(responseOfupdateCompound)
    }catch(err){
        console.log(err);
        return res.send("msg: ERROR")
    }
}

async function deleteCompound(req,res){
    try{
        const compoundId = req.query.id;
        const responseOfdeleteCompound = await compoundModel.findOneAndDelete({_id:compoundId})
        if(!responseOfdeleteCompound){
            return res.status(400).send("msg: Error in fetching data")
        }
        
        return res.send(responseOfdeleteCompound)
    }catch(err){
        console.log(err);
        return res.send("msg: ERROR")
    }
}

module.exports = {getCompoundList, saveNewCompound, getCompoundDetails, updateCompound, deleteCompound}