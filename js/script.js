/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
By Paul B. Walker
******************************************/

'use strict';

// Global variables 
const divPage = document.querySelector('div.page');
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
const appendPageLinks = () => {

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
      showPage(Array.from(pageLinks).indexOf(event.target));  
   });
}


// studentSearch function has a lot of redundancy clean up in the future.
const studentSearch = () => {

   // Variables needed to create the input and button and append to page.
   const pageHeader = document.querySelector('div.page-header');
   const searchDiv = document.createElement('div');
   searchDiv.classList.add("student-search");
   pageHeader.appendChild(searchDiv);
   const formHtml = `<input id="filter-input" type="text" placeholder="Search for students...">
                      <button>Search</button>`;

   // Append formField into the form element;
   searchDiv.innerHTML = formHtml;

   // create local variables. 
   const input = document.getElementById('filter-input');
   const button = document.querySelector('button');

   const filterNames = () => {  
      const filterValue = input.value.toLowerCase();
      let addPagination = document.querySelector('div.pagination ul');
      let li = document.querySelectorAll('li.student-item');
      let anchor = addPagination.querySelectorAll('li.link-list');
      const studentArray = [];
      const counter = [];
      let ul = anchor.parentNode;
      const divNoMatch = document.createElement('div');
      divPage.appendChild(divNoMatch);
      divNoMatch.classList.add('no-match');
      const para = document.createElement('p');
      divNoMatch.appendChild(para);

      // for loop to get student name and push into the studentArray
      for (let i = 0; i < li.length; i += 1) {
         let h3 = li[i].getElementsByTagName('h3')[0];

         if (h3.innerHTML.toLowerCase().indexOf(filterValue) > -1) {
            li[i].style.display = '';
            studentArray.push(li[i]);           
         } else {
            li[i].style.display = 'none';
         }
      }

      // Needed to create a different function for the search field.
      const showArray = (searchPage, studentsArray) => {       
         const firstPage = searchPage * maxStudents;
         const lastStudents = firstPage + 9;
      
         for (let i = 0; i < studentArray.length; i += 1) {
            if (i >= firstPage && i <= lastStudents) {
               studentArray[i].style.display = 'block';
            } else {
               studentArray[i].style.display = 'none';
            }
         }    
      }
      showArray(0);
      
      let totalLink = Math.ceil(studentArray.length / 10);

      for (let i = 0; i < totalLink; i += 1) {
         counter.push(i);
      }

      // Get the counter array and map over the numbers(n).
      const addOne = counter.map(n => n);

      // Use template literals to create the li plus the anchor tags and assign it to items.
      const items = addOne.map(n => `<li><a href="#">${n + 1}</a></li>`);

      // Use the join method and assign it into ulPage. 
      const ulPage = `<ul>${items.join('')}</ul>`;

      // inserts into the UL html page.
      addPagination.innerHTML = ulPage;
 
      const oneDeep = addPagination.querySelector('ul>ul');

      let oneDeepLi = oneDeep.querySelectorAll('li>a');

      let anchorTag = oneDeepLi[0];

      
    
      // This is to highlight the first page to show that is where the user is on.
      if (anchorTag){ anchorTag.classList.add('active'); }
     
      if (studentArray.length === 0) { 
         para.textContent = 'Sorry, your seach do not match the student list.';
         input.style.display = 'none';
      } 

      oneDeep.addEventListener('click', (event) => {
         const links = oneDeepLi; 
         for (let i = 0; i < links.length; i += 1) {
   
            // used a ternary operator to decide to add or remove the active class.
            (event.target === links[i]) ? links[i].classList.add('active') 
                                        : links[i].classList.remove('active');
         }
         // Binds the student list with the pageLinks by finding their index.
         showArray(Array.from(links).indexOf(event.target));  
      });

   }  



   // Event Listener for the Search Input.
   input.addEventListener('keyup', filterNames);

   button.addEventListener('click', () => {
      let buttonInput = input;
      buttonInput.value = '';
   });

}

// Called the first page by passing zero to the showPage argument.
// Calls all the functions for this project.
showPage(0); appendPageLinks(); studentSearch();

