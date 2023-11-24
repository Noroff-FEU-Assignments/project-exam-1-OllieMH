const carousel = document.querySelector(".carousel-posts");

async function getBlogPosts() {
	const response = await fetch(`https://www.omhille.one/wp-json/wp/v2/posts?per_page=20&_embed`);
	const posts = await response.json();
	carousel.innerHTML = "";
	for (let i = 0; i < posts.length; i++) {
		const post = posts[i];
		const title = post.title["rendered"];
		const image = post._embedded["wp:featuredmedia"][0]["media_details"]["sizes"]["medium"]["source_url"];
		carousel.innerHTML += `<div class="caro-post">
        <a href="blog.html?id=${post.id}">
        <h2>${title}</h2>
        <img src="${image}""></img>
        </a>
        </div>`;
	}
}
getBlogPosts();

const carouselPosts = [...document.querySelectorAll(".carousel-posts")];
const nextBtn = [...document.querySelectorAll(".next-btn")];
const prevBtn = [...document.querySelectorAll(".prev-btn")];

carouselPosts.forEach((post, i) => {
	let containerDimensions = post.getBoundingClientRect();
	let containerWidth = containerDimensions.width;
	prevBtn[i].addEventListener("click", () => {
		post.scrollLeft -= containerWidth;
	});
	nextBtn[i].addEventListener("click", () => {
		post.scrollLeft += containerWidth;
	});
});
