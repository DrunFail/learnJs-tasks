let selectedOption = genres.options[genres.selectedIndex];

let newOption = new Option("Классика", "classic");
genres.append(newOption);


newOption.selected = true;