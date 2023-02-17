<!-- HTML -->
<button onclick="createPost()">Create Post</button>
<button onclick="deleteLastPost()">Delete Last Post</button>
<div id="posts"></div>
<script> 
    
</script>
let posts = [];
let lastActivityTime = null;

function createPost() {
  const newPost = { title: `Post ${posts.length + 1}` };
  const createPostPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(newPost);
      resolve(newPost);
    }, 1000);
  });

  const updateLastUserActivityTimePromise = updateLastUserActivityTime();

  Promise.all([createPostPromise, updateLastUserActivityTimePromise])
    .then(([post, activityTime]) => {
      console.log(`Post created: ${post.title}, Last Activity Time: ${activityTime}`);
      console.log(`All Posts: `, posts);
    })
    .catch(error => console.error(error));
}

function deleteLastPost() {
  const deleteLastPostPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (posts.length === 0) {
        reject('ERROR: Array is empty');
      } else {
        const deletedPost = posts.pop();
        resolve(deletedPost);
      }
    }, 1000);
  });

  deleteLastPostPromise
    .then(deletedPost => {
      console.log(`Post deleted: ${deletedPost.title}`);
      console.log(`All Posts: `, posts);
    })
    .catch(error => console.error(error));
}

function updateLastUserActivityTime() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      lastActivityTime = new Date();
      resolve(lastActivityTime);
    }, 1000);
  });

  return promise;
}
