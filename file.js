document.addEventListener('DOMContentLoaded', function() {
    const pages = document.querySelectorAll('.page');
    let currentPage = 0;
  
    function showPage(pageIndex) {
      pages.forEach(function(page, index) {
        if (index === pageIndex) {
          page.classList.add('active');
        } else {
          page.classList.remove('active');
        }
      });
    }
  
    document.getElementById('nextPageBtn').addEventListener('click', function() {
      currentPage = (currentPage + 1) % pages.length;
      showPage(currentPage);
    });
  
    // Show the first page initially
    showPage(currentPage);
  });
  