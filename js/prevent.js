$(function() {
		
	var totalDeFilhos = $("#lista").children().size();
	
	if (totalDeFilhos > 3) {
		$("#demo").removeClass("altura");
	}
	  
	$("#lista").keypress(function(event){
	  	totalDeFilhos = $("#lista").children().size();
        
        if (totalDeFilhos > 3) {
          	$('#demo').removeClass('altura');
        }
    })
	  
});