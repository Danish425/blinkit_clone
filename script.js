document.querySelectorAll('.addButton').forEach(button => {
    button.addEventListener('click', () => {
        alert('Item added to cart!');
    });
});
document.querySelector('.footerColumn h3').addEventListener('click', function() {
    const moreSection = this.nextElementSibling;
    if (moreSection.style.display === 'none' || moreSection.style.display === '') {
        moreSection.style.display = 'block';
    } else {
        moreSection.style.display = 'none';
    }
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});