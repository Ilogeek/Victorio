/* We add * symbol before and after the search */
$("#validate").on('click',function(e) {
    e.preventDefault();

    var pathname = window.location.pathname;

    $('#filter').val('*'+ $('#filter').val() +'*');
    $('#searchbar').submit();
});

// grab the 2nd child and add the parent class. tr:nth-child(2)
document.getElementsByTagName('tr')[1].className = 'parent';

// add icon when clicked on an ascending / descending filter
var url = document.URL;
var thelements = document.getElementsByTagName("th");

if(url.indexOf("?C=N;O=D") > -1)
{
	thelements[1].innerHTML = thelements[1].innerHTML + " &#9650; <a class='cancel' href='"+window.location.href.match(/^[^\#\?]+/)[0]+"'>[x]</a>";
}
else if(url.indexOf("?C=N;O=A") > -1)
{
	thelements[1].innerHTML = thelements[1].innerHTML + " &#9660; <a class='cancel' href='"+window.location.href.match(/^[^\#\?]+/)[0]+"'>[x]</a>";
}
else if(url.indexOf('?C=M;O=D') > -1)
{
	thelements[2].innerHTML = thelements[2].innerHTML + " &#9660; <a class='cancel' href='"+window.location.href.match(/^[^\#\?]+/)[0]+"'>[x]</a>";
}
else if(url.indexOf('?C=M;O=A') > -1)
{
	thelements[2].innerHTML = thelements[2].innerHTML + " &#9650; <a class='cancel' href='"+window.location.href.match(/^[^\#\?]+/)[0]+"'>[x]</a>";
}
else if(url.indexOf('?C=S;O=D') > -1)
{
	thelements[3].innerHTML = thelements[3].innerHTML + " &#9660; <a class='cancel' href='"+window.location.href.match(/^[^\#\?]+/)[0]+"'>[x]</a>";
}
else if(url.indexOf('?C=S;O=A') > -1)
{
	thelements[3].innerHTML = thelements[3].innerHTML + " &#9650; <a class='cancel' href='"+window.location.href.match(/^[^\#\?]+/)[0]+"'>[x]</a>";
}
else if(url.indexOf('?P=') > -1)
{
	
	var lines = document.getElementsByTagName("tr");
	if(lines.length == 2) {
		document.getElementsByClassName("wrapper")[0].innerHTML = "<div style='text-align:center; width:100%; display:block; font-size:20px;'>Search result for \"<strong>"+location.search.split('*')[1]+"</strong>\",  <a class='cancel' href='"+window.location.href.match(/^[^\#\?]+/)[0]+"'>Cancel</a>.</div>" + document.getElementsByClassName("wrapper")[0].innerHTML + "<div style='width:100%; text-align:center; display:block; font-weight:bold; font-size:20px; margin-bottom:60px;'>No result found</div>";
	}
	else
	{
		document.getElementsByClassName("wrapper")[0].innerHTML = "<div style='text-align:center; width:100%; display:block; font-size:20px;'>Search result for \"<strong>"+location.search.split('*')[1]+"</strong>\",  <a class='cancel' href='"+window.location.href.match(/^[^\#\?]+/)[0]+"'>Cancel</a>.</div>" + document.getElementsByClassName("wrapper")[0].innerHTML;
	}
}