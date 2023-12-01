// Toggle class active
const NavbarNav = document.querySelector(".navbar-nav");
// ketika humberger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  NavbarNav.classList.toggle("active");
};
