function onClickMenu(){
	document.getElementById("menu").classList.toggle("change");
	document.getElementById("nav").classList.toggle("change");
	
	document.getElementById("menu-bg").classList.toggle("change-bg");
}


//fixa bugg i menyn när man klickar
window.addEventListener("hashchange", function() { scrollBy(0, -200) });

