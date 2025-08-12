export function PostCard(post) {
  return `
    <div class="post" data-id="${post.id}">
      <h2>${post.title}</h2>
      <p>${post.content}</p>
      <button class="read-more">Read More</button>
    </div>
  `;
}
