window.addEventListener('DOMContentLoaded', (event) => {
    const design1 = document.getElementById('design-1');
    const design2 = document.getElementById('design-2');
  
    function switchDesign() {
      const viewportWidth = window.innerWidth;
      if (viewportWidth >= 720) { // Desktop view
        design1.style.display = 'block';
        design2.style.display = 'none';
      } else { // Mobile view
        design1.style.display = 'none';
        design2.style.display = 'block';
      }
    }
    switchDesign();
  });
