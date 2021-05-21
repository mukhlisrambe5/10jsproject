function get_todos_data(){
	var todos_data= [];
	var todos_data_str= localStorage.getItem('todos');
	if(todos_data_str !==null){
		todos_data=JSON.parse(todos_data_str);
	}
	return todos_data;
}



function add(){
	var todo= document.querySelector('#task').value;

	var todos_data= get_todos_data();
	todos_data.push(todo);
	localStorage.setItem('todos', JSON.stringify(todos_data));
	show();
	document.querySelector('#task').value="";
}

function show(){
	var todos_data= get_todos_data();
	var html= '<ul>';
	for (var i=0; i<todos_data.length; i++){
		html +='<li>' + todos_data[i] + 
		'<button class="remove" id=" '+ i+ '">Delete</button>' +
		'</li>';
	}
	html += '</ul>';
	document.querySelector('#todos').innerHTML= html;

	var buttons= document.getElementsByClassName('remove');
	for(var i=0; i<buttons.length; i++){
	    buttons[i].addEventListener('click', remove);
	}
}
function remove(){
	var id= this.getAttribute('id');
	var todos_data= get_todos_data();
	todos_data.splice(id,1);
	localStorage.setItem('todos', JSON.stringify(todos_data));
	show();
}

// document.querySelector('.remove').addEventListener('click', remove);


document.querySelector('#add').addEventListener('click', add);
show();