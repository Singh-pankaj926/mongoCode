const {checkSchema, validationResult} = require('express-validators');

const getList = async(req,res,next) => {
    console.log("inside validation");
    await checkSchema(({
        'skip': {
            isEmpty: true,
            errorMessage: "Skip is mandatory field",
            isInt: true,
            errorMessage: "Skip value should be a positive number",
            withMessage: "Skip value should be a positive number",
            isLength: {
                options: { 
                    min:0,
                    max:25,
                },                
                errorMessage: "Skip value should be in range 0 to 25"
            }
        },
        'limit': {
            optional: true,
            isInt: true,
            errorMessage: "Skip value should be a positive number",
            withMessage: "Skip value should be a positive number",
            isLength: {
                options: { 
                    min:0,
                    max:25,
                },                
                errorMessage: "Skip value should be in range 0 to 25"
            }
        }
    })['query']).run(req)

    next();

    console.log("outside validation");
};

module.exports = {
    getList,
    // getDetails,
    // saveCompoundDetails,
    // updateCompundDetails,
    // deleteCompundDetails
}