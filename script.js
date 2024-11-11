let surnames = [];
let givenNames = [];

async function fetchNames() {
  try {
    const response = await fetch('name.json');
    const data = await response.json();
    surnames = data.surnames;
    givenNames = data.givenNames;
  } catch (error) {
    console.error("无法加载名字数据：", error);
  }
}

document.getElementById('draw-button').addEventListener('click', () => {
  if (surnames.length > 0 && givenNames.length > 0) {
    const randomSurname = surnames[Math.floor(Math.random() * surnames.length)];
    const randomGivenName = givenNames[Math.floor(Math.random() * givenNames.length)];
    const randomFullName = randomSurname + randomGivenName;
    document.getElementById('name-display').innerText = randomFullName;
  } else {
    document.getElementById('name-display').innerText = '无法加载名字';
  }
});

fetchNames();
