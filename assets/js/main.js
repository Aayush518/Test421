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
if(facilityTabs)
{
facilityTabs.forEach((item) => {
    item.addEventListener('click', () => {
        facilityTabs.forEach((item) => {
            item.classList.remove('active');
        });
        item.classList.add('active');
    });
});
}

let tsumTabs = document.querySelectorAll('.tsum-tab');
if(tsumTabs)
{
tsumTabs.forEach((item) => {
    item.addEventListener('click', () => {
        tsumTabs.forEach((item) => {
            item.classList.remove('active');
        });
        item.classList.add('active');
    });
});
}

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

if(adv_btn) {
    adv_btn.addEventListener('click', () => {
        bod_btn.classList.remove('active');
        adv_btn.classList.add('active');
    
        let adv_content = document.querySelectorAll('.adv-content')
        let bod_content = document.querySelectorAll('.bod-content')
    
        adv_content.forEach((item) => {
            item.style = "display: flex !important; transition: all 0.5s ease-in-out;";
        });
        bod_content.forEach((item) => {
            item.style = "display: none !important; transition: all 0.5s ease-in-out;";
        });
    });
}

if(bod_btn)
{
    bod_btn.addEventListener('click', () => {
        adv_btn.classList.remove('active');
        bod_btn.classList.add('active');
    
        let adv_content = document.querySelectorAll('.adv-content')
        let bod_content = document.querySelectorAll('.bod-content')
    
        adv_content.forEach((item) => {
            item.style = "display: none !important; transition: all 0.5s ease-in-out;";
        });
        bod_content.forEach((item) => {
            item.style = "display: flex !important; transition: all 0.5s ease-in-out;";
        });
    });
    
}


function displayAcademicContent(content)
{
    let academicContents = document.querySelectorAll('.academic-content');
    academicContents.forEach((item) => {
        item.style = "display: none !important; transition: all 0.5s ease-in-out;";
    });
    document.getElementById(content).style = "display: block !important; transition: all 0.5s ease-in-out;";
}

  //get the current page url 
  var url = window.location.href;
  //split the url by ?
  var urlSplit = url.split('?');
  if(urlSplit.length > 1){
    //get the second part of the url
    var urlSecondPart = urlSplit[1];
    //remove the # and other symbols from the url
    urlSecondPart = urlSecondPart.replace(/[#?&]/g, '');
    urlSecondPart = document.getElementById(urlSecondPart);
    //click the element
    urlSecondPart.click();
  }



