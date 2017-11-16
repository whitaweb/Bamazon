var mysql = require("mysql");
var inquirer = require("inquirer");
var prompt = require("prompt");
var table = require("console.table");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "",
    database: "Bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
    // console.log("connected as id " + connection.threadId);
    displayProducts();
});


function displayProducts() {
    connection.query("SELECT * FROM Products", function(err, res) {
        console.log("Products Available on Bamazon:");
        console.log("-----------------------------")
        console.table(res);
        start();
    });


}



function start() {

    inquirer
        .prompt([

        {
            name: "action",
            type: "input",
            message: "Would you like to make a purchase? Yes/No",
            choices: ["Yes", "No"]
         }
        ]).then(function(answer) {
            if (answer.action === "Yes") {

                makePurchase();

            } else {

                console.log("Thank you for shopping!");
                connection.end();
            }

        });
    // body...
}



function makePurchase(user) {

    inquirer
        .prompt([
        	{
                name: "item",
                type: "input",
                message: "Please enter the item id?",
                validate: function(value) {
                    if (isNaN(value) === false) {
                        return true;
                    }
                    console.log("Please enter the a valid numerical ID.")
                    return false;
                }
            },

            {
                name: "amount",
                type: "input",
                message: "What quantity would you like to purchase?",
                validate: function(value) {
                    if (isNaN(value) === false) {
                        return true;
                    }
                    console.log("Please enter a numerical value.")
                    return false;
                }

            }
        ]).then(function(useranswer){
        	connection.query("SELECT * FROM Products WHERE Item_ID = ? ", useranswer.item, function(err,response){
                if (err) throw err;
                var stock = response[0].Stock_Quantity;
                var product = response[0].Product_Name;
        		console.log('\n You would like to buy ' + useranswer.amount + " " + product);
        		if(stock >= useranswer.amount){
                    var price = response[0].Price;
                    var cost = price * useranswer.amount;
                    console.log("Your total cost is $" + cost);
        			var updateQuantity = stock - useranswer.amount;
        			connection.query("UPDATE Products SET ? WHERE ?", [{Stock_Quantity: updateQuantity}, {Item_ID: response.item}], function (err,res){});
        			
        		}
        			else{

        				console.log("Sorry, our inventory is too low!");


        		}
        			
        		})

        	});

        		
        };
       