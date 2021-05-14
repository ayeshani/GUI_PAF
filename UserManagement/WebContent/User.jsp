<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    
   <%@page import="model.User"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>


		<link href="myStyle.css" rel="stylesheet" />
		<link rel="stylesheet" href="Views/bootstrap.min.css">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
		<script src="Components/jquery-3.5.0.min.js"></script>
		<script src="Components/User.js"></script>


</head>
<body>

<div class="container">
	
			<p class="font-weight-bold">
				<center>
					<h1><u><i><b>User/User Management - GadgetBadget</b></i></u></h1>
				</center>
			</p>
			<br><br>
			
			<fieldset>
	
				<legend><b>Add User Details</b></legend>
					<form id="USER" name="USER" class="border border-light p-5">
						
						<div class="form-outline mb-4">
						    <label class="form-label" for="form6Example3" class="col-sm-2 col-form-label col-form-label-sm">User ID:</label>
						    <input type="hidden" id="userCode" name="userCode">
						    <input type="text" id="userID" class="form-control" name="userID">						    
						</div>
						
						<div class="form-outline mb-4">
						    <label class="form-label" for="form6Example3" class="col-sm-2 col-form-label col-form-label-sm">User Name:</label>
						    <input type="text" id="userName" class="form-control" name="userName">						    
						</div>
						
						<div class="form-outline mb-4">
						    <label class="form-label" for="form6Example3" class="col-sm-2 col-form-label col-form-label-sm">User Type:</label>
						    <input type="text" id="userType" class="form-control" name="userType">						    
						</div>
						
						<div class="form-outline mb-4">
						    <label class="form-label" for="form6Example3" class="col-sm-2 col-form-label col-form-label-sm">User Address:</label>
						    <input type="text" id="userAddress" class="form-control" name="userAddress">						    
						</div>
						
						
											
						<br> 
						<div id="alertSuccess" class="alert alert-success"></div>
						<div id="alertError" class="alert alert-danger"></div>	
						<input id="btnSave" name="btnSave" type="button" value="Save" class="btn btn-primary btn-lg btn-block"> 
						
					</form>
				
							
			</fieldset>
			
			<br> 
			
			<div class="container" id="UserGrid">
				<fieldset>
					<legend><b>View User Details</b></legend>
					<form method="post" action="User.jsp" class="table table-striped">
						<%
						    User viewUser = new User();
							out.print(viewUser.readUser());
						%>
					</form>
					<br>
				</fieldset>
			</div>
		</div>

</body>
</html>