document.addEventListener('DOMContentLoaded', () => {

    const imageModal = document.getElementById('imageModal')
    imageModal.addEventListener('show.bs.modal', function (event) {
        const button = event.relatedTarget
        const imgSrc = button.getAttribute('data-bs-src')
        const modalImage = document.getElementById('modalImage')
        modalImage.src = imgSrc
    })


    // #################### NAVBAR ###################################

    $(document).ready(function () {

        $('#imglink').on('click', function (event) {
            if (this.hash !== '') {
                event.preventDefault()

                const hash = this.hash
                const navbarHeight = $('.navbar').outerHeight()
                const targetOffset = $(hash).offset().top - navbarHeight

                $('html, body').animate({
                    scrollTop: targetOffset
                }, 250)
            }
        })

        $('.navbar-nav a').on('click', function (event) {
            if (this.hash !== '') {
                event.preventDefault()

                const hash = this.hash

                $('html, body').animate({
                    scrollTop: $(hash).offset().top - $('.navbar').outerHeight()
                }, 250)
            }
        })

        let navbar = $('.navbar')
        let navbarHeight = navbar.outerHeight()

        $(window).scroll(function () {
            let scroll = $(window).scrollTop()

            if (scroll > navbarHeight) {
                navbar.addClass('navbar-scrolled')
            } else {
                navbar.removeClass('navbar-scrolled')
            }
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
    })

    // #######################################################

    // #################### PORTADA ###################################

    $(document).ready(function () {
        function updateCarouselImages() {
            const isMobile = window.innerWidth <= 992

            $('.carousel-item img').each(function () {
                const desktopSrc = $(this).attr('src')
                const mobileSrc = $(this).data('mobile-src')

                if (isMobile) {
                    $(this).attr('src', mobileSrc)
                } else {
                    $(this).attr('src', desktopSrc.replace('-movil', ''))
                }
            })
        }

        updateCarouselImages()

        $(window).resize(function () {
            updateCarouselImages()
        })
    })

    // #######################################################

    $(document).ready(function () {

        $(".producto-latex, .producto-oleo").show()

        $(".tag-filter").click(function (event) {
            event.preventDefault()

            var tagId = $(this).attr('id')

            if (tagId === "mostrar-todo") {
                $(".col-md-6").fadeIn(250)
            } else {
                $(".col-md-6").fadeOut(250, function () {
                    $("." + tagId).fadeIn(250)
                })
            }
        })
    })

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

