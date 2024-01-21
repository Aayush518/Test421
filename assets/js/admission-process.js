// Admisison Process Page 
let viewMore = document.querySelectorAll('.view-more');
let viewMoreBtn = document.querySelector('.moreProcessBtn');
let admission_processes = document.querySelectorAll('.adProcess');

function viewMoreProcess() {
    viewMoreBtn.innerHTML = viewMoreBtn.innerHTML === 'View Less' ? 'View More' : 'View Less';

    if(viewMoreBtn.innerHTML === 'View More') {
        viewMoreBtn.classList.remove('viewMoreBtn--active');
        admission_processes.forEach((item) => {
            item.classList.remove('visible')
        });
    }
    else {
        viewMoreBtn.classList.add('viewMoreBtn--active');
        admission_processes.forEach((item) => {
            item.classList.add('visible')
        });
    }

    viewMore.forEach((item) => {
        // Toggle between 'show' and 'hide' classes
        item.classList.toggle('show');
        item.classList.toggle('hide');
    });
}
