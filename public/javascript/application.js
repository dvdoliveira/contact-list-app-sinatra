$(document).ready(function() {
  $('#btn-list-contact').on('click', function() {
    $('.contact-list').show();
    $.ajax({                                            
      url: '/contacts',                                    
      dataType: 'json',                                 
      method: 'get',                                    
      success: function(contacts) {                        
        $.each(contacts, function(index, contact) {
          var tr = $('.table-striped').append('<tr>' + '<td>' + contact.firstname + " " + contact.lastname + '</td>' + '<td>' + contact.email + '</td>' + '<td>' + contact.phone + '</td>' + '</tr>');
        });
      },
      failure: function(response) {                     
        alert("Error loading contacts.");
      }
    });
  })  
});
