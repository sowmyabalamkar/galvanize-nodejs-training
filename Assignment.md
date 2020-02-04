### Create an Express Js or Node JS server with below functionalities:
#### GET endpoint with "/companies/{company_name}/details?area={area_code}" -- company_name is a path parameter and area_code is a query parameter(integer)
             Log the request parameters into a file asynchronously
#### POST endpoint with "/companies" which will update address of the company
    POST Body: { 
			"company_id" :	 	500,
		            " company_name " : 	"XXC",
		            "address":			"qweqeqweqwe",
 }   
Read the post body and log it into a file or console.log.  
### Things to keep in mind:
        Validate the input parameters like length check and integer or string check.
        Send the response as below:	
                {	 
                “status_code”: 200/400/404/500,
                                    "message”: "Success or Error"
                }
