## MVC pattern
: Model-View-Controller (MVC)
# 1. routes
define all possible urls and their respective controllers
# 2.controllers 
contain the callback function which is made by arrow function
syntax to handle request from client side, it takes two parameters req(request object), res(response ).
It returns a response back to user's browser or API callers based on what they requested in URL
# 3. Database connect
connectDB function

# 4. USermodel
save the data of the user here
based on this user model we will create the functionality of login and register

# 5. controller function and routes
1. authController and also a route for this i.e authRoutes.js which contain login and register
2. authController contain the callback function in authroutes ..named registerController

# 6. middleware ->
next function ko hm kehte hia middleware ...isme jo bhi function hoga jabtak next call nhi hoga  uske baad ki cheez execute nhi hogi

1. authMiddleware
iske madad se hum koi bhi route ko protect kar skte hai .
jabatk ki hmare us route ko token nhi milega or vo token successfully verify nhi hoga tab tak code execute nhi hoga or error show karega .

# 7. INVENTORY MODEL

now we have to create an inventory -> for this we create inventoryRoutes just like authRoutes.


## NOW REACT WORK