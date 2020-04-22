$('#category-select').change(function() {
  var selectedCategory = $('#category-select').val();
  if (selectedCategory == "show-all"){
    $(".column").animate({width: "450px"}, 500, function(){
        $(".column, .divider").fadeIn(500)
        $(".next").fadeIn(500);
      });
  }
  else{
    $(".column:not(." + selectedCategory + "), .divider").fadeOut(500).promise().done(function(){
      $(".column." + selectedCategory).animate({width: "90%"}, 500);
      $(".prev").fadeOut(500);
      $(".next").fadeOut(500);
    });
  }
});

//carousel for the hori-scroll
$(document).ready(function(){$(".prev").hide();})
$(".prev").click(function(){
  var left = $("#categories .hori-scroll").scrollLeft();
  var min = Math.max(0, left-500)
  $("#categories .hori-scroll").animate({scrollLeft: min}, 500).promise().done(function(){
  //show the next button scrolled left
  if ($("#categories .hori-scroll").scrollLeft() > 0){
    $(".next").fadeIn();
  }
  //hide the prev button when reached the left of the page
  if ($("#categories .hori-scroll").scrollLeft() <= 0)
    $(".prev").fadeOut();
  });
})

$(".next").click(function(){
  var left = $("#categories .hori-scroll").scrollLeft();
  var width = $("#categories .hori-scroll").outerWidth();
  var max = Math.min(width, left+500)
  var offset = $(".hori-scroll")[1].scrollWidth - width;
  $("#categories .hori-scroll").animate({scrollLeft: left+500}, 500).promise().done(function(){
    //show the prev once srolled right
    if ($("#categories .hori-scroll").scrollLeft() > 0){
      $(".prev").fadeIn();
    }
    //hide the next button when reached the right of the page
    if ($("#categories .hori-scroll").scrollLeft() >= offset){
      $(".next").fadeOut();
    }
  });

})

