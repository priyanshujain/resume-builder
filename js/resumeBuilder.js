/*
This is empty on purpose! Your code to build the resume will go here.
 */
var formattedName = HTMLheaderName.replace("%data%","Priyanshu Jain");
$("#header").append(formattedName);
var formattedRole = HTMLheaderRole.replace("%data%","Software Engineer");
$("#header").append(formattedRole);
var bio = {
  "name" : "Priyanshu Jain",
  "role" : "Scientist",
  "contactinfo" : {
    "email" : "priyanshudeveloper@gmail.com",
    "mobile" : 7509657590,
     "github" : "priyanshujain",
    "twitter" : "priyanshujain96",
     "location" : "San Francisco"
     },
  "picture" : "http://placekitten.com/50/50",
  "welmessage" : "welcome to this page",
  "skills" : ["math","problem solving","programming","economics"]
};

if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%",bio.skills[3]);
  $("#skills").append(formattedSkill);
}

var work = {
  "jobs" : [{"employer" : "Google",
  "title" : "Software Engineer I",
  "dates": "October 2017 - 2018",
  "location" : "Florida",
  "description": "Search Engine Team"},
  {"employer" : "Google",
  "title" : "Software Engineer II",
  "dates": "October 2018 - Present",
  "location" : "Mountain view",
  "description": "Search Engine Team"}
]
};

function displayWork() {
  for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
$(".work-entry:last").append(formattedDescription);
 }
}
displayWork();
$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
});

function inName(myname){
  var temp = myname.trim().split(" ");
  var firstN = temp[0].toLowerCase();
  firstN = firstN[0].toUpperCase()+firstN.slice(1);
  var lastN = temp[1].toUpperCase();
  myname = firstN +" "+lastN;
  return myname;
}

$("#main").append(internationalizeButton);

projects.display = function() {
  for(project in projects.projects){
    $("#projects").append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);

    if (projects.projects[project].images.length>0) {
      for(image in projects.projects[project].images){
        var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedImage);
      }
    }
  }
}

$("#mapDiv").append(googleMap);
