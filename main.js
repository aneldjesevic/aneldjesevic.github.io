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
        
        function openTab(evt, tabName) {
            var i, tabcontent, tablinks;
            tabcontent = document.getElementsByClassName("tabcontent");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }
            tablinks = document.getElementsByClassName("tablinks");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
            }
            document.getElementById(tabName).style.display = "block";
            evt.currentTarget.className += " active";
        }
        document.getElementById("loginTab").click();

        var password = document.getElementById("etSPassword")
            , confirm_password = document.getElementById("etConfirmPassword");

        function validatePassword() {
            if (confirm_password.value != password.value) {
                confirm_password.setCustomValidity("Passwords Don't Match");
            } else {
                confirm_password.setCustomValidity('');
            }
        }

        password.onchange = validatePassword;
        confirm_password.onkeyup = validatePassword;

