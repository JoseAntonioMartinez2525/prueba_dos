document.addEventListener("DOMContentLoaded", function() {
    var pwShown = 0;

    function show() {
        var p = document.getElementById('pwd');
        p.setAttribute('type', 'text');
    }

    function hide() {
        var p = document.getElementById('pwd');
        p.setAttribute('type', 'password');
    }

    document.getElementById("eye").addEventListener("click", function () {
        if (pwShown === 0) {
            pwShown = 1;
            show();
        } else {
            pwShown = 0;
            hide();
        }
    }, false);
});
document.addEventListener("DOMContentLoaded", function() {
    var pwShown = 0;

    function show() {
        var p = document.getElementById('pwd');
        p.setAttribute('type', 'text');
    }

    function hide() {
        var p = document.getElementById('pwd');
        p.setAttribute('type', 'password');
    }

    document.getElementById("eye").addEventListener("click", function () {
        if (pwShown === 0) {
            pwShown = 1;
            show();
        } else {
            pwShown = 0;
            hide();
        }
    }, false);
});