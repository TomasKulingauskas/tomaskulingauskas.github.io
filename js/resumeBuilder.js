var bio = {
	"name": "Tomas Kulingauskas",
	"role": "Web developer",
	"contacts": {
		"mobile": "+37062316337",
		"email": "<a href='mailto:tomaskulingauskas@gmail.com'>tomaskulingauskas@gmail.com</a>",
		"github": "<a href='https://github.com/TomasKulingauskas'>TomasKulingauskas</a>",
		"location": "Kaunas"
	},
	"welcomeMessage": "Web developer with a passion for learning",
	"skills": ["HTML", "CSS", "JavaScript", "Computer Networking"],
	"bioPic": "images/192.jpg",
	"interests": ["literature", "history (specifically, WWII)", "traveling", "basketball", "teasing people"]
}

var education = {
	"schools": [
	{
		"name": "Kaunas University of Technology",
		"location": "Kaunas, Studentų g. 50",
		"degree": "Bachelor",
		"major": "Telecommunications",
		"dates": "2012-2016",
		"url": "http://www.ktu.lt"
	}
	]
	
}

var work = {
	"jobs": [
		{
			"employer": "Kitron",
			"title": "SMT Operator",
			"dates": "July 2016 - present",
			"location": "Kaunas, Taikos pr. 151",
			"description": "SMT operators monitor, maintain and adjust equipment that's \
							used to create electronic circuits with surface mount technology (SMT). \
							This technology, in which electronic components are mounted directly onto circuit boards, \
							is used in industries ranging from auto manufacturing to specialty electronics." ,
			"website": "http://www.kitron.com"
		},
		{
			"employer": "Teltonika",
			"title": "C programmer, internship",
			"dates": "February 2016 - April 2016",
			"location": "Kaunas, Europos pr. 121",
			"description": "C development on Linux.",
			"website": "http://www.teltonika.lt"
		}	
	]	
}





formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedPic);



	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail);
	var formattedGit = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGit);
	var formattedPlace = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedPlace);

var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedMsg);



var name = bio.name;
var role = bio.role;
 var formattedName = HTMLheaderName.replace("%data%", name);
 var formattedRole = HTMLheaderRole.replace("%data%", role);


 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);

function skills() { 
	if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	
	for (i=0; i < bio.skills.length; i++) {
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
	$("#skills").append(formattedSkill);

		}
	}
}

skills();

function displayWork() {
	if (work.jobs.length > 0) {
	for (var i = 0; i < work.jobs.length; i++) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
		var formattedEmployer = formattedEmployer.replace("#", work.jobs[i].website);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDate = HTMLworkDates.replace("%data%", work.jobs[i].dates);
		$(".work-entry:last").append(formattedDate);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
		$(".work-entry:last").append(formattedLocation);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
		$(".work-entry:last").append(formattedDescription);
		 
		}
	}
}

displayWork();

function displaySchools() {

	if (education.schools.length > 0) {
	for (var i = 0; i < education.schools.length; i++) {
		$("#education").append(HTMLschoolStart);

		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
		formattedSchoolName = formattedSchoolName.replace("#", education.schools[i].url);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
		$(".education-entry:last").append(formattedSchoolName + formattedDegree);
		var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
		$(".education-entry:last").append(formattedschoolDates);

		var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
		$(".education-entry:last").append(formattedschoolMajor);
		
		var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
		$(".education-entry:last").append(formattedschoolLocation);
		}
	}
}

displaySchools();

function inName(name) {
	var name = name.split(" ");

	var fname = name[0];

	var lname = name[1];
	
	var formattedFname = fname.slice(0,1).toUpperCase() + fname.slice(1).toLowerCase();
	var formattedLname = lname.toUpperCase();

	return formattedFname +" "+ formattedLname;
}


function displayHobbies() {
	if (bio.interests.length > 0) {
		for (var i = 0; i < bio.interests.length; i++) {
		$("#hobbies").append(HTMLinterestsStart);

	var formattedInterests = HTMLinterests.replace("%data%", bio.interests[i]);
		$(".interests:last").append(formattedInterests);
		}
	}
}	


displayHobbies();

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);


var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#lets-connect").append(formattedMobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#lets-connect").append(formattedEmail);
var formattedGit = HTMLgithub.replace("%data%", bio.contacts.github);
$("#lets-connect").append(formattedGit);
var formattedPlace = HTMLlocation.replace("%data%", bio.contacts.location);
$("#lets-connect").append(formattedPlace);
