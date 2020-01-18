
function createSideButtons()
{
    btnRight = document.createElement("button");
    btnRight.setAttribute('class', 'Control C-Right');
    btnRight.setAttribute('onclick', 'rightClick()');
    document.body.append(btnRight);
    //
    btnLeft = document.createElement("button");
    btnLeft.setAttribute('class', 'Control C-Left');
    btnLeft.setAttribute('onclick', 'leftClick()');
    document.body.append(btnLeft);
    //
    btnTop = document.createElement("button");
    btnTop.setAttribute('class', 'Control C-Top');
    btnTop.setAttribute('onclick', 'topClick()');
    document.body.append(btnTop);
    //
    btnBottom = document.createElement("button");
    btnBottom.setAttribute('class', 'Control C-Bottom');
    btnBottom.setAttribute('onclick', 'bottomClick()');
    document.body.append(btnBottom);
    //

    //console.log(document.body.childNodes);
}
