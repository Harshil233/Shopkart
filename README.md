# Ecommerce (React) Coding Assessment Completed

## Demo Video of it:
Video URL: https://drive.google.com/file/d/1Qd_RhQsBXYDV8PZV_F8c6nXXD5cgh16c/view?usp=sharing

## Setup:
1) Run `npx json-server --watch db.json --port 3001` to run the json server locally on the port 3001
2) Run `npm install` to install all the dependencies
3) Run `npm start` to run the react app

## Functionalities:

1) I have added user authentication using the JSON server 
- So basically, I have created a register and login page. If the user's data is not present in the JSON server, then the user will have to register first, and as soon as the user registers, the user will 
be redirected to login page, and then the user will be able to login if he/she enters the correct credentials. Also, user can't login or register if the input field is empty.

2) I have used `Redux` for managing the state
- Whenever the user adds or removes any product in the cart, then it's state is managed by Redux.

3) Add to Cart and Buy now functionality 
- Whenever the user adds any product to the cart, then the cart value is increased in the navbar also.

4) Product total functionality
- The total amount of the item present in the cart is also being calculated.

5) Product Description
- As soon as the user clicks on the specific product, then the complete description of that product is shown to the user.

6) Clean and neat UI 
- I have tried to match the UI design as per the attached screenshots.

# Improvements in the submission:

1) In the cart page, the cart count should have been improved (should be changed with + and - also)
2) Login method could have been improved and handled more properly
3) By mistake, order placed icon is different, so that could have been improved

# Difference, if I was allocated more time:

1) I would have used redux for fetching the products from the JSON server, as well as the authentication of the user could have also been done with redux if there was more time.
2) Adding the favourite items functionality and storing it in the JSON server could have been added.
3) Could have make it properly responsive, currently there are some alignment issues for small device screen.


