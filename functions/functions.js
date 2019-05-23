function addList() {
    var value_input_list = document.getElementById('input').value;

    if (value_input_list) {
        var list_title = value_input_list.toUpperCase();

        out_list += `<div id="` + id_list + `" class="list-div">
                        <strong>` + list_title + `</strong>
                        <a href="#" class="btn-delete-list" onclick="deleteList(` + id_list + `)"><img class="imgs" src="./assets/images/papelera.png"></a>
                    </div>`;

        ids_lists.push(id_list);
        id_list ++;
    }

    article.innerHTML = out_list;
}