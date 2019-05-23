var header = document.getElementById('header');
var article = document.getElementById('article');

var id_list = 001;

var ids_lists = [];

var out_header = `
    <input id="input" type="text" placeholder="Add list">
    <button onclick="addList()">Add</button>
`;

var out_list = '';

function addList() {
    var value_input_list = document.getElementById('input').value;

    if (value_input_list) {
        var list_title = value_input_list.toUpperCase();

        out_list = `<div id="` + id_list + `" class="list-div">
                        <strong>` + list_title + `</strong>
                        <a href="#" class="btn-delete-list" onclick="deleteList(` + id_list + `)"><img class="imgs" src="./assets/images/papelera.png"></a>
                    </div>`;

        ids_lists.push(id_list);        
        id_list ++;
    }    

    article.innerHTML += out_list;
    
    document.getElementById('input').value = '';
}

function deleteList (lists) {
    $(document).ready(function(){
        var element = '#' + lists;
        $(element).remove();

        var item = ids_lists.indexOf(lists);

        if (item !== -1) {
            ids_lists.splice( item, 1 );
        }
    });
}

header.innerHTML = out_header;