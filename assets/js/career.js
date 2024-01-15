// Career Page
var vacancies = document.querySelectorAll('.vacancy');
if(vacancies.lenth==0)
{
    document.querySelector('.no-vacancy').style = "display: block !important; transition: all 0.5s ease-in-out;";
}
else
{
    document.querySelector('.no-vacancy').style = "display: none !important; transition: all 0.5s ease-in-out;";
}

// Career 
let viewMore = document.querySelectorAll('.view-more');
let viewMoreBtn = document.querySelector('.MoreEventBtn');

function viewMoreJobs() {
    viewMoreBtn.innerHTML = viewMoreBtn.innerHTML === 'View Less' ? 'View More' : 'View Less';

    if(viewMoreBtn.innerHTML === 'View More') {
        viewMoreBtn.classList.remove('viewMoreBtn--active');
    }
    else {
        viewMoreBtn.classList.add('viewMoreBtn--active');
    }

    viewMore.forEach((item) => {
        // Toggle between 'show' and 'hide' classes
        item.classList.toggle('show');
        item.classList.toggle('hide');
    });
}
