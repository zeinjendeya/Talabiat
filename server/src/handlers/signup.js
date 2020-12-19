const {validationSchema, boomify} = require('../utils')

const signup = (req, res, next) =>{
    const {username, name, password, confirmedPassword} = req.body;
    validationSchema.validateAsync({username, name, password, confirmedPassword})
    .catch((err)=>{
        throw boomify(400, err.details[0].message);
    })
}

module.exports = signup;