function source(src, string) {
			document.getElementById('img01').src = src;
			document.getElementById('caption').innerHTML = string
		}
		
function openModal(wut) {
	switch (wut) {
		case 1: 
			source("src/pelttest.png", "<p>shiiieeet</p>");
			break;
		case 2: 
			source("src/stolen1.jpg", "<p>DAaaawwg</p>");
			break;
		case 3:
			source("src/stolen2.jpg","<p>My homie</p>");
			break;
		case 4: 
			source("src/stolen3.jpg","<p>we shoot dees ballas baam</p>");
			break;
		case 5: 
			source("src/stolen4.jpg","<p>tricky question</p>");
			break;
		default:
			alert("cheeky bugger");
			break;
	}
			document.getElementById('leModal').style.display = "block";
		};
		
		function closeModal() {
			  document.getElementById('leModal').style.display = "none";
		};