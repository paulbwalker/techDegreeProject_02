// This small function hides the tatal students then using the slice method to show the first 10 students.
const showPage = ( pageNumber, studentList ) => {
	// Hide full list of students
	studentList.hide();

	// displays the right amount of students per page
	studentList.slice( (( pageNumber - 1 ) * 10 ), ( pageNumber * 10 ) ).show(); 

};


// This function takes the studentList as argument, and creates the linked page per 10 students
	const appendPageLinks = ( studentList ) => {
		// determine how many pages for this student list
		const totalPage = Math.ceil( studentList.length / 10 );
		// create a page link section
		$('.page').append(`
				<div class="pagination">
					<ul></ul>
				</div> 
			`);

		// use a "for" loop through the divided totalPage variable.
		for ( let i = 1; i <= totalPage; i++ ) {
			// add a page link to the page link section append our new page link section to the site/
			$('.pagination ul').append(`<li><a href="#"> ${i} </a></li>`);
		}

		// define what happens when you click a link
		$('.pagination li a').on('click', function(event) {
			event.preventDefault();
			// Use the showPage function to display the page for the link clicked
			showPage( event.target.text, $('li.student-item') );
			// remove the old page link section by removeClass "active".
			$('a').removeClass('active');
			// mark that link as 'active'.
			event.target.className = 'active';
		});
	};


/* Exceeds Grade: The Search Function        *********************************/

function searchList() {
	// Obtain the value of the search input

	// remove the previous page link section

	// Loop over the student list, and for each student...

		// ...obtain the student's name...

		// ...and the student's email...

		// ...if the search value is found inside either email or name...

			// ...add this student to list of "matched" student

		// If there's no "matched" students...

			// ...display a "no student's found" message

		// If over ten students were found...

			// ...call appendPageLinks with the matched students

		// Call showPage to show first ten students of matched 
};
	
showPage( 1, $('li.student-item') );
appendPageLinks( $('li.student-item') );
searchList( $('li.student-item') );
