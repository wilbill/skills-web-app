$(()=>{

})

function connectMe(e){
    const id = $(e).attr('data-target')
    console.log(id)
    $.ajax({
        url: '/mailer/connect', // Replace with your API endpoint
        method: 'POST',
        data: {
            sender: id
        },
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