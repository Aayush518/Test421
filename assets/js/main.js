// FAQs 
let viewMore = document.querySelectorAll('.view-more');
let viewMoreBtn = document.querySelector('.viewMoreBtn');

function viewMoreFaq() {
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

let facilityTabs = document.querySelectorAll('.facility-tab');
facilityTabs.forEach((item) => {
    item.addEventListener('click', () => {
        facilityTabs.forEach((item) => {
            item.classList.remove('active');
        });
        item.classList.add('active');
    });
});

let tsumTabs = document.querySelectorAll('.tsum-tab');
tsumTabs.forEach((item) => {
    item.addEventListener('click', () => {
        tsumTabs.forEach((item) => {
            item.classList.remove('active');
        });
        item.classList.add('active');
    });
});

let facilityTabContent = document.querySelectorAll('.facility-content');
function displaySection(content)
{
    facilityTabContent.forEach((item) => {
        item.style = "display: none !important; transition: all 0.5s ease-in-out;";
    });
    document.getElementById(content).style = "display: block !important; transition: all 0.5s ease-in-out;";
}

let tsumContent = document.querySelectorAll('.tsum-content');
function displayTsum(content)
{
    tsumContent.forEach((item) => {
        item.style = "display: none !important; transition: all 0.5s ease-in-out;";
    });
    document.getElementById(content).style = "display: block !important; transition: all 0.5s ease-in-out;";
    document.querySelector('.school-detail').style = "display: none !important; transition: all 0.5s ease-in-out;";
}

function displaySchoolDetail(schoolDetail)
{
    document.querySelector(schoolDetail).style = "display: block !important; transition: all 0.5s ease-in-out;";
}




// About Page

let adv_btn = document.querySelector('.adv-btn');
let bod_btn = document.querySelector('.bod-btn');

adv_btn.addEventListener('click', () => {
    bod_btn.classList.remove('active');
    adv_btn.classList.add('active');

    let adv_content = document.querySelectorAll('.adv-content')
    let bod_content = document.querySelectorAll('.bod-content')

    adv_content.forEach((item) => {
        item.style = "display: block !important; transition: all 0.5s ease-in-out;";
    });
    bod_content.forEach((item) => {
        item.style = "display: none !important; transition: all 0.5s ease-in-out;";
    });
});

bod_btn.addEventListener('click', () => {
    adv_btn.classList.remove('active');
    bod_btn.classList.add('active');

    let adv_content = document.querySelectorAll('.adv-content')
    let bod_content = document.querySelectorAll('.bod-content')

    adv_content.forEach((item) => {
        item.style = "display: none !important; transition: all 0.5s ease-in-out;";
    });
    bod_content.forEach((item) => {
        item.style = "display: block !important; transition: all 0.5s ease-in-out;";
    });
});

console.log('hello');



function displayAcademicContent(content)
{
    let academicContents = document.querySelectorAll('.academic-content');
    academicContents.forEach((item) => {
        item.style = "display: none !important; transition: all 0.5s ease-in-out;";
    });
    document.getElementById(content).style = "display: block !important; transition: all 0.5s ease-in-out;";
}



