
// huw's test comment

$(window).on('beforeunload', function(){
  $(window).scrollTop(0);
});

$(document).ready(function () {
    $("textarea").css("background-color", "#ffffe5");

    $("#conbutton").on("click", function() {
  		console.log("clicked");
  		var comment = $("textarea").val().toUpperCase();
    	console.log("comment");
    	$("#visible-comment").html(comment);
  		return false; 		
	}); // end click log 

	$("textarea").on("keyup", function() {
		console.log("keyup");
		var charCount = $("textarea").val().length;
		console.log(charCount); 
		$("#char-count").html(charCount);
		if(charCount > 50) {
			$("#char-count").css("color", "red").text("I think you've said enough.");
		} else {
			$("#char-count").css("color", "black");
		};
	}); // end char count

	// var rows = $(".my-row");
	// console.log(rows); 
	// for(var i=0; i<rows.length; ++i) {
	// 	if (i%2===0) {
	// 		$(rows[i]).css("background-color", "#ededed");
	// 	};		
	// };	

	// for(var i=0; i<myWork.length; ++i) {
	// 	$("#" + i).css("background-image", "url("+myWork[i].pic+")");
	// };

	
	
	//$(function () {
   // $(window).resize(function () {
       // $('.hero').height($(window).height());
  //  });

  $(window).bind('scroll', function() {
    var navHeight = $(window).height() - 50;
    if ($(window).scrollTop() > navHeight) {
      $('.navbar').addClass('navbar-fixed');
    } else {
      $('.navbar').removeClass('navbar-fixed');
    }
  });

    $(window).bind('scroll', function() {
    var navHeight = $(window).height() - 50;
    if ($(window).scrollTop() > navHeight) {
      $('.soc').addClass('footer-fixed');
    } else {
      $('.soc').removeClass('footer-fixed');
    }
  });

//work
// work section
for(var i = 0; i < works.length; ++i ) {
  $("#work2").append("\
    <div class='col-sm-6 col-md-6'>\
    <a href='#' class='work-img'>\
      <img class='img-responsive' src='" + works[i].pic + "'>\
      <span class='info'><p class='proj-title'>Title:</p> [WORK TITLE] </span>\
     </a>\
    </div>\
  ");

};

$(".work-img").mouseenter(function(){
  $(".info", this).show();
}).mouseleave(function(){
  $(".info", this).hide();
});




}); // end document
