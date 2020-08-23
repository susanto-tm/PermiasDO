function openMenu(menu_icon, menu_opened) {
    menu_icon.addClass('full-length').delay(200).queue(() => {
       menu_opened.fadeIn('fast').addClass('menu-bg').dequeue();
       $('span', menu_icon).addClass('icon-color').dequeue();
       $('span:nth-child(1), span:nth-child(3)', menu_icon).addClass('combine').dequeue();
    });
    $('html').css('overflow', 'hidden');
}

function closeMenu(menu_icon, menu_opened, clicked) {
    clicked = clicked === true ? 200 : 900;

    menu_opened.delay(clicked).queue(() => {
       menu_opened.fadeOut('fast').dequeue();
       menu_opened.removeClass('menu-bg').dequeue();
       $('span', menu_icon).removeClass('icon-color').dequeue();
    });
    $('html').css('overflow', 'auto');
}

function hoverItem(menu_opened) {
    $('.item', menu_opened).hover(function() {
        $(this).parent().siblings().stop().fadeTo('slow', 0);
        $(this).siblings().stop().fadeTo('slow', 1);
    }, function() {
        $(this).parent().siblings().stop().fadeTo('slow', 1);
        $(this).siblings().stop().fadeTo('slow', 0);
    });
}

function elementInViewport(el) {
    let top_screen = $(window).scrollTop();
    let top_element = el.offset().top;
    let bottom_element = top_element + el.innerHeight();

    if ((top_screen >= top_element) && (top_screen <= bottom_element)) {
        return true;
    }
}

function menuIconColor(menu_icon) {
    let diffBg = ['officers'];

    for (let el of diffBg) {
        if (elementInViewport($("#" + el))) {
            console.log("blue");
            menu_icon.attr('data-background-blue', 'true');
        } else {
            menu_icon.attr('data-background-blue', 'false');
        }
    }
}

function menu(refs, tlNav) {
    let menuContainer = $(refs["menuContainer"]);
    let menuIcon = $('.menu.icon', menuContainer);
    let menuOpen = $(refs["openedMenu"]);

    if (menuContainer.attr('data-opened') === "false") {
        menuContainer.attr('data-opened', "true");

        openMenu(menuIcon, menuOpen);
        tlNav.play();

    } else {
        menuContainer.attr('data-opened', 'false');
        $('span:nth-child(1), span:nth-child(3)', menuIcon).removeClass('combine').delay(200).queue(() => {
            menuIcon.removeClass('full-length').dequeue();
        });
        tlNav.reverse();
        closeMenu(menuIcon, menuOpen, false);
    }
    hoverItem(menuOpen);
}

export { menu, menuIconColor };