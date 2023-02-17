 
<button onclick="createPost()">Create Post</button>
<button onclick="deletePost()">Delete Post</button>


const posts = [];

async function createPost() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    });
    const data = await response.json();
    posts.push(data);
    console.log('Post created:', data);
  } catch (error) {
    console.error(error);
  }
}

async function deletePost() {
  try {
    const postId = posts[0].id; 
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      method: 'DELETE'
    });
    const data = await response.json();
    posts.shift();
    console.log('Post deleted:', data);
  } catch (error) {
    console.error(error);
  }
}
