window.onload = () => {
            let panelBlock = document.querySelector('.nav__Panel');
            let panelImage = document.querySelector('.nav__PanelImage');

            panelImage.addEventListener('click', (e) => {
                panelBlock.classList.toggle('nav__Panel_hidden');
                e.stopImmediatePropagation();
            });
            panelBlock.addEventListener('click', (e) => {
                e.stopImmediatePropagation();
            }, true);

            let body = document.querySelector('.body');

            body.addEventListener('click', (e) => {
                if (!panelBlock.classList.contains('nav__Panel_hidden')) {

                    panelBlock.classList.add('nav__Panel_hidden');
                }
            });

            let timeID;
            $('.main__submitsButton_b').hover(function() {

                    let sizeObj = [142, 147, 167, 150, 145, 145, 153, 162, 142, 149, 145];
                    let pos, wid;
                    do {
                        let num = Math.floor((Math.random() * 11));

                        wid = sizeObj[num];
                        pos = -36 * num;
                    }
                    while (pos == -180);

                    timeID = setTimeout(function() {
                        $('.main__submitsButton_b').animate({
                            'width': wid + 'px'
                        }, 400);
                        $('.main__submitsButtonList').animate({
                            'top': pos + 'px'

                        }, 400);

                    }, 200);
                },
                function() {

                    clearTimeout(timeID);
                    $('.main__submitsButton_b').animate({
                        'width': 143 + 'px'
                    }, 200);
                    $('.main__submitsButtonList').animate({
                        'top': -180 + 'px'
                    }, 200);
                });

        };