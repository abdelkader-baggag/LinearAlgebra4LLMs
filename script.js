document.getElementById('copy-bib').addEventListener('click', function () {
  var btn = this;
  var text = document.getElementById('bibtex').innerText;
  navigator.clipboard.writeText(text).then(function () {
    btn.textContent = 'Copied';
    setTimeout(function () { btn.textContent = 'Copy BibTeX'; }, 1500);
  });
});
