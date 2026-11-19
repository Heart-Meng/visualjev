const citation = document.querySelector('.citation-box pre').textContent;
document.getElementById('copyCitation').addEventListener('click', async (event) => {
  await navigator.clipboard.writeText(citation);
  event.target.textContent = 'Copied';
  setTimeout(() => { event.target.textContent = 'Copy citation'; }, 1600);
});
