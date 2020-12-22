const { getRestaurants } = require("../../database/queries/index");
const { boomify } = require("../utils/index");

const handleRestaurants = (req, res, next) => {
  getRestaurants()
    .then(({ rows, rowCount }) => {
      if (!req.userId) {
        next(boomify(401, " not authorized"));
      } else if (rowCount === 0) {
        next(boomify(404, " restaurant not found"));
      } else {
        res.status(200).json({ status: 200, data: rows });
      }
    })
    .catch(next);
};

module.exports = handleRestaurants;
