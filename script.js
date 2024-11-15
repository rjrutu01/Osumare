const Items = document.querySelectorAll('.list');

Items.forEach(item => {
  const header = item.querySelector('.list_head');
  const content = item.querySelector('.list_content');   


  header.addEventListener('click', () => {
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
    const arrow = header.querySelector('.arrow');
    arrow.classList.toggle('up');
  });
});