pane.insertAdjacentHTML("afterbegin", '<button class="remove-button">[x]</button>');
pane.firstChild.onclick = () => pane.remove();