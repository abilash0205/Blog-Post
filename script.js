const createBlogCard = (title, date, description, image) => {
    return `
          <div class="card col" style="font-size: 12px; border: none; background: #dec0d2; text-align: justify;"> 
              <p class="text-sm" style="color: rgb(128, 128, 128);">${date.toGMTString()}</p>
              <h3 style="font-size: 16px;">${title}</h3>
              <p>${description}</p>
              <img src="${image}" alt="Post Image" id="image-link">
  
              <a class="text-primary" href="" style="text-decoration: none;">Read More</a>

              <div class="alert alert-success alert-dismissible" role="alert">
              Post Added Successfully!
              <button class="btn-close" data-bs-dismiss="alert"></button>
          </div>
          </div>
      `;
  };
  
  const posts = JSON.parse(localStorage.getItem("posts"));
  
  posts.forEach((post) => {
    const postHtml = createBlogCard(post.title, new Date(), post.description, post.image);
    const postsContainer = document.getElementById("blog-tile-container");
    const postDiv = document.createElement("div");
    postDiv.innerHTML = postHtml;
  
    postsContainer.appendChild(postDiv);
  });