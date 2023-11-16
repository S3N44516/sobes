let contacts = [];
const button = document.querySelector('button');
const form = document.querySelector('#div-form');

button.addEventListener('click', () => {
    form.classList.add('open');
    document.getElementById('form').style.visibility='hidden';
  });
 
 
  function addContact() { 
      const name = document.getElementById("name").value; 
      const phone = document.getElementById("phone").value; 
      const who = document.getElementById("who").value; 
   
      if (!name || !phone || !who) { 
          alert("Введите данные в форму!"); 
          return; 
      } else if (!name) { 
          alert("Введите ФИО") 
          return;
      } else if (!phone) { 
          alert("Введите номер телефона") 
          return;
      } else if (!who){ 
          alert("Введите кем приходиться этот контакт");
          return;
      }
   
      contacts.push({ 
          name: name, 
          phone: phone, 
          who: who 
      }); 
   
      showContacts(); 
  } 
   
  function showContacts() { 
      const contactTableBody = document.getElementById("contacts-table-body"); 
      contactTableBody.innerHTML = ""; 
  
      for (const contact of contacts) { 
          let newRow = document.createElement('tr'); 
   
          let nameCell = document.createElement('td'); 
          nameCell.textContent = contact.name; 
          let phoneCell = document.createElement('td'); 
          phoneCell.textContent = contact.phone; 
          let whoCell = document.createElement('td'); 
          whoCell.textContent = contact.who;
          let edit = document.createElement('td'); 
          edit.textContent = contact.who;
          let remove = document.createElement('td'); 
          remove.textContent = contact.who;

          const editButton = document.createElement("button");
          editButton.textContent = "Редактировать";
          editButton.onclick = () => { 
            let cells = document.querySelectorAll('td');
            for (let i = 0; i < cells.length; i++) {
                let cell = cells[i];
                cell.addEventListener('click', function() {
                    cell.classList.add('selected');
                    cell.contentEditable = true;
                    cell.focus();
                });
            let selectedCells = document.querySelectorAll('.selected');
            for (let i = 0; i < selectedCells.length; i++) {
            let cell = selectedCells[i];
            cell.classList.remove('selected');
            cell.contentEditable = false;
            }
        }       
    }

          const deleteButton = document.createElement("button");
            deleteButton.textContent = "Удалить";
            deleteButton.onclick = () => {
            const index = contacts.indexOf(contact);
            contacts.splice(index, 1);
            showContacts();
        };


          newRow.appendChild(nameCell); 
          newRow.appendChild(phoneCell); 
          newRow.appendChild(whoCell);
          newRow.appendChild(editButton);
          newRow.appendChild(deleteButton);
          contactTableBody.appendChild(newRow);
          
      } 
  } 
  window.addEventListener("load", function() {
    
  });
  showContacts();
