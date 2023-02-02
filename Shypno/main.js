var isOpen = Boolean = true;
        var btnMenu = document.getElementById("btn-menu");
        var menuList = document.getElementById("menu-list");
        var mobileMenu = document.getElementById("mobile-menu-list");

        function clickMenu() {
            isOpen = !isOpen;
            if (isOpen) {
                closeMenu();
            }
            else {
                openMenu();
            }
        }
        function openMenu() {
            mobileMenu.style.display = "block";

        }
        function closeMenu() {
            mobileMenu.style.display = "none";
        }

        $(window).resize(function () {
            var height = $(window).height();
            var width = $(window).width();

            if (width <= 780) {
                btnMenu.style.display = "block";
                menuList.style.display = "none";
            }
            else{
                btnMenu.style.display = "none";
                menuList.style.display = "inline-block";
                mobileMenu.style.display = "none";
            }
        });
        