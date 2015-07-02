$(document).ready(function() {
  // Show all contacts on page load
  var load_contacts = function() {
    $(".contact-list").show();
    $.ajax({                                            
      url: "/api/contacts",                                    
      dataType: "json",                                 
      method: "get",                                    
      success: function(contacts) {                        
        $.each(contacts, function(index, contact) {
          var trContent = ("<tr>" + "<td>" + contact.firstname + " " + contact.lastname + "</td>" + "<td>" + contact.email + "</td>" + "<td>" + contact.phone + "</td>" + "</tr>")
          var tr = $(".table-striped").append(trContent);
        });
        $("#btn-list-contact").hide();
      },
      failure: function(response) {                     
        alert("Error loading contacts.");
      }
    });
  };

  load_contacts();

    // Reset New Contact form after contact is added
  var resetForm = function(){
    $.each($("#add-contact-form input"), function(index, value){
      $(value).val("");
    });
  };

  // on submit, add new contact to database
  $("#add-contact-form").on("submit", function(e){
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: "/api/contact",
      data: $("#add-contact-form").serialize(),
      success: function(data){
        data=JSON.parse(data);
        $(".table-striped").append("<tr>" + "<td>" + data["firstname"] + " " + data["lastname"] + "</td>" + "<td>" + data["email"] + "</td>" + "<td>" + data["phone"] + "</td>" + "</tr>");
        $("#myModal").modal("hide");
        resetForm();
      }
    });
  });
});
