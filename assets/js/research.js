document.addEventListener('DOMContentLoaded', function () {
  var search = document.getElementById('publication-search');
  var papers = Array.from(document.querySelectorAll('.publication-list li'));
  var count = document.getElementById('publication-count');
  function filterPapers() {
    var query = search.value.trim().toLowerCase();
    var shown = 0;
    papers.forEach(function (paper) {
      paper.hidden = !paper.textContent.toLowerCase().includes(query);
      if (!paper.hidden) shown++;
    });
    count.textContent = shown + ' / ' + papers.length + ' papers';
    document.getElementById('no-papers').hidden = shown > 0;
  }
  if (search) { search.addEventListener('input', filterPapers); filterPapers(); }
  var toast = document.getElementById('cite-toast');
  var toastTimer;
  document.querySelectorAll('.cite-btn').forEach(function (button) {
    button.addEventListener('click', async function () {
      var bib = document.getElementById('bib-' + button.dataset.bib);
      if (!bib) return;
      try {
        await navigator.clipboard.writeText(bib.textContent.trim());
        toast.textContent = 'BibTeX copied';
      } catch (error) {
        bib.style.display = 'block';
        bib.style.whiteSpace = 'pre-wrap';
        bib.scrollIntoView({block: 'center'});
        toast.textContent = 'Select the displayed BibTeX to copy it.';
      }
      toast.classList.add('visible');
      clearTimeout(toastTimer);
      toastTimer = setTimeout(function () { toast.classList.remove('visible'); }, 3000);
    });
  });
});
