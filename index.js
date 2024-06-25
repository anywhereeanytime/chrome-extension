const buttonEl = document.getElementById("input-btn");
let inputEl = document.getElementById("input-el");
let ulEl = document.getElementById("ul-el");
let myLeads = [];

buttonEl.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  renderLeads();
});

let renderLeads = function () {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `;
  }
  ulEl.innerHTML = listItems;
};
