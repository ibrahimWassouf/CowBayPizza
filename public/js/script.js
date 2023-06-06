async function loadJSON() {
  const response = await fetch("menu.json");
  const data = await response.json();
  return data;
}

loadJSON().then((data) => {
  const source = document.getElementById("cheese").innerHTML;
  const template = Handlebars.compile(source);
  const context = {
    title: data[0][0],
    small: data[0][1],
    medium: data[0][2],
    large: data[0][3],
    xlarge: data[0][4],
  };
  const html = template(context);
  source += html;
});

//declare header nav and menu nav
const card = document.getElementById("pizza-card");
const mainNav = document.getElementById("main-nav").getBoundingClientRect();
const menuNav = document.getElementById("menu-nav").getBoundingClientRect();
const menuNavLinks = document
  .getElementById("menu")
  .getElementsByClassName("nav-link");

let lastScrollPosition = mainNav.bottom;

document.addEventListener("scroll", function () {
  lastScrollPosition = window.scrollY;
  if (card.offsetTop <= lastScrollPosition) {
    document.getElementById("menu-nav").classList.add("sticky");
    document.getElementById("menu-title").classList.add("sticky");
  } else {
    document.getElementById("menu-nav").classList.remove("sticky");
    document.getElementById("menu-title").classList.remove("sticky");
  }

  Array.from(menuNavLinks).forEach((link) => {
    const card = document.querySelector(link.hash);

    if (
      card.offsetTop <= lastScrollPosition + 250 &&
      card.offsetTop + card.offsetHeight >= lastScrollPosition + 250
    ) {
      link.classList.add("newActive");
    } else {
      link.classList.remove("newActive");
    }
  });
});
