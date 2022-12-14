function insertTodo(event) {

    if (inputtext.value === "") {
        alert("Enter Your Todo");
    }

    else {
        Inputyes();

    }
    inputtext.value == "";

    function Inputyes() {

        let inputt = document.getElementById('inputtext');
        // console.log(inputt);
        let newToodo = document.createElement('li');

        newToodo.innerHTML = `<li  class="newaddedlist"> <span id="newlistlight" class="listspan" required> ${inputt.value} </span> 
                <button onclick='editFunc(this)' id="edittodo"> Edit </button> 
                <button onclick='rmv(this)' id="removetdo"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
              </svg></button> </li>`

        newToodo.className = 'newaddedlist';
        unorderedList.append(newToodo);
        
    }
}


function rmv(ele) {
    ele.parentElement.remove();
}

function editFunc(ele) {

    if (ele.textContent == "Done") {
        ele.textContent = "Edit"
        let editVar = ele.previousElementSibling.value;
        let newInputElements = document.createElement('span');
        newInputElements.className = 'listspan';
        newInputElements.textContent = editVar;
        ele.parentElement.replaceChild(newInputElements, ele.previousElementSibling);
    }

    else {
        ele.textContent = "Done"
        console.log(ele.previousElementSibling);
        let editVar = ele.previousElementSibling.textContent;
        let newInputElement = document.createElement('input');
        newInputElement.type = "text";
        newInputElement.id = "newin";
        ele.parentElement.replaceChild(newInputElement, ele.previousElementSibling);
    }
}

// function DarkMode(event) {
//     var a = document.getElementsByClassName("newaddedlist").children

//     body.style = "background-color: black;"
//     LogoNAME.style = "color: #8E8E93;"
//     iconLOGO.style = "color: #8E8E93;"
//     inputtext.style = "background-color: #1C1C1E;"
//     navbar.style = "background-color: #1C1C1E;"
//     heading.style = "color: #EB4E3D;"
//     addBtn.style = "background-color: #1C1C1E;"
//     // newin.style = "border: 2px solid brown;"
//     a.style = "background-color: red;"
//     console.log(a);

// }

// function LightMode(event) {
//     body.style = "background-color: white;"
//     navbar.style = "background-color: #F2F2F7"
//     heading.style = "color: #EB4E3D;"
//     inputtext.style = "background-color: #F2F2F7;"
//     addBtn.style = "background-color: #F2F2F7;"
//     // newin.style = "border: 2px solid #e9d8a6;"
// }

