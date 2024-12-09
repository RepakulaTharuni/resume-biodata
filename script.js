document.addEventListener('DOMContentLoaded', () => {
  // Add the 'no-print' class to elements dynamically created
  const dynamicContent = document.querySelectorAll('.dynamic-content');
  dynamicContent.forEach(el => {
    el.classList.add('no-print');
  });

  // Example for rendering dynamic content
  const contentContainer = document.querySelector('.page-content');
  const dynamicDiv = document.createElement('div');
  dynamicDiv.className = 'dynamic-content';
  dynamicDiv.innerHTML = `
    <h2>Dynamic Content</h2>
    <p>This content will not appear in print.</p>
  `;
  contentContainer.appendChild(dynamicDiv);
});
