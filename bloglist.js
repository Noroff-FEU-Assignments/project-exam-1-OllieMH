const blogContainer = document.querySelector(".blogcontainer");
const btn = document.querySelector(".bloglist-btn");
let i = 1;
let url = `https://www.omhille.one/wp-json/wp/v2/posts?_embed`;

async function getBlogPosts() {
	const response = await fetch(url);
	const posts = await response.json();
	for (let i = 0; i < posts.length; i++) {
		const post = posts[i];
		const title = post.title["rendered"];
		const image = post._embedded["wp:featuredmedia"][0]["media_details"]["sizes"]["thumbnail"]["source_url"];
		blogContainer.innerHTML += `<div class="postbox">
        <a href="blog.html?id=${post.id}">
        <h2>${title}</h2>
        <img src="${image}" alt=""></img>
        </a>
        </div>`;
	}
}
getBlogPosts();

btn.onclick = function () {
	i += 1;
	url = `https://www.omhille.one/wp-json/wp/v2/posts?_embed&page=${i}`;
	getBlogPosts();
};
