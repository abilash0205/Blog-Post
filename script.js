const createBlogCard = (title, date, description) => {
    return `
          <div class="card col" style="font-size: 12px; border: none;"> 
              <p class="text-sm" style="color: rgb(128, 128, 128);">${date.toGMTString()}</p>
              <h3 style="font-size: 16px;">${title}</h3>
              <p>${description}</p>
  
              <a class="text-primary" href="" style="text-decoration: none;">Read More</a>
          </div>
      `;
  };
  
  const posts = JSON.parse(localStorage.getItem("posts"));
  
  posts.forEach((post) => {
    const postHtml = createBlogCard(post.title, new Date(), post.description);
    const postsContainer = document.getElementById("blog-tile-container");
    const postDiv = document.createElement("div");
    postDiv.innerHTML = postHtml;
  
    postsContainer.appendChild(postDiv);
  });