// resumeBuilder.js

// This contains data objects specific to my bio, skills and projects 


var skills = ["Java", "C++", "Spring Framework", "Writing", "HTML5", "CSS3", "JavaScript",  "R", "Teaching"];


var bio = {
	"name" : "Lorraine Figueroa",
	"role" : "Software Engineer",
	"welcomeMessage" : "Java Developer, Learning Web Development!",
	"biopic" : "images/avatar03.jpg",
	"contacts" : {
		"mobile" : "555-555-5555",
		"email" : "nyguerrillagirl@brainycode.com",
		"github" : "nyguerrillagirl",
		"twitter" : "@nyguerrillagirl",
		"location" : "Philadelphia"
	},
	"skills" : skills,
	"display" : function() {
		// Display the name and title
		var formattedName = HTMLheaderName.replace("%data%", "Lorraine Figueroa");
		var formattedRole = HTMLheaderRole.replace("%data%", "Software Engineer");

		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);
		// Display the various contact information
		if (bio.contacts) {
			// append contacts to the top
			for (contactIterator in bio.contacts) {
				var contactInfo = contactIterator + " " + bio.contacts[contactIterator];
				// topContacts
				contactInfo = HTMLcontactGeneric.replace("%contact%", contactIterator);
				contactInfo = contactInfo.replace("%data%", bio.contacts[contactIterator]);
				$("#footerContacts").append(contactInfo);
			}

			// append contacts to the footer
			for (contactIterator in bio.contacts) {
				var contactInfo = contactIterator + " " + bio.contacts[contactIterator];
				contactInfo = HTMLcontactGeneric.replace("%contact%", contactIterator);
				contactInfo = contactInfo.replace("%data%", bio.contacts[contactIterator]);
				$("").append(contactInfo);
			}

		}
		// Display my image and Welcome message
	    if (bio.biopic) {
			$("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
		}
		$("#header").append(HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage));

		if (bio.skills && (bio.skills.length > 0)) {
			// append the skills to the page
			$("#header").append(HTMLskillsStart);

			for (var i=0; i < bio.skills.length; i++) {
				$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
			}	

		}

	}
};



var education = {
	"schools" : [
		{
			"name" : "City College of New York",
			"location" : "NYC",
			"degree" : "BS",
			"majors": "Computer Science",
			"dates" : "1987",
			"url" : "http://www.ccny.cuny.edu/"
		},
		{
			"name" : "City College of New York",
			"location" : "NYC",
			"degree" : "MS",
			"majors": "Computer Science",
			"dates" : "1989",
			"url" : "http://www.ccny.cuny.edu/"
		}
	],
	"onlineCourses" : [	{
			"school" : "Coursera",
			"title": "The Data Scientist’s Toolbox",
			"date" : "12/2014",
			"url" : "https://www.coursera.org/"
		},{
			"school" : "Coursera",
			"title": "R Programming",
			"date" : "1/2015",
			"url" : "https://www.coursera.org/"
		},
		{
			"school" : "Udacity",
			"title": "HTML and CSS",
			"date" : "01/2015",
			"url" : "https://www.udacity.com/"
		},
		{
			"school" : "Udacity",
			"title": "Git and GitHub",
			"date" : "1/2015",
			"url" : "https://www.udacity.com/"
		},
		{
			"school" : "Udacity",
			"title": "JavaScript Basics",
			"date" : "1/2015",
			"url" : "https://www.udacity.com/"
		},
		{
			"school" : "Udacity",
			"title": "Intro to jQuery",
			"date" : "1/2015",
			"url" : "https://www.udacity.com/"
		}
	],
	"display" : function() {
		// display formal education information
		if (education.schools && education.schools.length > 0) {
			for (school in education.schools) {
				// add an education entry div element
				$("#education").append(HTMLschoolStart);
				var edLine1 = HTMLschoolName.replace("%data%", education.schools[school].name) + 
									HTMLschoolDegree.replace("%data%", education.schools[school].degree)
				$(".education-entry").last().append(edLine1);
				$(".education-entry").last().append(HTMLschoolDates.replace("%data%", education.schools[school].dates));
				$(".education-entry").last().append(HTMLschoolLocation.replace("%data%", education.schools[school].location));
				$(".education-entry").last().append(HTMLschoolMajor.replace("%data%", education.schools[school].majors));
			}
		}

		// display online education information
		if (education.onlineCourses && education.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);
			for (school in education.onlineCourses) {
				// add an education entry div element
				$("#education").append(HTMLschoolStart);
				var edLine1 = HTMLonlineTitle.replace("%data%", education.onlineCourses[school].title) + 
								HTMLonlineSchool.replace("%data%", education.onlineCourses[school].school);
				$(".education-entry").last().append(edLine1);
				$(".education-entry").last().append(HTMLonlineDates.replace("%data%", education.onlineCourses[school].date));
				$(".education-entry").last().append(HTMLonlineURL.replace("%data%", education.onlineCourses[school].url));
			}

		}


	}
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
		"description" : "Taught courses on Assembly Language, C++, Java, and Game Design."
	 }],
	 "display" : function () {
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
};




var projects= {
	"projects" : [ {
		"title" : "Nanodegree in Front-End Web Development",
		"dates" : "12/2014 - Present",
		"description" : "Taking a series of courses to learn tools and technology for web development",
		"images" : [
			"images/HTML5_Logo_512.png", "images/css3-logo.png", "images/javascript-logo-png.png", "images/bootstrap.png", "images/git-logo.png", "images/GitHub.jpg"
		]
	},
	{
		"title" : "John Hopkins University Data Science",
		"dates" : "12/2014 - Present",
		"description" : "Taking a series of courses learning tools and technology for Data Science",
		"images" : [
			"images/bloomberg.small.horizontal.blue-Coursera.png", "images/R-Programming.png"
		]
	},
	{
		"title" : "Exploring Mini-Languages to Teach kids how to code",
		"dates" : "06/2014 - Present",
		"description" : "Hosting Talks on Learning to Make Games using Java, Scratch, Alice, Kodu, Karel The Robot",
		"images" : ["images/JavaLogo.png", "images/ScratchBlogLogo.jpg", "images/alice3_logo.png", "images/kodu2.jpg", "images/KarelLogo.jpg"]
	}
	],
	"display" : function() {
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
			}
};

function displayResumeInformation() {
	// Populate page with RESUME information - HERE
	bio.display();
	work.display();
	projects.display();
	education.display();
	$("#mapDiv").append(googleMap);
}

displayResumeInformation();

