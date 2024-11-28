const input = document.getElementById('input');
const text = document.getElementById('text');
const btn = document.getElementById('btn');

function searchText() {
    let inputValue = input.value.trim();
    let textContent = text.textContent;

    if (inputValue !== '') {
        const regex = new RegExp(`(${inputValue})`, 'gi');
        const highlightedText = textContent.replace(regex, '<span style="background-color: rgb(68, 56, 40);">$1</span>');
        text.innerHTML = highlightedText;
    }

    else if(inputValue === '') {
        text.innerText = text.textContent;
    }
}

btn.addEventListener('click', searchText);