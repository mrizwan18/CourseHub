function animate_items() {
    var scrollMagicController = new ScrollMagic;
    //  $(window).load(function() {
    // build scene
    var main = new ScrollScene({
            triggerElement: '#main',
        })
        .setTween(new TimelineMax().add([
            TweenLite.to("figure .bg img", 1, { scale: 1, opacity: 1, rotation: 360, ease: Back.easeInOut }),
            TweenLite.to("figure .icon img", 1, { scale: 1, opacity: 1, rotation: 360, ease: Back.easeInOut }).delay(0.1),
            TweenLite.to("figure .overlay img", 1, { scale: 1, opacity: 1, rotation: 360, ease: Back.easeInOut }).delay(0.2),

        ]))
    main.addTo(scrollMagicController)
        // });
    $('.figure01.test').click(false);
    $('.figure02.test').click(false);
    $('.figure03.test').click(false);
    $('.figure04.test').click(false);
    // Over one
    TweenLite.set('#main', { perspective: 1000 });
    TweenLite.set('.figure01 .overlay', { scale: 1, opacity: 1, rotation: 0, ease: Back.easeInOut });
    var f1 = new TimelineMax({
        paused: true
    });
    f1.to(".figure01 .overlay", 0.6, {
        scale: 1,
        opacity: 1,
        rotation: 360,
        ease: Back.easeInOut
    });
    $(document).on("mouseenter", ".figure01", function() {
        f1.play();
    }).on("mouseleave", ".figure01", function() {
        f1.reverse();
    });


    // Over two
    TweenLite.set('.figure02', { perspective: 1000 });
    TweenLite.set('.figure02 .overlay', { scale: 1, opacity: 1, rotation: 0, ease: Back.easeInOut });
    var f2 = new TimelineMax({
        paused: true
    });
    f2.to(".figure02 .overlay", 0.6, {
        scale: 1,
        opacity: 1,
        rotation: 360,
        ease: Back.easeInOut
    });
    $(document).on("mouseenter", ".figure02", function() {
        f2.play();
    }).on("mouseleave", ".figure02", function() {
        f2.reverse();
    });


    // Over f3
    TweenLite.set('.figure03', { perspective: 1000 });
    TweenLite.set('.figure03 .overlay', { scale: 1, opacity: 1, rotation: 0, ease: Back.easeInOut });
    var f3 = new TimelineMax({
        paused: true
    });
    f3.to(".figure03 .overlay", 0.6, {
        scale: 1,
        opacity: 1,
        rotation: 360,
        ease: Back.easeInOut
    });
    $(document).on("mouseenter", ".figure03", function() {
        f3.play();
    }).on("mouseleave", ".figure03", function() {
        f3.reverse();
    });

    // Over f4
    TweenLite.set('.figure04', { perspective: 1000 });
    TweenLite.set('.figure04 .overlay', { scale: 1, opacity: 1, rotation: 0, ease: Back.easeInOut });
    var f4 = new TimelineMax({
        paused: true
    });
    f4.to(".figure04 .overlay", 0.6, {
        scale: 1,
        opacity: 1,
        rotation: 360,
        ease: Back.easeInOut
    });
    $(document).on("mouseenter", ".figure04", function() {
        f4.play();
    }).on("mouseleave", ".figure04", function() {
        f4.reverse();
    });

    $('#main .figure01').on('click', e => {
        TweenMax.to('.description.two', 1.5, { opacity: 0, ease: Back.easeInOut });
        TweenMax.to('.description.three', 1.5, { opacity: 0, ease: Back.easeInOut });
        TweenMax.to('.description.four', 1.5, { opacity: 0, ease: Back.easeInOut });

        TweenMax.to('.figure01.test', 1.5, {
            scale: 1,
            ease: Back.easeInOut
        });
        TweenMax.to('.figure02.test', 1.5, {
            scale: 1,
            ease: Back.easeInOut
        });
        TweenMax.to('.figure03.test', 1.5, {
            scale: 1,
            ease: Back.easeInOut
        });
        TweenMax.to('.figure02.test', 1.5, {
            scale: 1,
            ease: Back.easeInOut
        });

        TweenMax.to(document.getElementsByClassName('figure01'), 1.5, {
            y: 180,
            x: -270,
            className: "+=test",
            scale: 1,
            ease: Back.easeInOut
        });

        TweenMax.to(document.getElementsByClassName('figure02'), 1.5, {
            y: -50,
            x: 330,
            className: "-=test",
            scale: 0.6,
            ease: Back.easeInOut
        });

        TweenMax.to(document.getElementsByClassName('figure03'), 1.5, {
            y: -220,
            x: 906,
            className: "-=test",
            scale: 0.6,
            ease: Back.easeInOut
        });
        TweenMax.to(document.getElementsByClassName('figure04'), 1.5, {
            y: 3,
            x: 330,
            className: "-=test",
            scale: 0.6,
            ease: Back.easeInOut
        });
        TweenMax.to('.figure02.test', 1.5, { scale: 0.6, ease: Back.easeInOut });
        TweenMax.to('.figure03.test', 1.5, { scale: 0.6, ease: Back.easeInOut });
        TweenMax.to('.figure04.test', 1.5, { scale: 0.6, ease: Back.easeInOut });
        TweenMax.to('.description.one', 1.5, {
            opacity: 1,
            ease: Back.easeInOut
        }).delay(1);

        TweenMax.to('.description.one .cell1', 1.5, { opacity: 1, ease: Back.easeInOut }).delay(1.2);
        TweenMax.from('.description.one .cell1 .point', 1.5, { opacity: 1, ease: Back.easeInOut }).delay(1.6);
        TweenMax.from('.description.one .cell1 .content', 1.5, { x: 10, ease: Back.easeInOut }).delay(1.8);

        TweenMax.to('.description.one .cell2', 1.5, { opacity: 1, ease: Back.easeInOut }).delay(1.2);
        TweenMax.from('.description.one .cell2 .point', 1.5, { opacity: 1, ease: Back.easeInOut }).delay(1.6);
        TweenMax.from('.description.one .cell2 .content', 1.5, { x: 10, ease: Back.easeInOut }).delay(1.8);

        TweenMax.to('.description.one .cell3', 1.5, { opacity: 1, ease: Back.easeInOut }).delay(1.2);
        TweenMax.from('.description.one .cell3 .point', 1.5, { opacity: 1, ease: Back.easeInOut }).delay(1.6);
        TweenMax.from('.description.one .cell3 .content', 1.5, { x: 10, ease: Back.easeInOut }).delay(1.8);

        TweenMax.to('.description.one .cell4', 1.5, { opacity: 1, ease: Back.easeInOut }).delay(1.2);
        TweenMax.from('.description.one .cell4 .point', 1.5, { opacity: 1, ease: Back.easeInOut }).delay(1.6);
        TweenMax.from('.description.one .cell4 .content', 1.5, { x: 10, ease: Back.easeInOut }).delay(1.8);

        TweenMax.to('.description.one .cell5', 1.5, { opacity: 1, ease: Back.easeInOut }).delay(1.2);
        TweenMax.from('.description.one .cell5 .point', 1.5, { opacity: 1, ease: Back.easeInOut }).delay(1.6);
        TweenMax.from('.description.one .cell5 .content', 1.5, { x: 10, ease: Back.easeInOut }).delay(1.8);

        TweenMax.to('.description.one .cell6', 1.5, { opacity: 1, ease: Back.easeInOut }).delay(1.2);
        TweenMax.from('.description.one .cell6 .point', 1.5, { opacity: 1, ease: Back.easeInOut }).delay(1.6);
        TweenMax.from('.description.one .cell6 .content', 1.5, { x: 10, ease: Back.easeInOut }).delay(1.8);

        TweenMax.to('.description.one .cell7', 1.5, { opacity: 1, ease: Back.easeInOut }).delay(1.2);
        TweenMax.from('.description.one .cell7 .point', 1.5, { opacity: 1, ease: Back.easeInOut }).delay(1.6);
        TweenMax.from('.description.one .cell7 .content', 1.5, { x: 10, ease: Back.easeInOut }).delay(1.8);

    })
    $('#main .figure02').on('click', e => {
        TweenMax.to('.description.one', 1.5, { opacity: 0, ease: Back.easeInOut });
        TweenMax.to('.description.three', 1.5, { opacity: 0, ease: Back.easeInOut });
        TweenMax.to('.description.four', 1.5, { opacity: 0, ease: Back.easeInOut });




        TweenMax.to('.figure01.test', 1.5, {
            scale: 1,
            ease: Back.easeInOut
        });
        TweenMax.to('.figure02.test', 1.5, {
            scale: 1,
            ease: Back.easeInOut
        });
        TweenMax.to('.figure03.test', 1.5, {
            scale: 1,
            ease: Back.easeInOut
        });
        TweenMax.to('.figure04.test', 1.5, {
            scale: 1,
            ease: Back.easeInOut
        });
        TweenMax.to(document.getElementsByClassName('figure02'), 1.5, {
            y: 180,
            x: -770,
            scale: 1,
            className: "+=test",
            ease: Back.easeInOut
        });

        TweenMax.to(document.getElementsByClassName('figure01'), 1.5, {
            y: -50,
            x: 930,
            className: "-=test",
            scale: 0.6,
            ease: Back.easeInOut
        });
        TweenMax.to(document.getElementsByClassName('figure03'), 1.5, {
            y: -220,
            x: 906,
            className: "-=test",
            scale: 0.6,
            ease: Back.easeInOut
        });
        TweenMax.to(document.getElementsByClassName('figure04'), 1.5, {
            y: 3,
            x: 330,
            className: "-=test",
            scale: 0.6,
            ease: Back.easeInOut
        });
        TweenMax.to('.figure01.test', 1.5, { scale: 0.6, ease: Back.easeInOut });
        TweenMax.to('.figure03.test', 1.5, { scale: 0.6, ease: Back.easeInOut });
        TweenMax.to('.figure04.test', 1.5, { scale: 0.6, ease: Back.easeInOut });
        TweenMax.to('.description.two', 1.5, {
            opacity: 1,
            ease: Back.easeInOut
        }).delay(1);

        TweenMax.to('.description.two .cell1', 1.5, { opacity: 1, ease: Back.easeInOut }).delay(1.2);
        TweenMax.from('.description.two .cell1 .point', 1.5, { opacity: 1, ease: Back.easeInOut }).delay(1.6);
        TweenMax.from('.description.two .cell1 .content', 1.5, { x: 10, ease: Back.easeInOut }).delay(1.8);

        TweenMax.to('.description.two .cell2', 1.5, { opacity: 1, ease: Back.easeInOut }).delay(1.2);
        TweenMax.from('.description.two .cell2 .point', 1.5, { opacity: 1, ease: Back.easeInOut }).delay(1.6);
        TweenMax.from('.description.two .cell2 .content', 1.5, { x: 10, ease: Back.easeInOut }).delay(1.8);

        TweenMax.to('.description.two .cell3', 1.5, { opacity: 1, ease: Back.easeInOut }).delay(1.2);
        TweenMax.from('.description.two .cell3 .point', 1.5, { opacity: 1, ease: Back.easeInOut }).delay(1.6);
        TweenMax.from('.description.two .cell3 .content', 1.5, { x: 10, ease: Back.easeInOut }).delay(1.8);

        TweenMax.to('.description.two .cell4', 1.5, { opacity: 1, ease: Back.easeInOut }).delay(1.2);
        TweenMax.from('.description.two .cell4 .point', 1.5, { opacity: 1, ease: Back.easeInOut }).delay(1.6);
        TweenMax.from('.description.two .cell4 .content', 1.5, { x: 10, ease: Back.easeInOut }).delay(1.8);

        TweenMax.to('.description.two .cell5', 1.5, { opacity: 1, ease: Back.easeInOut }).delay(1.2);
        TweenMax.from('.description.two .cell5 .point', 1.5, { opacity: 1, ease: Back.easeInOut }).delay(1.6);
        TweenMax.from('.description.two .cell5 .content', 1.5, { x: 10, ease: Back.easeInOut }).delay(1.8);

        TweenMax.to('.description.two .cell6', 1.5, { opacity: 1, ease: Back.easeInOut }).delay(1.2);
        TweenMax.from('.description.two .cell6 .point', 1.5, { opacity: 1, ease: Back.easeInOut }).delay(1.6);
        TweenMax.from('.description.two .cell6 .content', 1.5, { x: 10, ease: Back.easeInOut }).delay(1.8);

        TweenMax.to('.description.two .cell7', 1.5, { opacity: 1, ease: Back.easeInOut }).delay(1.2);
        TweenMax.from('.description.two .cell7 .point', 1.5, { opacity: 1, ease: Back.easeInOut }).delay(1.6);
        TweenMax.from('.description.two .cell7 .content', 1.5, { x: 10, ease: Back.easeInOut }).delay(1.8);

    })
    $('#main .figure03').on('click', e => {
        TweenMax.to('.description.one', 1.5, { opacity: 0, ease: Back.easeInOut });
        TweenMax.to('.description.two', 1.5, { opacity: 0, ease: Back.easeInOut });
        TweenMax.to('.description.four', 1.5, { opacity: 0, ease: Back.easeInOut });



        TweenMax.to('.figure01.test', 1.5, {
            scale: 1,
            ease: Back.easeInOut
        });
        TweenMax.to('.figure02.test', 1.5, {
            scale: 1,
            ease: Back.easeInOut
        });
        TweenMax.to('.figure03.test', 1.5, {
            scale: 1,
            ease: Back.easeInOut
        });
        TweenMax.to('.figure02.test', 1.5, {
            scale: 1,
            ease: Back.easeInOut
        });
        TweenMax.to(document.getElementsByClassName('figure03'), 1.5, {
            y: -240,
            x: -310,
            scale: 1,
            className: "+=test",
            ease: Back.easeInOut
        });

        TweenMax.to(document.getElementsByClassName('figure01'), 1.5, {
            y: -80,
            x: 930,
            className: "-=test",
            scale: 0.6,
            ease: Back.easeInOut
        });
        TweenMax.to(document.getElementsByClassName('figure02'), 1.5, {
            y: 145,
            x: 356,
            scale: 0.6,
            className: "-=test",
            ease: Back.easeInOut
        });
        TweenMax.to(document.getElementsByClassName('figure04'), 1.5, {
            y: 3,
            x: 330,
            className: "-=test",
            scale: 0.6,
            ease: Back.easeInOut
        });
        TweenMax.to('.figure01.test', 1.5, { scale: 0.6, ease: Back.easeInOut });
        TweenMax.to('.figure02.test', 1.5, { scale: 0.6, ease: Back.easeInOut });
        TweenMax.to('.figure04.test', 1.5, { scale: 0.6, ease: Back.easeInOut });
        TweenMax.to('.description.three', 1.5, {
            opacity: 1,
            ease: Back.easeInOut
        }).delay(1);

        TweenMax.to('.description.three .cell1', 1.5, { opacity: 1, ease: Back.easeInOut }).delay(1.2);
        TweenMax.from('.description.three .cell1 .point', 1.5, { opacity: 1, ease: Back.easeInOut }).delay(1.6);
        TweenMax.from('.description.three .cell1 .content', 1.5, { x: 10, ease: Back.easeInOut }).delay(1.8);

        TweenMax.to('.description.three .cell2', 1.5, { opacity: 1, ease: Back.easeInOut }).delay(1.2);
        TweenMax.from('.description.three .cell2 .point', 1.5, { opacity: 1, ease: Back.easeInOut }).delay(1.6);
        TweenMax.from('.description.three .cell2 .content', 1.5, { x: 10, ease: Back.easeInOut }).delay(1.8);

        TweenMax.to('.description.three .cell3', 1.5, { opacity: 1, ease: Back.easeInOut }).delay(1.2);
        TweenMax.from('.description.three .cell3 .point', 1.5, { opacity: 1, ease: Back.easeInOut }).delay(1.6);
        TweenMax.from('.description.three .cell3 .content', 1.5, { x: 10, ease: Back.easeInOut }).delay(1.8);

        TweenMax.to('.description.three .cell4', 1.5, { opacity: 1, ease: Back.easeInOut }).delay(1.2);
        TweenMax.from('.description.three .cell4 .point', 1.5, { opacity: 1, ease: Back.easeInOut }).delay(1.6);
        TweenMax.from('.description.three .cell4 .content', 1.5, { x: 10, ease: Back.easeInOut }).delay(1.8);

        TweenMax.to('.description.three .cell5', 1.5, { opacity: 1, ease: Back.easeInOut }).delay(1.2);
        TweenMax.from('.description.three .cell5 .point', 1.5, { opacity: 1, ease: Back.easeInOut }).delay(1.6);
        TweenMax.from('.description.three .cell5 .content', 1.5, { x: 10, ease: Back.easeInOut }).delay(1.8);

        TweenMax.to('.description.three .cell6', 1.5, { opacity: 1, ease: Back.easeInOut }).delay(1.2);
        TweenMax.from('.description.three .cell6 .point', 1.5, { opacity: 1, ease: Back.easeInOut }).delay(1.6);
        TweenMax.from('.description.three .cell6 .content', 1.5, { x: 10, ease: Back.easeInOut }).delay(1.8);

        TweenMax.to('.description.three .cell7', 1.5, { opacity: 1, ease: Back.easeInOut }).delay(1.2);
        TweenMax.from('.description.three .cell7 .point', 1.5, { opacity: 1, ease: Back.easeInOut }).delay(1.6);
        TweenMax.from('.description.three .cell7 .content', 1.5, { x: 10, ease: Back.easeInOut }).delay(1.8);

    })
    $('#main .figure04').on('click', e => {
        TweenMax.to('.description.one', 1.5, { opacity: 0, ease: Back.easeInOut });
        TweenMax.to('.description.three', 1.5, { opacity: 0, ease: Back.easeInOut });
        TweenMax.to('.description.two', 1.5, { opacity: 0, ease: Back.easeInOut });


        TweenMax.to('.figure01.test', 1.5, {
            scale: 1,
            ease: Back.easeInOut
        });
        TweenMax.to('.figure02.test', 1.5, {
            scale: 1,
            ease: Back.easeInOut
        });
        TweenMax.to('.figure03.test', 1.5, {
            scale: 1,
            ease: Back.easeInOut
        });
        TweenMax.to('.figure02.test', 1.5, {
            scale: 1,
            ease: Back.easeInOut
        });
        TweenMax.to(document.getElementsByClassName('figure04'), 1.5, {
            y: -240,
            x: -810,
            scale: 1,
            className: "+=test",
            ease: Back.easeInOut
        });

        TweenMax.to(document.getElementsByClassName('figure01'), 1.5, {
            y: -80,
            x: 930,
            className: "-=test",
            scale: 0.6,
            ease: Back.easeInOut
        });
        TweenMax.to(document.getElementsByClassName('figure03'), 1.5, {
            y: -20,
            x: 927,
            className: "-=test",
            scale: 0.6,
            ease: Back.easeInOut
        });
        TweenMax.to(document.getElementsByClassName('figure02'), 1.5, {
            y: 133,
            x: 360,
            className: "-=test",
            scale: 0.6,
            ease: Back.easeInOut
        });
        TweenMax.to('.figure01.test', 1.5, { scale: 0.6, ease: Back.easeInOut });
        TweenMax.to('.figure02.test', 1.5, { scale: 0.6, ease: Back.easeInOut });
        TweenMax.to('.figure03.test', 1.5, { scale: 0.6, ease: Back.easeInOut });
        TweenMax.to('.description.four', 1.5, {
            opacity: 1,
            ease: Back.easeInOut
        }).delay(1);

        TweenMax.to('.description.four .cell1', 1.5, { opacity: 1, ease: Back.easeInOut }).delay(1.2);
        TweenMax.from('.description.four .cell1 .point', 1.5, { opacity: 1, ease: Back.easeInOut }).delay(1.6);
        TweenMax.from('.description.four .cell1 .content', 1.5, { x: 10, ease: Back.easeInOut }).delay(1.8);

        TweenMax.to('.description.four .cell2', 1.5, { opacity: 1, ease: Back.easeInOut }).delay(1.2);
        TweenMax.from('.description.four .cell2 .point', 1.5, { opacity: 1, ease: Back.easeInOut }).delay(1.6);
        TweenMax.from('.description.four .cell2 .content', 1.5, { x: 10, ease: Back.easeInOut }).delay(1.8);

        TweenMax.to('.description.four .cell3', 1.5, { opacity: 1, ease: Back.easeInOut }).delay(1.2);
        TweenMax.from('.description.four .cell3 .point', 1.5, { opacity: 1, ease: Back.easeInOut }).delay(1.6);
        TweenMax.from('.description.four .cell3 .content', 1.5, { x: 10, ease: Back.easeInOut }).delay(1.8);

        TweenMax.to('.description.four .cell4', 1.5, { opacity: 1, ease: Back.easeInOut }).delay(1.2);
        TweenMax.from('.description.four .cell4 .point', 1.5, { opacity: 1, ease: Back.easeInOut }).delay(1.6);
        TweenMax.from('.description.four .cell4 .content', 1.5, { x: 10, ease: Back.easeInOut }).delay(1.8);

        TweenMax.to('.description.four .cell5', 1.5, { opacity: 1, ease: Back.easeInOut }).delay(1.2);
        TweenMax.from('.description.four .cell5 .point', 1.5, { opacity: 1, ease: Back.easeInOut }).delay(1.6);
        TweenMax.from('.description.four .cell5 .content', 1.5, { x: 10, ease: Back.easeInOut }).delay(1.8);

        TweenMax.to('.description.four .cell6', 1.5, { opacity: 1, ease: Back.easeInOut }).delay(1.2);
        TweenMax.from('.description.four .cell6 .point', 1.5, { opacity: 1, ease: Back.easeInOut }).delay(1.6);
        TweenMax.from('.description.four .cell6 .content', 1.5, { x: 10, ease: Back.easeInOut }).delay(1.8);

        TweenMax.to('.description.four .cell7', 1.5, { opacity: 1, ease: Back.easeInOut }).delay(1.2);
        TweenMax.from('.description.four .cell7 .point', 1.5, { opacity: 1, ease: Back.easeInOut }).delay(1.6);
        TweenMax.from('.description.four .cell7 .content', 1.5, { x: 10, ease: Back.easeInOut }).delay(1.8);
    })
}


$(function() {
    animate_items();
    $('.navbar-brand').on('click', function() {
        animate_items();
    });
});