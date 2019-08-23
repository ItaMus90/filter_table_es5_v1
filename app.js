var filter_input = document.getElementById('filter_input');

filter_input.addEventListener('keyup', filterName);


function filterName(){

    var filter_input_value = filter_input.value.toUpperCase();

    //Get names ul
    var names = document.getElementById('names');

    //Get li from ul
    var li = names.querySelectorAll('li.collection-item');

    //Loop through collection-item lis

    for (var i = 0; i < li.length; i++) {
        
        var a_tag = li[i].getElementsByTagName('a')[0];

        if(a_tag.innerHTML.toUpperCase().indexOf(filter_input_value) > -1){

            li[i].style.display = '';

        }else{

            li[i].style.display = 'none';

        }

    }

}