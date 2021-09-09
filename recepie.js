function getTheValue() {
  let lang = document.getElementById(`languages`).value;
  localStorage.setItem(`language`, JSON.stringify(lang));
  return lang;
}
fetch("https://libretranslate.de/languages")
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    setValue(res);
  });

function setValue(res) {
  res.forEach(({ code, name }) => {
    let languages = document.getElementById("languages");
    let language2 = document.getElementById("language");
    let option = document.createElement("option");
    option.innerHTML = name;
    option.value = code;
    let option2 = document.createElement("option");
    option2.innerHTML = name;
    option2.value = code;
    language2.append(option2);
    languages.append(option);
  });
}
function translet() {
  let language = document.getElementById("languages").value;
  let text = document.getElementById("box").value;
  //    console.log("lan",language)
  //    console.log(box)
  let language2 = document.getElementById("language").value;
  result(language, text, language2);
}

async function result(lan, que, lan2) {
  const res = await fetch("https://libretranslate.de/translate", {
    method: "POST",
    body: JSON.stringify({
      q: `${que}`,
      source: `${lan2}`,
      target: `${lan}`,
    }),
    headers: { "Content-Type": "application/json" },
  });

  let translated = await res.json();
  let box2 = document.getElementById("box2");
  box2.value = translated.translatedText;
}

function swap() {
  let box2 = document.getElementById("box2").value;
  let box1 = document.getElementById("box").value;
  //console.log(box1,box2)
  let box3 = document.getElementById("box2");
  box3.value = box1;
  let box4 = document.getElementById("box");
  box4.value = box2;

  let language1 = document.getElementById("languages").value;
  let language2 = document.getElementById("language").value;
  let language3 = document.getElementById("languages");
  let language4 = document.getElementById("language");
  console.log(language1, language2);
  language3.value = language2;
  language4.value = language1;
}
