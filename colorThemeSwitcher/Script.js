//We declared a const 'menuItems' which will get the tag attributes of our tags.

const menuItems = document.querySelectorAll(".menu__item");

for (var i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("click", buttonClick);
}

function buttonClick() {
  if (!this.classList.contains("menu__item--active")) {
    document.body.style.backgroundColor = `#${this.getAttribute(
      "data-background"
    )}`;
  }
}
