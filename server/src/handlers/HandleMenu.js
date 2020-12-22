const {
  getMenu,
  getMeal,
  getSideDish,
  getDrink,
  getDessert,
} = require("../../database/queries/index");
const { boomify } = require("../utils/index");

const handleMenu = (req, res, next) => {
  getMenu(req.params.restaurantID)
    .then(({ rows, rowCount }) => {
      if (!req.userId) {
        next(boomify(401, " not authorized"));
      } else if (rowCount === 0) {
        next(boomify(404, " restaurant not found"));
      } else {
        const food = {};
        getMeal(rows[0].id)
          .then(({ rows, rowCount }) => {
            if (rowCount === 0) {
              next(boomify(404, "no meals found"));
            } else {
              food.meal = rows;
            }
          })
          .then(() => {
            getSideDish(rows[0].id).then(({ rows, rowCount }) => {
              if (rowCount === 0) {
                next(boomify(404, "no side dishes found"));
              } else {
                food.sideDishes = rows;
              }
            });
          })
          .then(() => {
            getDessert(rows[0].id).then(({ rows, rowCount }) => {
              if (rowCount === 0) {
                next(boomify(404, "no desserts found"));
              } else {
                food.desserts = rows;
              }
            });
          })
          .then(() => {
            getDrink(rows[0].id).then(({ rows, rowCount }) => {
              if (rowCount === 0) {
                next(boomify(404, "no drinks found"));
              } else { 
                food.drinks = rows;
                res.status(200).json({ status: 200, data: food });
              }
            });
          })
          .catch(next); 
      }
    })
    .catch(next);
};

module.exports = handleMenu;
