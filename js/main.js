/* zaznacza od pierwszej 
var span = $("span");
span.each(function(index, element) {
	if(index % 2 == 0) {
		$(element).css('color', 'red');
	};
});*/
// zaznacza od drugiej
$("span:odd").css('color','red');

// dodaj button
var paragraphs = $('p');
paragraphs.each(function(index, element) {
var button = '<button class="btn" data-tmp="' + index + '">Click me</button>'
$(element).append(button) 
});
// dodanie eventu
$("button").click(function(){
	alert($(this).attr("data-tmp"));
});