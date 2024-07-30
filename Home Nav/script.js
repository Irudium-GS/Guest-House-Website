function showMenu() {
    const sidebar = document.querySelector(".sideNavbar");
    const menuIcon = document.querySelector(".show-Menu");
    sidebar.style.display = 'flex';
    menuIcon.style.display = 'none';
}

function closeMenu() {
    const sidebar = document.querySelector(".sideNavbar");
    const menuIcon = document.querySelector(".show-Menu");
    sidebar.style.display = 'none';
    menuIcon.style.display = 'block';
}
