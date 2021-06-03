const connection = require('../../config/connection');

const signupCustomerQuery = () => {
    const sql = {
        text: '',
        values: []
    }

    return connection.query(sql);
}

module.exports = signupCustomerQuery;