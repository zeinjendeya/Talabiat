const bcrypt = require("bcrypt");
const boom = require("boom");

const {getCustomerByEmail, signupCustomerQuery} = require('../../../database/queries')

const signupCustomer = async (req, res, next) => {
  const {
    user: { name, email, password, location, phone, picture },
  } = req.body;

  try{
      const {rowCount} = await getCustomerByEmail();
      if(rowCount > 0){
          throw boom.conflict('email already exists');
      }

      const hashedPassword = await bcrypt.hash(password, 11);

      const {rows: [id]} = await signupCustomerQuery();

      res.status(201).json({ status: 201, message: "signed up successfully" });

  }catch(err){
    next(err);
  }

};

module.exports = signupCustomer;
