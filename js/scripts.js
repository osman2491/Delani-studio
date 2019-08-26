function myFunction() {
    document.getElementById("frm1").submit();
    alert('thanks, we recieved your request')
  }
  $(document).ready(function() {
      $("#firsts").click(function() {
          $("#design").toggle();
          $("#firsts").toggle();
      });
    $("#design").click(function() {
        $("#firsts").toggle();
        $("#design").toggle();
    });
});
  $(document).ready(function() {
      $("seconds").click(function() {
          $("#seconds").toggle();
          $("#development").toggle();
      });
      $("development").click(function() {
        $("#development").toggle();
        $("#seconds").toggle();
    });
});