var menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";
function togglemenu() {
    if (menuList.style.maxHeight == "0px") {
        menuList.style.maxHeight = "230px";
    }
    else {
        menuList.style.maxHeight = "0px"
    }
}

function hide() {
    let btn = document.getElementById('btn');
    let para1 = document.getElementById('contentdr');
    let para = document.getElementById('contentdr2');
    let para3 = document.getElementById('contentdr3');
    let para4 = document.getElementById('contentdr4');

    if (para1.style.display != 'none') {
        para1.style.display = 'none';
    }
    else {
        para1.style.display = 'block';
        para.style.display = 'none';
        para3.style.display = 'none';
        para4.style.display = 'none';
    }
}

function hide2() {
    let para = document.getElementById('contentdr2');
    let para1 = document.getElementById('contentdr');
    let para3 = document.getElementById('contentdr3');
    let para4 = document.getElementById('contentdr4');

    if (para.style.display != 'none') {
        para.style.display = 'none';
        para1.style.display = 'block';


    }
    else {
        para.style.display = 'block';
        para1.style.display = 'none';
        para3.style.display = 'none';
        para4.style.display = 'none';

    }


}

function hide3() {
    let btn = document.getElementById('btn');
    let para3 = document.getElementById('contentdr3');
    let para1 = document.getElementById('contentdr');
    let para = document.getElementById('contentdr2');
    let para4 = document.getElementById('contentdr4');

    if (para3.style.display != 'none') {
        para3.style.display = 'none';
    }
    else {
        para3.style.display = 'block';
        para.style.display = 'none';
        para1.style.display = 'none';
        para4.style.display = 'none';
    }
}


function hide4() {
    let btn = document.getElementById('btn');
    let para = document.getElementById('contentdr2');
    let para1 = document.getElementById('contentdr');
    let para3 = document.getElementById('contentdr3');
    let para4 = document.getElementById('contentdr4');


    if (para4.style.display != 'none') {
        para4.style.display = 'none';
    }
    else {
        para4.style.display = 'block';
        para.style.display = 'none';
        para1.style.display = 'none';
        para3.style.display = 'none';
    }
}

//darkmode

function darkmode() {

    darkmodebtn.style.filter = 'invert(80%)'
    Lightmodebtn.style.filter = 'invert(80%)'
    iconmenu.style.filter = 'invert(80%)'
    by.style.backgroundColor = '#1F1D2B';
    aboutme.style.backgroundColor = '#1F1D2B';
    aboutme.style.boxShadow = "1px 1px 35px rgba(0, 101, 163, 0.0)";
    iamtxt.style.color = '#8d99ae';

    work.style.backgroundColor = '#1F1D2B';
    work.style.boxShadow = "1px 1px 30px 0 rgba(187, 208, 255, 0.0)";

    colorLinks("#8d99ae");

    function colorLinks(hex) {
        var links = document.getElementsByClassName("textFOrDarkMode");
        for (var i = 0; i < links.length; i++) {
            if (links[i].href) {
                links[i].style.color = hex;
            }
        }
    }

    // Home
    linkHover.addEventListener('mouseover', function handleMouseOver() {
        linkHover.style.color = '#757bc8';
    },

        linkHover.addEventListener('mouseout', function handleMouseOut() {
            linkHover.style.color = '#8d99ae';
        }))


    linkHover1.addEventListener('mouseover', function handleMouseOver() {
        linkHover1.style.color = '#757bc8';
    },

        linkHover1.addEventListener('mouseout', function handleMouseOut() {
            linkHover1.style.color = '#8d99ae';
        }))


    linkHover2.addEventListener('mouseover', function handleMouseOver() {
        linkHover2.style.color = '#757bc8';
    },

        linkHover2.addEventListener('mouseout', function handleMouseOut() {
            linkHover2.style.color = '#8d99ae';
        }))


    linkHover3.addEventListener('mouseover', function handleMouseOver() {
        linkHover3.style.color = '#757bc8';
    },

        linkHover3.addEventListener('mouseout', function handleMouseOut() {
            linkHover3.style.color = '#8d99ae';
        }))


    aboutme1.style.backgroundColor = '#262836';
    aboutme1.style.color = '#b7b7b7';


    aboutme1.style.boxShadow = "1px 1px 40px 0 rgba(187, 208, 255, 0.0)";

    aboutme2.style.backgroundColor = '#262836';
    aboutme2.style.color = '#b7b7b7';

    aboutme2.style.boxShadow = "1px 1px 40px 0 rgba(187, 208, 255, 0.0)";

    aboutme3.style.backgroundColor = '#262836';
    aboutme3.style.color = '#b7b7b7';
    aboutme3.style.boxShadow = "1px 1px 40px 0 rgba(187, 208, 255, 0.0)";

    contentdr.style.color = '#8d99ae';
    contentdr2.style.color = '#8d99ae';
    contentdr3.style.color = '#8d99ae';
    contentdr4.style.color = '#8d99ae';


    testimonalDark1.style.backgroundColor = '#262836';
    testimonalDark.style.backgroundColor = '#262836';
    testimonalDark1.style.boxShadow = "1px 1px 40px 0 rgba(187, 208, 255, 0.0)";
    testimonalDark.style.boxShadow = "1px 1px 40px 0 rgba(187, 208, 255, 0.0)";


    testimonalTittle1.style.color = '#8d99ae';
    testimonalTittle.style.color = '#8d99ae';

    document.getElementsByClassName('aboutmetest').style.color = 'red';

}

