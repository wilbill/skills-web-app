$(()=>{
    console.log('Jquery is running')
    // getAllUsers();

    $('#submit').on('click',(e)=>{
        signup()
    })
})


function signup(){

    let email = $('#email').val()
    let password = $('#password').val()
    let username = $('#username').val()

    $.ajax({
    url: 'http://localhost:4000/user/create', // Replace with your API endpoint
    method: 'POST',
    data: {email, password,username},
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