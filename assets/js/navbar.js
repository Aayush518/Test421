
document.addEventListener('DOMContentLoaded', function () {
    var about = ['About Us', 'Contact us', 'Our Community','News & Events','Career <div class="openings">3 opening!</div>','Testimonials','FAQs']
    var academic = ['Pre School','Junior School','Middle School']
    var admissions = ['Admission Process','Required Documents']
    var facilities = ['Classrooms','Reading Room','Digital Hall','Playgrounds and Community Spaces','Learning Lab','Multipurpose Hall','ECA Rooms']
    var dropdown = document.getElementById('drop-down-menu');
    var navMenus = document.getElementsByClassName('nav-item');
    var dropdownUl = document.getElementById('dropdown-ul');
    var closeBtn= document.getElementById('closeBtn');
    var megaMenu = document.getElementById('mega-menu');
    var hamburger = document.getElementById('hamburger');

    //add event listener to all the nav-menu childrens
    for(var i = 0; i < navMenus.length; i++){
        navMenus[i].addEventListener('mouseover', function(){
            dropdownUl.innerHTML = '';
            console.log('mouseover');

            //if the navMenu[i] contains the class 'about' then add the about array to the dropdown
            if(this.classList.contains('about')){
                for(var j = 0; j < about.length; j++){
                    dropdown.style.display = 'flex';
                    dropdownUl.innerHTML += '<li><a href="#">'+about[j]+'</a></li>';
                }
            }
            else if(this.classList.contains('academic')){
                for(var j = 0; j < academic.length; j++){
                    dropdown.style.display = 'flex';
                    dropdownUl.innerHTML += '<li><a href="#">'+academic[j]+'</a></li>';
                }
            }
            else if(this.classList.contains('admissions')){
                for(var j = 0; j < admissions.length; j++){
                    dropdown.style.display = 'flex';
                    dropdownUl.innerHTML += '<li><a href="#">'+admissions[j]+'</a></li>';
                }
            }
            else if(this.classList.contains('facilities')){
                for(var j = 0; j < facilities.length; j++){
                    dropdown.style.display = 'flex';
                    dropdownUl.innerHTML += '<li><a href="#">'+facilities[j]+'</a></li>';
                }
            }
        });
    }

    //if the mouse is over the dropdown then display the dropdown
    dropdown.addEventListener('mouseover', function(){
        dropdown.style.display = 'flex';
    });

    //if the mouse is not over the dropdown then remove the dropdown
    dropdown.addEventListener('mouseleave', function(){
        dropdown.style.display = 'none';
    });

    //if the mouse is not over the nav-menus then remove the dropdown
    for(var i = 0; i < navMenus.length; i++){
        navMenus[i].addEventListener('mouseleave', function(){
            dropdown.style.display = 'none';
        });
    }
    
    //close the megaMenu when the close button is clicked
    closeBtn.addEventListener('click', function(){
        megaMenu.style.display = 'none';
        document.querySelector('nav').style.zIndex = '1';
    });

    //open the megaMenu when the hamburger is clicked
    hamburger.addEventListener('click', function(){
        megaMenu.style.display = 'flex';
        document.querySelector('nav').style.zIndex = '0';
        console.log('clicked');
    });


});
