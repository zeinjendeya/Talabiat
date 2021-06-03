const connection = require('../../config/connection');

const getCustomerByEmail = () => {
    const sql = {
        text: '',
        values: []
    }

    return connection.query(sql);
}

module.exports = getCustomerByEmail;