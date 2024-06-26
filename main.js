document.addEventListener('DOMContentLoaded', () => {

    $(document).ready(function () {
        let navbar = $('.navbar')

        let navbarHeight = navbar.height()

        $(window).scroll(function () {
            let scroll = $(window).scrollTop()

            if (scroll > navbarHeight) {
                navbar.addClass('navbar-scrolled')
            } else {
                navbar.removeClass('navbar-scrolled')
            }
        })
    })

    window.addEventListener('resize', function () {
        let windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
        let navbarNavList = document.getElementById('navbarNavList')
        let navItems = navbarNavList.querySelectorAll('li')
        navItems.forEach(function (item) {
            if (windowWidth < 992) {
                item.classList.add('mb-3')
            } else {
                item.classList.remove('mb-3')
            }
        })
        if (windowWidth < 992) {
            navbarNavList.classList.add('mt-4')
        } else {
            navbarNavList.classList.remove('mt-4')
        }
    })

    $(document).ready(function () {

        $(".producto-latex, .producto-oleo").show()

        $(".tag-filter").click(function (event) {
            event.preventDefault()

            var tagId = $(this).attr('id')

            if (tagId === "mostrar-todo") {
                $(".col-md-6").fadeIn(500)
            } else {
                $(".col-md-6").fadeOut(500, function () {
                    $("." + tagId).fadeIn(500)
                })
            }
        })
    })

    handleFlexClass()
    window.addEventListener('resize', handleFlexClass)

})


function changeActive(element) {
    let navLinks = document.querySelectorAll('.navbar-nav .nav-link')

    navLinks.forEach(function (link) {
        link.classList.remove('active')
        link.classList.remove('hovered')
    })

    element.classList.add('active')
    element.classList.add('hovered')
}