package com;


import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.parser.Parser;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;



import model.User;
//For REST Service
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
//For JSON
import com.google.gson.*;
//For XML
import org.jsoup.*;
import org.jsoup.parser.*;
import org.jsoup.nodes.Document;
@Path("/User" )

public class UserService {

	User userObj = new User();
	@GET
	@Path("/")
	@Produces(MediaType.TEXT_HTML)
	public String readUser()
	{
		return userObj.readUser();
	}
	@POST
	@Path("/")
	@Consumes(MediaType.APPLICATION_FORM_URLENCODED)
	@Produces(MediaType.TEXT_PLAIN)
	public String insertUser(@FormParam("userID") String userID,
	@FormParam("userName") String userName,
	@FormParam("userType") String userType,
	@FormParam("userAddress") String userAddress )
	{
	String output = userObj.insertUser(userID, userName, userType, userAddress);
	return output;
	}

	@PUT
	@Path("/")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.TEXT_PLAIN)
	public String updateUser(String userData)
	{
	//Convert the input string to a JSON object
	JsonObject userObject = new JsonParser().parse(userData).getAsJsonObject();
	//Read the values from the JSON object
	String userCode = userObject.get("userCode").getAsString();
	String userID = userObject.get("userID").getAsString();
	String userName = userObject.get("userName").getAsString();
	String userType = userObject.get("userType").getAsString();
	String userAddress = userObject.get("userAddress").getAsString();

	String output = userObj.updateUser( userCode, userID, userName , userType , userAddress);
	return output;
	}

	@DELETE
	@Path("/")
	@Consumes(MediaType.APPLICATION_XML)
	@Produces(MediaType.TEXT_PLAIN)
	public String deleteUser(String userData)
	{
	//Convert the input string to an XML document
	Document doc = Jsoup.parse(userData, "", Parser.xmlParser());

	String userCode = doc.select("userCode").text();
	String output = userObj.deleteUser(userCode);
	return output;
	}	
	
}
