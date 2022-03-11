$(document).ready(function() {
  $("#dropdown1").hover(function() {
      $("#dropdownMenu1").show();
  });
  $("#dropdown1").mouseleave(function() {
      $("#dropdownMenu1").hide();
  });
  $("#dropdown2").hover(function() {
      $("#dropdownMenu2").show();
  });
  $("#dropdown2").mouseleave(function() {
      $("#dropdownMenu2").hide();
  });
  $("#dropdown3").hover(function() {
      $("#dropdownMenu3").show();
  });
  $("#dropdown3").mouseleave(function() {
      $("#dropdownMenu3").hide();
  });
  $("#dropdown4").hover(function() {
      $("#dropdownMenu4").show();
  });
  $("#dropdown4").mouseleave(function() {
      $("#dropdownMenu4").hide();
  });
  $("#dropdown5").hover(function() {
      $("#dropdownMenu5").show();
  });
  $("#dropdown5").mouseleave(function() {
      $("#dropdownMenu5").hide();
  });
  $("#toggleBtn").click(function() {
      $("#mobileMenu").slideToggle();
  });
  $("#menuGroup1").click(function() {
      $("#list1").slideToggle();
      $("#list2").slideUp();
      $("#list3").slideUp();
      $("#list4").slideUp();
      $("#list5").slideUp();
  });
  $("#menuGroup2").click(function() {
      $("#list2").slideToggle();
      $("#list1").slideUp();
      $("#list3").slideUp();
      $("#list4").slideUp();
      $("#list5").slideUp();
  });
  $("#menuGroup3").click(function() {
      $("#list3").slideToggle();
      $("#list2").slideUp();
      $("#list1").slideUp();
      $("#list4").slideUp();
      $("#list5").slideUp();
  });
  $("#menuGroup4").click(function() {
      $("#list4").slideToggle();
      $("#list2").slideUp();
      $("#list3").slideUp();
      $("#list1").slideUp();
      $("#list5").slideUp();
  });
  $("#menuGroup5").click(function() {
      $("#list5").slideToggle();
      $("#list2").slideUp();
      $("#list3").slideUp();
      $("#list4").slideUp();
      $("#list1").slideUp();
  });
});