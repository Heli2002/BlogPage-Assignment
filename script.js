const blogForm = document.getElementById('blogForm');
const blogPosts = document.getElementById('blogPosts');

// Function to handle form submission
blogForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  // Get form data
  const formData = new FormData(blogForm);
  const title = formData.get('title');
  const author = formData.get('author');
  const content = formData.get('content');

  // Validate form data (basic validation)
  if (!title || !author || !content) {
    alert('Please fill in all fields');
    return;
  }

  // Create HTML for the new blog post
  const postHTML = `
    <div class="post">
      <h3>${title}</h3>
      <p><strong>Author:</strong> ${author}</p>
      <p>${content}</p>
      <hr>
    </div>
  `;

  // Append new blog post to the blogPosts div
  blogPosts.insertAdjacentHTML('beforeend', postHTML);

  // Clear form fields after submission
  blogForm.reset();
});
