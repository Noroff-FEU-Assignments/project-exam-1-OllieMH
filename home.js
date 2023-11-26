const carousel = document.querySelector(".carousel-posts");

async function getBlogPosts() {
	const response = await fetch(`https://www.omhille.one/wp-json/wp/v2/posts?per_page=20&_embed`);
	const posts = await response.json();
	carousel.innerHTML = "";
	for (let i = 0; i < posts.length; i++) {
		const post = posts[i];
		const title = post.title["rendered"];
		const image = post._embedded["wp:featuredmedia"][0]["media_details"]["sizes"]["large"]["source_url"];
		carousel.innerHTML += `<div class="caro-post">
        <a href="blog.html?id=${post.id}" class="caro-link">
        <h2 class="caro-title">${title}</h2>
        <img src="${image}" class="caro-img" alt=""></img>
        </a>
        </div>`;
	}
}
getBlogPosts();
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const mediaQuery = window.matchMedia("(min-width: 768px)");
let scrollLength = 335;

if (mediaQuery.matches) {
	scrollLength = 750;
}
prevBtn.addEventListener("click", () => {
	carousel.scrollLeft -= scrollLength;
});
nextBtn.addEventListener("click", () => {
	carousel.scrollLeft += scrollLength;
});
