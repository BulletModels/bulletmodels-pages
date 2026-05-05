document.querySelectorAll('.filters').forEach((filters) => {
  filters.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-filter]');
    if (!button) return;
    const value = button.dataset.filter;
    filters.querySelectorAll('button').forEach((item) => item.classList.toggle('active', item === button));
    document.querySelectorAll('.talent-card').forEach((card) => {
      card.hidden = value !== 'all' && card.dataset.category !== value;
    });
  });
});
