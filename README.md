# sequelized Burger

eat-a-burger application

To open application - go to https://limitless-wildwood-95532.herokuapp.com

For USERS: What can the user do on this application?

  - The user can submit a burger by entering a burger's and customer's name to the 'Burger' and 'Customer' textarea then clicking the 'Add burger' button.
  - The burger is then added to the database then displayed to the 'Ready to Eat' column.
  - The user can click the devour button after entering the devourer's name to move a burger to the 'In the Belly' column.
  - The 'In the Belly' column displays who stole the burger.
  - Repeat previous steps to eat more!

For DEVELOPERS: How does the application's backend work?

  - The application uses JawsDB Heroku addon to save the burger names.
  - The application uses sequelize ORM to query the database.
  - Once a burger name is submitted, a new row is added to the database with the burger name, an id, a boolean called 'devoured' which is defaulted to false, and a timestamp.
  - If a user clicks the devour button, the respective burger is updated in the database with it's devoured variable changed to true.