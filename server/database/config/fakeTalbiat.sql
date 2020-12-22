INSERT INTO restaurants (restaurantName, location, type) VALUES
('Mohamed Said Resturant', 'Gaza, Remal Street', 'Family Resturaunt'),
('Al-Dar Resturant', 'Gaza, Tal Al-hawa', 'Family Resturaunt'),
('Break Resturant', 'Gaza, Kateebah', 'Diner'),
('C House', 'Gaza, IUG', 'Cafe'),
('Breakfast', 'Gaza, Remal Street', 'Diner'),
('Al-Aafia Resturant', 'Gaza, Naser Street', 'Family Resturaunt');


INSERT INTO menus (menuName, restaurantID) VALUES
('pizza & meals', 1),
('Home cooked meals', 2),
('Diner Dishes', 3),
('Breakfast and Drinks', 4),
('Breakfast Sandwiches', 5),
('Meals for everyone', 6);


INSERT INTO meals (mealName, price, mealPic, menuID) VALUES
('Vegi Pizza',15,'https://d1bjorv296jxfn.cloudfront.net/s3fs-public/styles/recipes_header_image/public/772-Fresh-Vegetable-Pizza.jpg?itok=yxMGCA0b',1),
('Shawerma',7,'https://assets.cairo360.com/app/uploads/2016/11/article_original_11111_20161117_582dcc4c67636-700x323.jpg',1),
('Mesakhan',35,'https://i.ytimg.com/vi/SSb67_m0DZ4/maxresdefault.jpg',2),
('Mesahab',30,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD7--DWYb66yaMq8BDlnkwlDm-TWGs8aWI8w&usqp=CAU',2),
('Chicken Legs',20,'https://www.thespruceeats.com/thmb/NuK3sGch-h5EV0z283QrjV2A08o=/1500x844/smart/filters:no_upscale()/terris-crispy-fried-chicken-legs-3056879-10_preview-5b05ec40a474be00362260d7.jpeg',3),
('Beef Sandwich',10,'https://embed.widencdn.net/img/beef/wfbu8begjv/320x240px/three-way-crumbled-beef-sandwiches.tif?keep=c&u=7fueml',3),
('Sausage Cheese Sandwich',7,'https://images-gmi-pmc.edge-generalmills.com/a13027c6-6999-4641-a6d0-86aa938e02d5.jpg',4),
('Waffle Sandwich',10,'https://images-gmi-pmc.edge-generalmills.com/25728a20-f48a-4fb4-9b46-8f91e4469bd8.jpg',4),
('Eggs and beef Sandwich',10,'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Breakfast_sandwich.jpg/1200px-Breakfast_sandwich.jpg',5),
('Veggie Sandwich',7,'https://www.indianhealthyrecipes.com/wp-content/uploads/2016/05/vegetable-sandwich-recipe-500x447.jpg',5),
('Chinese Chicken',30,'https://easyrealfood.com/wp-content/uploads/2018/08/Easy-Chinese-Chicken-photo-e1534681035936.jpg',6),
('Nacho Pasta',30,'https://hips.hearstapps.com/ame-prod-goodhousekeeping-assets.s3.amazonaws.com/main/embedded/49769/nacho-pasta-bake.jpg',6);

INSERT INTO desserts (dessertName, price, dessertPic, menuID) VALUES
('Cheese Cake',15,'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2020%2F09%2F22%2F703268_original.jpg',1),
('Jelly',10,'https://img.bestrecipes.com.au/vxZsIK-D/br/2020/05/spanish-egg-syrup-pudding-957808-3.jpg',1),
('Ice Creame Cake',15,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw-dutO2tptGkPiDErU_9BQRD50AWYEMZCyw&usqp=CAU',2),
('Peanut Butter Pie',12,'https://i1.wp.com/www.thefierychef.com/blog/wp-content/uploads/2018/10/keto-peanut-butter-pie.jpg?resize=2048%2C1365&ssl=1',2),
('Molten Cake',15,'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2013%2F12%2F06%2Fmolten-chocolate-cake-FT-RECIPE0220.jpg',4),
('Cream Brownie',10,'https://d2gtpjxvvd720b.cloudfront.net/system/recipe/image/3152/default_hungry-girl-healthy-brownie-bottomed-ice-cream-cake-recipe-20190703-1630-31216-1862.jpg',4),
('Cupcake',5,'https://purewows3.imgix.net/images/articles/2019_11/best-desserts-of-2019-400.jpg?auto=format,compress&cs=strip',6),
('Banana Pudding',7,'https://dhfsbruih37bu.cloudfront.net/comfy/cms/pages/main_images/000/000/116/desktop/banana-pudding.jpg?1506963304',6);

INSERT INTO sideDishes (dishName, price, dishPic, menuID) VALUES
('chips',5,'https://img.apmcdn.org/4b2716626c9ff3f6e5dfebe520eb592c33cf1e7b/uncropped/941f50-splendid-table-french-fries.jpg',1),
('Dawali',10,'https://i.pinimg.com/originals/a6/f6/87/a6f687775bda0774f5c1134ab4254d64.jpg',1),
('chips',5,'https://img.apmcdn.org/4b2716626c9ff3f6e5dfebe520eb592c33cf1e7b/uncropped/941f50-splendid-table-french-fries.jpg',2),
('salad',5,'https://www.oetker.ca/Recipe/Recipes/oetker.ca/ca-en/baking/image-thumb__24580__RecipeDetailsLightBox/farmers-salad.jpg',2),
('chips',5,'https://img.apmcdn.org/4b2716626c9ff3f6e5dfebe520eb592c33cf1e7b/uncropped/941f50-splendid-table-french-fries.jpg',4),
('salad',5,'https://www.oetker.ca/Recipe/Recipes/oetker.ca/ca-en/baking/image-thumb__24580__RecipeDetailsLightBox/farmers-salad.jpg',4),
('chips',5,'https://img.apmcdn.org/4b2716626c9ff3f6e5dfebe520eb592c33cf1e7b/uncropped/941f50-splendid-table-french-fries.jpg',6),
('Dawali',10,'https://i.pinimg.com/originals/a6/f6/87/a6f687775bda0774f5c1134ab4254d64.jpg',6);

INSERT INTO drinks (drinkName,  price, menuID) VALUES
('tea',5,1),
('coke',3,1),
('tea',5,2),
('coke',3,2),
('tea',5,3),
('coke',3,3),
('tea',5,4),
('coffee',3,4),
('smoothie',3,4),
('coke',3,4),
('juice',3,4),
('tea',5,5),
('coke',3,5),
('tea',5,6),
('coke',3,6);