let consoleMessages = []

function setTheme(themeName) {
  const themeClasses = ["light", "hacker", "highcontrast", "dark"];
  document.body.classList.remove(...themeClasses);
  document.body.classList.add(themeName);
  localStorage.setItem("theme", themeName);
}

function addToConsole(message, importance = "normal") {
    consoleMessages.push({message, importance})
    const consoleDiv = document.getElementById("console");
    const p = document.createElement("p");
    p.textContent = message;
    p.classList.add(importance);
    consoleDiv.appendChild(p);
    consoleDiv.scrollTop = consoleDiv.scrollHeight;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

window.onload = async function() {
    init();
    addToConsole("System booting", "important")
    await sleep(543)
    addToConsole("...", "unimportant")
    await sleep(284)
    addToConsole("...", "unimportant")
    await sleep(724)
    addToConsole("...", "unimportant")
    await sleep(638)
    addToConsole("...", "unimportant")
    await sleep(1740)
    addToConsole("System booted", "important")
}

function init() {
    document.body.classList.add(localStorage.getItem("theme"));
}

function openPopup(name,targetId) {
    const popup = document.getElementById("popup" + name);
    const target = document.getElementById(targetId);

    const rect = target.getBoundingClientRect();

    popup.style.top = rect.top + window.scrollY + "px";
    popup.style.left = rect.left + window.scrollX + "px";
  
    document.getElementById("popup"+name).style.display = "block";
}

function closePopup(name) {
    document.getElementById("popup"+name).style.display = "none";
}