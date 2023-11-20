$(()=>{
    console.log('Jquery is running')
    // getAllUsers();
    $('#warning-cd').hide()
    $('#login-btn').on('click',(e)=>{
        login()
    })
})


function getAllUsers(){
    
        // console.log("excuted")
        $.ajax({
            url: 'http://localhost:4000/user', // Replace with your API endpoint
            method: 'GET',
            success: function(data) {
              console.log('Data received:', data);
              // Handle the data or update the UI here
            },
            error: function(error) {
              console.error('Error:', error);
              // Handle errors here
            }
          });

}

function create(){

        let email = $('#email-input').val()
        let password = $('#password-input').val()

        $.ajax({
        url: '/profile/create', // Replace with your API endpoint
        method: 'POST',
        data: {email, password},
        success: function(data) {
          console.log('Data received:', data);
          // Handle the data or update the UI here
          // Store cookie
          // $.cookie('Id',data.user._id)
          $.cookie('Id', data.user._id);
          window.location.replace("http://localhost:80/user/index")
        },
        error: function(error) {
          console.error('Error:', error);
          $('#warning-cd').show()
          $('#warning-text').html(error.responseJSON.message)


          setTimeout(()=>{
            $('#warning').hide()
          },5000)
          // Handle errors here
        }
        });
}