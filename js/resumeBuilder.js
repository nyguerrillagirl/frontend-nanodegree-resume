// resumeBuilder.js




var skills = ["Java", "C++", "Spring Framework", "Writing", "HTML5", "CSS3", "JavaScript",  "R", "Teaching"];


var bio = {
	"name" : "Lorraine Figueroa",
	"role" : "Software Engineer",
	"welcomeMessage" : "Hi, this is my resume - impressed yet??",
	"picture" : "images/fry.jpg",
	"contacts" : {
		"mobile" : "555-555-5555",
		"email" : "nyguerrillagirl@brainycode.com",
		"github" : "nyguerrillagirl",
		"twitter" : "@nyguerrillagirl",
		"location" : "Philadelphia"
	},
	"skills" : skills
};

bio.display = function() {

	var formattedName = HTMLheaderName.replace("%data%", "Lorraine Figueroa");
	var formattedRole = HTMLheaderRole.replace("%data%", "Software Engineer");

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	if (bio.contacts) {
		for (contactIterator in bio.contacts) {
			var contactInfo = contactIterator + " " + bio.contacts[contactIterator];
			console.log(contactInfo);
			// topContacts
			contactInfo = HTMLcontactGeneric.replace("%contact%", contactIterator);
			contactInfo = contactInfo.replace("%data%", bio.contacts[contactIterator]);
			$("#topContacts").append(contactInfo);
		}
	}

	//if (bio.picture) {
	//	$("#skills").append(HTMLbioPic.replace("%data%", bio.picture));
	//}
	//$("#skills").append(HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage));

	if (bio.skills && (bio.skills.length > 0)) {
		// append the skills to the page
		$("#header").append(HTMLskillsStart);



		for (var i=0; i < bio.skills.length; i++) {
			$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
		}	

	}
};



var education = {
	"schools" : [
		{
			"name" : "City College",
			"location" : "NYC",
			"degree" : "BS",
			"major": "Computer Science",
			"graduation" : "1987",
			"url" : "http://www.ccny.cuny.edu/"
		},
		{
			"name" : "City College",
			"location" : "NYC",
			"degree" : "MS",
			"major": "Computer Science",
			"graduation" : "1989"

		}
	],
	"onlineCourses" : [	{
			"school" : "Coursera",
			"location" : "N/A",
			"title": "The Data Scientist’s Toolbox",
			"dates" : "12/2014",
			"url" : "https://www.coursera.org/"
		},
		{
			"school" : "Udacity",
			"title": "HTML and CSS",
			"dates" : "12/2014",
			"url" : "https://www.udacity.com/"
		},
		{
			"school" : "Udacity",
			"title": "Git and GitHub",
			"dates" : "12/2014 - 1/2015",
			"url" : "https://www.udacity.com/"
		}

	]
};

var work = {
	"jobs" : [{
		"employer" : "AT&T",
		"title" : "Principal Member of Technical Staff",
		"location" : "Middletown, NJ",
		"dates" : "11/1995 - Present",
		"description" : "Lead Developer for the Enterprise IP Management Tools"
	},
	 {
		"employer" : "Brainycode",
		"title" : "Software Engineer",
		"location" : "Philadelphia, PA",
		"dates" : "1/2010 - Present",
		"description" : "Managing/Hosting web site to teach kids how to code"
	 },
	 {
		"employer" : "Ocean County College",
		"title" : "Computer Studies Lecturer",
		"location" : "Toms River, NJ",
		"dates" : "9/2000 - 6/2009",
		"description" : "Taught courses on web design, C++, Java, and Game Design."
	 }]
};

function displayWork() {
	// Output all the jobs in our work object
	for (jobIterator in work.jobs) {
		//alert("processing a job: " + work.jobs[jobIterator].employer);
		$("#workExperience").append(HTMLworkStart);
		var jobEmployer = HTMLworkEmployer.replace("%data%", work.jobs[jobIterator].employer);
		var jobTitle = HTMLworkTitle.replace("%data%", work.jobs[jobIterator].title);
		$(".work-entry:last").append(jobEmployer + jobTitle);
		$(".work-entry:last").append(HTMLworkLocation.replace("%data%",  work.jobs[jobIterator].location));
		$(".work-entry:last").append(HTMLworkDates.replace("%data%",  work.jobs[jobIterator].dates));
		$(".work-entry:last").append(HTMLworkDescription.replace("%data%",  work.jobs[jobIterator].description));

	}
}


var projects= {
	"projects" : [ {
		"title" : "Nanodegree in Front-End Web Development",
		"dates" : "12/2014 - Present",
		"description" : "Series of courses learning tools and technology for web development",
		"images" : [
			"images/HTML5_Logo_512.png", "images/css3-logo.png", "images/javascript-logo-png.png", "images/bootstrap.png", "images/git-logo.png", "images/GitHub.jpg"
		]
	},
	{
		"title" : "John Hopkins University Data Science",
		"dates" : "12/2014 - Present",
		"description" : "Series of courses learning tools and technology for Data Science",
		"images" : [
			"images/bloomberg.small.horizontal.blue-Coursera.png", "images/R-Programming.png"
		]
	}
	]
};

projects.display = function() {
	for (projectIterator in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		var projectTitle = HTMLprojectTitle.replace("%data%", projects.projects[projectIterator].title);
		var projectDates = HTMLprojectDates.replace("%data%", projects.projects[projectIterator].dates);
		var projectDescription = HTMLprojectDescription.replace("%data%", projects.projects[projectIterator].description);
		$(".project-entry:last").append(projectTitle);
		$(".project-entry:last").append(projectDates);
		$(".project-entry:last").append(projectDescription);	
		// process each image associated with this project
		for (imageIterator in projects.projects[projectIterator].images) {
			var aProjectImage = HTMLprojectImage.replace("%data%", projects.projects[projectIterator].images[imageIterator]);
			$(".project-entry:last").append(aProjectImage);
		}
	}
};


$(document).click(function(loc) {
	logClicks(loc.pageX, loc.pageY);
});

function inName(name) {
	alert("inName invoked with name: " + name);
	var arrNames = name.split(" ");
	var firstName = arrNames[0];
	var lastName = arrNames[1];
	firstName = firstName.substr(0,1).toUpperCase() + firstName.substr(1).toLowerCase();
	lastName = lastName.toUpperCase();
	return firstName + " " + lastName;
}
// The name game
//$("#main").append(internationalizeButton);

bio.display();
displayWork();
projects.display();

$("#mapDiv").append(googleMap);