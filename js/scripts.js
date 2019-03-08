/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
By Paul B. Walker
******************************************/

'use strict';

const pageHeader = document.querySelector('div.page-header');
const studentList = document.querySelectorAll('li');
const linkDiv = document.querySelector('div.pagination');
const maxStudents = 10;


// showPage function gets the first ten students starting with zero
// adds 9 plus 1 with additional students display block or none
const showPage = (page, students) => {
   students = document.querySelectorAll('li.student-item');
   const firstPage = page * maxStudents;
   const lastStudents = firstPage + 9;

   for (let i = 0; i < studentList.length; i += 1) {
      if (i >= firstPage && i <= lastStudents) {
         studentList[i].style.display = 'block';
      } else {
         studentList[i].style.display = 'none';
      }
   }
}


// The appendPageLinks creates the div, ul and appends the html backticks
// to create the rest of the html element. Added a class on the li if needed.
const appendPageLinks = (page, students) => {
   const divPage = document.querySelector('div.page');
   const linkDiv = document.createElement('div');
   const ulLink = document.createElement('ul');
   const numberOfLinks = Math.ceil(studentList.length / maxStudents);
   divPage.appendChild(linkDiv);
   linkDiv.classList.add('pagination');
   linkDiv.appendChild(ulLink);

   // Create variable to assign it into the Link UL.
   let addHTML = '';

   for (let i = 0; i < numberOfLinks; i += 1) {
       addHTML +=
       `<li class="link-list">
           <a href="#">${i + 1}</a>
       </li>`
   }

   // Append the link LI into the Link UL.
   ulLink.innerHTML = addHTML;

   // Assign the linkDiv into the linkList to use.
   const linkList = linkDiv.querySelectorAll('li a');

   // This is to highlight the first page to show that is where the user is on.
   if (linkList[0]) { linkList[0].classList.add('active'); }

   linkDiv.addEventListener('click', (event) => {
      const pageLinks = linkDiv.querySelectorAll('a'); 
      for (let i = 0; i < linkList.length; i += 1) {

         // used a ternary operator to decide to add or remove the active class.
         (event.target === pageLinks[i]) ? linkList[i].classList.add('active') 
                                         : linkList[i].classList.remove('active');
      }
      // Binds the student list with the pageLinks by finding their index.
      showPage(Array.from(pageLinks).indexOf(event.target), students, page);
   });
}

// The createForm function creates the input and button within the form field
const studentSearch = () => {
   const pageHeader = document.querySelector('div.page-header');
   const searchDiv = document.createElement('div');
   searchDiv.classList.add("student-search");
   pageHeader.appendChild(searchDiv);
   const formField = `<input id="filter-input" type="text" placeholder="Search for students...">
                      <button>Search</button>`;

   // Append formField into the form element;
   searchDiv.innerHTML = formField;

   // create local variables. 
   const ul = document.querySelector('ul.student-list');
   const input = document.getElementById('filter-input');
   const button = document.querySelector('button');

   // This function filter through the li element grabs the h3 content and
   // filter the students name by their LI.
   const filterNames = () => {
      const filterValue = input.value.toLowerCase();
      let li = ul.querySelectorAll('li.student-item');
      const studentArray = [];

      for (let i = 0; i < li.length; i += 1) {
         let h3 = li[i].getElementsByTagName('h3')[0];

         if (h3.innerHTML.toLowerCase().indexOf(filterValue) > -1) {
            li[i].style.display = '';
            studentArray.push(li[i]);
         } else {
            li[i].style.display = 'none';
         }
      }

      // The No Student Match Message goes into the UL. If I created a seperate Div
      // I would have issues of removing the message 
      if (studentArray.length === 0) {
         ul.innerHTML = `<li>Sorry, No Students Match Your Search! Please reload browser to get the list.</li>`;
      } 
   } 

   // Event Listener for the Search Input.
   input.addEventListener('keyup', filterNames);

   // When you click the button your remove the text input and No Match message.
   button.addEventListener('click', () => {
      ul.innerHTML = '';
      return input.value = '';
   });

}

// Called the first page by passing zero to the showPage argument.
// Calls all the functions for this project.
showPage(0); appendPageLinks(); studentSearch();