// light mode

function Lightmode() {
    darkmodebtn.style.filter = 'invert(0%)'
    Lightmodebtn.style.filter = 'invert(0%)'
    iconmenu.style.filter = 'invert(0%)'
    by.style.backgroundColor = '#fff';

    aboutme.style.backgroundColor = '#fff';
    aboutme.style.boxShadow = "1px 1px 35px rgba(0, 101, 163, 0.0)";
    iamtxt.style.color = '#53575F';

    work.style.backgroundColor = '#fffbfe';
    work.style.boxShadow = "1px 1px 30px 0 rgba(187, 208, 255, 0.0)";

    colorLinks("#53575F");

    function colorLinks(hex) {
        var links = document.getElementsByClassName("textFOrDarkMode");
        for (var i = 0; i < links.length; i++) {
            if (links[i].href) {
                links[i].style.color = hex;
            }
        }
    }

    // home
    linkHover.addEventListener('mouseover', function handleMouseOver() {
        linkHover.style.color = '#757bc8';
    },

        linkHover.addEventListener('mouseout', function handleMouseOut() {
            linkHover.style.color = '#8d99ae';
        }))


    linkHover1.addEventListener('mouseover', function handleMouseOver() {
        linkHover1.style.color = '#757bc8';
    },

        linkHover1.addEventListener('mouseout', function handleMouseOut() {
            linkHover1.style.color = '#8d99ae';
        }))


    linkHover2.addEventListener('mouseover', function handleMouseOver() {
        linkHover2.style.color = '#757bc8';
    },

        linkHover2.addEventListener('mouseout', function handleMouseOut() {
            linkHover2.style.color = '#8d99ae';
        }))


    linkHover3.addEventListener('mouseover', function handleMouseOver() {
        linkHover3.style.color = '#757bc8';
    },

        linkHover3.addEventListener('mouseout', function handleMouseOut() {
            linkHover3.style.color = '#8d99ae';
        }))



    aboutme1.style.backgroundColor = '#FFF9FE';
    aboutme1.style.color = '#53575F';
    aboutme1.style.boxShadow = "1px 1px 40px 0 rgba(187, 208, 255, 0.0)";

    aboutme2.style.backgroundColor = '#FFF9FE';
    aboutme2.style.color = '#53575F';
    aboutme2.style.boxShadow = "1px 1px 40px 0 rgba(187, 208, 255, 0.0)";

    aboutme3.style.backgroundColor = '#FFF9FE';
    aboutme3.style.color = '#53575F';
    aboutme3.style.boxShadow = "1px 1px 40px 0 rgba(187, 208, 255, 0.0)";

    contentdr.style.color = '#';
    contentdr2.style.color = '#b7b7b7';
    contentdr3.style.color = '#b7b7b7';
    contentdr4.style.color = '#b7b7b7';

    testimonalDark1.style.backgroundColor = '#FFF9FE';
    testimonalDark.style.backgroundColor = '#FFF9FE';
    testimonalDark1.style.boxShadow = "2px 7px 30px rgba(95, 95, 95, 0.0)";
    testimonalDark.style.boxShadow = "2px 7px 30px rgba(95, 95, 95, 0.0)";


    testimonalTittle1.style.color = '#8d99ae';
    testimonalTittle.style.color = '#8d99ae';

    document.getElementsByClassName('aboutmetest').style.color = 'red';

}

