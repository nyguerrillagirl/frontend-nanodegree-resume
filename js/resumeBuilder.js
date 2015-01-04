// resumeBuilder.js
var skills = ["HTML5", "CSS3", "JavaScript", "Java", "programming", "teaching", "writing"];


var bio = {
	"name" : "Lorraine Figueroa",
	"role" : "Software Engineer",
	"welcomeMessage" : "Hi, this is my resume - impressed yet??",
	"contacts" : {
		"mobile" : "267-901-4614",
		"email" : "nyguerrillagirl@brainycode.com",
		"github" : "nyguerrillagirl",
		"twitter" : "@nyguerrillagirl",
		"location" : "Philadelphia"
	},
	"skills" : skills
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
	 }]
};
var project = {
	"projects" : [ {
		"title" : "Nanodegree in Front-End Web Development",
		"dates" : "12/2014 - Present",
		"description" : "Series of courses learning tools and technology for web development",
		"images" : [
			"images/HTML5_Logo_512.png", "images/css3-logo.png", "images/javascript-logo-png.png", "images/bootstrap.png", "image/git-logo.png", "images/GitHub.jpg"
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
