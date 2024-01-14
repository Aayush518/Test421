// Events
let moreEvents = document.querySelectorAll('.more-event');
let moreEventsBtn = document.querySelector('.moreEventBtn');

function viewMoreEvents()
{
    moreEventsBtn.innerHTML = moreEventsBtn.innerHTML === 'View Less' ? 'View More' : 'View Less';

    if(moreEventsBtn.innerHTML === 'View More') {
        moreEventsBtn.classList.remove('active');
    }
    else {
        moreEventsBtn.classList.add('active');
    }

    moreEvents.forEach((item) => {
        // Toggle between 'show' and 'hide' classes
        item.classList.toggle('show');
        item.classList.toggle('hide');
    });
}  

