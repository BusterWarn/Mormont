function source(src, string) {
			document.getElementById('img01').src = src;
			document.getElementById('caption').innerHTML = string;
		}



function openModal(el) {
    var imgSrc = el.src;
    var getAlt = el.alt;
    
    source(imgSrc, "<p>" + getAlt + "</p>")
    
    document.getElementById('leModal').style.display = "block";
}

function closeModal() {
			  document.getElementById('leModal').style.display = "none";
};