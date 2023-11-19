$(()=>{
    console.log('Jquery is running')
    // getAllUsers();

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

function login(){

        let email = $('#email-input').val()
        let password = $('#password-input').val()

        $.ajax({
        url: 'http://localhost:4000/user/login', // Replace with your API endpoint
        method: 'POST',
        data: {email, password},
        success: function(data) {
          console.log('Data received:', data);
          // Handle the data or update the UI here
          window.location.replace("http://localhost:80/user/login")
        },
        error: function(error) {
          console.error('Error:', error);
          // Handle errors here
        }
        });
}