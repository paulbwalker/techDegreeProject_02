function showPage( /* arguments here for page number and student list */ ) {
	// first hide all students on the page

	// Then loop through all students in our student list argument

		// if student should be on this page number

			// show the student
}

function appendPageLinks( /*take a student list as an argument*/ ) {
	// determine how many pages for this student list

	// create a page link section

	// "for" every page

		// add a page link to the page link section

	// remove the old page link section from the site

	// append our new page link section to the site

	// define what happens when you click a link

		// Use the showPage function to display the page for the link clicked

		// mark that link as "active"
}


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

		// Call showPage to show first ten students of matched list

	}
}