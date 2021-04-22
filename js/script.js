$(document).ready(function() {  
  $(".icon").click(function(){
    $(this).toggle();
    $(this).siblings().toggle();
  });
  $(".info").click(function(){
    $(this).siblings().toggle();
    $(this).toggle();
  });
  $(".portfolio").hover(
    function () {
      $(this).addClass("fade-portfolio-image");
      $(this).children(".name").show();
    },
    function () {
      $(this).removeClass("fade-portfolio-image");
      $(this).children(".name").hide();

    }
  );
  $("#mc-embedded-subscribe-form").submit(function(event) {
    let userName = $("#mce-FNAME").val();
    let userEmail =$("#mce-EMAIL").val();
    let userMessage =$("#mce-MMERGE3").val();

  if (userName.length === 0 ) {
    alert("Enter your name before submitting!");
    throw new Error;  //Abort javascript execution from here
  }
  else if (userEmail.length === 0) {
    alert("Enter your email address before submitting!");
    throw new Error;  //Abort javascript execution from here
  }
  else if (userMessage.length === 0) {
    alert("Enter your message or comment before submitting!");
    throw new Error;  //Abort javascript execution from here
  }
  else {
    alert("Hello " +userName +", we have received your message. Thank you for reaching out to us.")
  }
  $("#mce-responses").show();
  event.preventDefault();
  let form = document.getElementsByName("mc-embedded-subscribe-form")[0]; 
  form.reset();  // Clear form fields
  return false; // Prevent page refresh 
  })
});