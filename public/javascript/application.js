$(document).ready(function() {
  $('#btn-list-contact').on('click', function() {
    $('.contact-list').show();
    $.ajax({                                            
      url: '/api/contacts',                                    
      dataType: 'json',                                 
      method: 'get',                                    
      success: function(contacts) {                        
        $.each(contacts, function(index, contact) {
          var trContent = ('<tr>' + '<td>' + contact.firstname + " " + contact.lastname + '</td>' + '<td>' + contact.email + '</td>' + '<td>' + contact.phone + '</td>' + '</tr>')
          var tr = $('.table-striped').append(trContent);
        });
        $('#btn-list-contact').hide();
      },
      failure: function(response) {                     
        alert("Error loading contacts.");
      }
    });
  })

});
