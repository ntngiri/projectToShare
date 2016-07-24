Employee management system-
----------------------------------------------------------------------------------
Technology Used - HTML5, CSS3, Angularjs, NodeJS(dummy format)
----------------------------------------------------------------------------------
Bower - front end resource management
npm - mongoose, express, body parser
----------------------------------------------------------------------------------

Views - index.html -> main landing page with header and footer
	  - home.html  -> Page for listing employee details and form for search
	  - addEdit.html -> add and edit employee details page
	  - viewDetails.html -> confirmation page after add/edit
----------------------------------------------------------------------------------
Controllers - MainCtrl -> Controls Page for listing employee details and form for search
			- addEditController -> Controls add and edit employee details page
			- viewDetailsCtrl -> Controls confirmation page after add/edit
-----------------------------------------------------------------------------------
Directives - delhiveryTable -> creating table and managing delete and modify functionality
		   - dropDown -> drop down with callbacks
		   - myDate -> for custom validation on date and date range
------------------------------------------------------------------------------------
Service - dataService-> service to get data from server and save data to server 
			(haven't used any http calls, just a demo service) 

	Used local storage in service to store updates data on client machine
	Used ng-route and ng-view for routing.

--------------------------------------------------------------------------------------
Steps to run application -

1. Download folder and go to directory in terminal
2. Run bower install to get the front end libraries
3. run npm install to get all the backend dependencies
4. Start server  - node server.js
5. Visit localhost:8080

---------------------------------------------------------------------------------------

Functionalities completed - 

1. Main Page will dispaly all the employee listing
2. Search will run on search button click as have use ng-model-option(for submit)
3. Add employee will open a new add employee page with various input fields and drop down.
4. Drop down with callbacks implemented
5. Required, pattern and custom validations using directives implemented on add and edit employee page
6. Used ng-message for Validation errors
7. Back and confirm functionalities with Prefilling employee data.

What more can be achieved -
1. Can develop a generic custom directive to generate html irrespective of the level of nesting in json provided and can use that to generate html on edit and view details page



	

