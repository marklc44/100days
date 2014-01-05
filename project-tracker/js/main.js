var url = 'data/project-data.json';
var results;

$.ajax({
	type: 'get',
	url: url,
	dataType: 'json',
	success: displayProjectCalendar
});

function displayProjectCalendar(data) {
	console.log(data);
	var source = $('#projects-results-tpl').html();
	var template = Handlebars.compile(source);
	var context = data;
	var html = template(context);
	$('#results').append(html);

	writeEmptyItems(data);
}

function writeEmptyItems(obj) {
	//var temp = JSON.parse(obj);
	console.log(obj.projects.length);
	var itemsToWrite = 100 - obj.projects.length;
	var li = '<li><a href="#"></a></li>';
	var i;
	var output = li;

	for(i=0;i<itemsToWrite;i++) {
		output += li;
	}

	$('#results').append(output);
	insertDivider();
}

function insertDivider() {
	$('#results li').each(function(i) {
		if((i-6)%28 === 0 && i != 6) {
			$(this).after('<li class="divider"></li>');
		}
	});
}

//get input from modal form
function getNewProjectInput() {
	var newProject = {};
	newProject.title = $('#title').val();
	newProject.github_url = $('#github_url').val();
	newProject.live_url = $('#live_url').val();
	newProject.image_url = $('#image_url').val();
	newProject.desc = $('#desc').val();
	newProject.complete = $('#complete').val();
	return newProject;
}
//put input into an object
//post object to json file

$(document).ready(function() {
	//open modal
	$('#new-project-button').click(function(e) {
		e.preventDefault();
		$('#new-project-modal').removeClass('hide');
		$('.page-wrapper').css('opacity', 0.5);
	});
	//close modal
	$('.modal').find('.modal-close').click(function(e) {
		e.preventDefault();
		$('#new-project-modal').addClass('hide');
		$('.page-wrapper').css('opacity', 1);
	});
	$('#submit_project').click(function(e) {
		e.preventDefault();
		console.log(getNewProjectInput());
		$('#new-project-modal').addClass('hide');
		$('#new-project-success-modal').removeClass('hide');
	});
	$('.modal').find('.modal-close').click(function(e) {
		e.preventDefault();
		$('#new-project-success-modal').addClass('hide');
		$('.page-wrapper').css('opacity', 1);
	});

});





