var button = `
<button style="
  background-color: grey;
  margin-top: 10px;
  border: none;
  color: white;
  padding: 10px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-family: brandon-grotesque, sans-serif;
  font-size: 16px;
  cursor: pointer;
">Play Now</button>
`
$('#category-select').change(function() {
  var selectedCategory = $('#category-select').val();
  if (selectedCategory == "show-all"){
    $(".column .text button").fadeOut(500).promise().done(function(){
      $(this).remove();
      $(".column").animate({width: "450px"}, 1000, function(){
        $(".column, .divider").fadeIn(500)
      });
    });
  }
  else{
    $(".column:not(." + selectedCategory + "), .divider").fadeOut(500).promise().done(function(){
      $(".column." + selectedCategory).animate({width: "90%"}, 1000, function(){
        $(button).hide().appendTo(".column." + selectedCategory + " .text").fadeIn(500);
      });
    });
  }
});