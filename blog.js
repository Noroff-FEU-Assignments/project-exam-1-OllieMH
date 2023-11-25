const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const h1 = document.querySelector("h1");
const blogText = document.querySelector(".blog-text");
const blogImg = document.querySelector(".blog-image");
const modal = document.querySelector(".modal");
const modalOverlay = document.querySelector(".modal-overlay");

async function fetchPost() {
	const response = await fetch(`https://www.omhille.one/wp-json/wp/v2/posts/${id}?_embed`);
	const data = await response.json();
	const post = data;
	const title = post.title["rendered"];
	const text = post.content["rendered"];
	const image = post._embedded["wp:featuredmedia"][0]["media_details"]["sizes"]["large"]["source_url"];
	const largeImg = post._embedded["wp:featuredmedia"][0]["media_details"]["sizes"]["large"]["source_url"];

	h1.innerHTML = title;
	blogText.innerHTML = text;
	blogImg.src = image;
	blogImg.onclick = function () {
		modal.style.display = "flex";
		modal.innerHTML = `<image src="${image}" class="modal-img">`;
		console.log(largeImg);
	};
	modal.onclick = function () {
		modal.style.display = "none";
	};
}

fetchPost();
