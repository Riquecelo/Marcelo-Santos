const text1 = document.querySelector('.text-1 p');
text1.innerHTML = text1.innerHTML.split("").map(
    (char, i) =>
    `<span style="transform:rotate(${i * 9.5}deg)">${char}</span> `
).join("")

const text2 = document.querySelector('.text-2 p');
text2.innerHTML = text2.innerHTML.split("").map(
    (char, i) =>
    `<span style="transform:rotate(${i * 9.5}deg)">${char}</span> `
).join("")

const text3 = document.querySelector('.text-3 p');
text3.innerHTML = text3.innerHTML.split("").map(
    (char, i) =>
    `<span style="transform:rotate(${i * 9.9}deg)">${char}</span> `
).join("")