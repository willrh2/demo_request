const salesmen = {
  "Essex": ["Chris Scott", "Robert Cresswell"],
  "Halesworth": ["Ben Marsh", "Ben Chilvers"],
  "Kent": ["Ryan Miller", "Gary Jackson"],
  "Market Harborough": ["Shane Jarram", "Niall Lastname"],
  "Norfolk": ["Thomas English", "Simon Bloomfield"],
  "Saxham": ["James Bowers", "Matt Lock"],
  "Spaldwick": ["Ben Broughton", "Tom Richards"]
};

function updateSalesmen() {
  const branchSelect = document.getElementById("branch");
  const salesmanSelect = document.getElementById("salesman");

  // Remove all options from the salesman select
  salesmanSelect.innerHTML = "";

  // If no branch is selected, disable the salesman select and return
  if (branchSelect.value === "") {
    salesmanSelect.disabled = true;
    return;
  }

  // Get the salesmen for the selected branch and add them as options to the salesman select
  const branchSalesmen = salesmen[branchSelect.value];
  const defaultOption = document.createElement("option");
  defaultOption.text = "Select a salesman";
  defaultOption.value = "";
  salesmanSelect.add(defaultOption);
  for (const salesman of branchSalesmen) {
    const option = document.createElement("option");
    option.text = salesman;
    option.value = salesman;
    salesmanSelect.add(option);
  }

  // Enable the salesman select
  salesmanSelect.disabled = false;
  salesmanSelect.selectedIndex = 0;
}
