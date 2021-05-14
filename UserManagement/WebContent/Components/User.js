/**
 * 
 */
 
 //hide alert
$(document).ready(function() {

 

    $("#alertSuccess").hide();
    $("#alertError").hide();
    $("#hidUserCodeSave").val("");
    $("#USER")[0].reset();
});

 

$(document).on("click", "#btnSave", function(event) {

 

    // Clear alerts---------------------
    $("#alertSuccess").text("");
    $("#alertSuccess").hide();
    $("#alertError").text("");
    $("#alertError").hide();
    
    // Form validation-------------------
    var status = validateItemForm();
    if (status != true) {
        $("#alertError").text(status);
        $("#alertError").show();
        return;
    }
    
    // If valid------------------------
    var type = ($("#userCode").val() == "") ? "POST" : "PUT";

 

    $.ajax({
        url : "UserAPI",
        type : type,
        data : $("#USER").serialize(),
        dataType : "text",
        complete : function(response, status) {
            //console.log(status);
            onItemSaveComplete(response.responseText, status);
            window.location.reload(true);
        }
    });

 

});

 

function onItemSaveComplete(response, status) {
    
    if (status == "success") {
        
        var resultSet = JSON.parse(response);
        
        if (resultSet.status.trim() == "success") {
            
            $("#alertSuccess").text("Successfully saved.");
            $("#alertSuccess").show();
            $("#UserGrid").html(resultSet.data);
            
        } else if (resultSet.status.trim() == "error") {
            
            $("#alertError").text(resultSet.data);
            $("#alertError").show();
        }
    } 
    else if (status == "error") {
        
        $("#alertError").text("Error while saving.");
        $("#alertError").show();
        
    } else {
        
        $("#alertError").text("Unknown error while saving..");
        $("#alertError").show();
    }
    
    $("#userCode").val("");
    $("#USER")[0].reset();
}

 

$(document).on("click", ".btnRemove", function(event) {
    
    $.ajax({
        url : "UserAPI",
        type : "DELETE",
        data : "userCode=" + event.target.value,
        dataType : "text",
        complete : function(response, status) {
            onItemDeleteComplete(response.responseText, status);
            window.location.reload(true);
        }
    });
});

 

function onItemDeleteComplete(response, status) {
    
    if (status == "success") {
        
        var resultSet = JSON.parse(response);
        
        if (resultSet.status.trim() == "success") {
            
            $("#alertSuccess").text("Successfully deleted.");
            $("#alertSuccess").show();
            $("#UserGrid").html(resultSet.data);
            
        } else if (resultSet.status.trim() == "error") {
            
            $("#alertError").text(resultSet.data);
            $("#alertError").show();
        }
        
    } else if (status == "error") {
        
        $("#alertError").text("Error while deleting.");
        $("#alertError").show();
        
    } else {
        
        $("#alertError").text("Unknown error while deleting..");
        $("#alertError").show();
    }
}

 

// UPDATE==========================================
$(document).on("click",".btnUpdate",function(event)
        {
            $("#userCode").val($(this).closest("tr").find('td:eq(0)').text());
            $("#userID").val($(this).closest("tr").find('td:eq(1)').text());
            $("#userName").val($(this).closest("tr").find('td:eq(2)').text());
            $("#userType").val($(this).closest("tr").find('td:eq(3)').text());
            $("#userAddress").val($(this).closest("tr").find('td:eq(3)').text());
                  
        });

 


// CLIENTMODEL=========================================================================
function validateItemForm() {
    
    // User Code
    if ($("#userID").val().trim() == "") {
        return "Please insert user ID.";
    }
    
    // User Name
    if ($("#userName").val().trim() == "") {
        return "Please insert User Name.";
    }
    
    // User Type
    if ($("#userType").val().trim() == "") {
        return "Please insert user Type.";
    }
    
    // User address
    if ($("#userAddress").val().trim() == "") {
        return "Please insert User Address.";
    }

    return true;
}