import { Navbar } from './components/Navbar.js';
import { PostCard } from './components/PostCard.js';

// Inject Navbar
document.getElementById('navbar').innerHTML = Navbar();

// Sample Posts Data
const posts = [
  { id: 1, title: 'First Post', content: 'This is my first blog post.' },
  { id: 2, title: 'Second Post', content: 'Another post with more content.' }
];

// Render posts
const postList = document.getElementById('post-list');
postList.innerHTML = posts.map(PostCard).join('');

// Event Delegation
postList.addEventListener('click', (e) => {
  if (e.target.classList.contains('read-more')) {
    const postId = e.target.closest('.post').dataset.id;
    alert(`You clicked Read More on Post ID: ${postId}`);
  }
});
