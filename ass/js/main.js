$(document).ready(function() {
	$('#search').click(function() {
		var target = document.getElementById('search-input').value;
		console.log(target);
		var xhr = new XMLHttpRequest();
		xhr.open("GET",'searchtor.php?name='+target,true);
		xhr.onreadystatechange = function(){
			console.log(xhr.readyState);
			if (xhr.readyState == 4) {
				$('#resforsearching').html(xhr.responseText);


			}
		}
		xhr.send();
	});
});