function setTab(name, cursel) {
    cursel_0 = cursel;
    for (var i = 1; i <= links_len; i++) {
        var menu = document.getElementById(name + i);
        var medo = document.getElementById(name + i);
        var medo1 = document.getElementById(name + i);
        var medo2 = document.getElementById(name + i);

        var meduo2 = document.getElementById("con_" + name + "_" + i);
        var meduo1 = document.getElementById("con_" + name + "_" + i);
        var menudiv = document.getElementById("con_" + name + "_" + i);
        var meduo = document.getElementById("con_" + name + "_" + i);
        if (i == cursel) {

            menu.className = "off";
            medo.className = "off";
            medo1.className = "off";
            medo2.className = "off";

            meduo2.style.display = "block";
            meduo1.style.display = "block";
            meduo.style.display = "block";
            menudiv.style.display = "block";

        }
        else {

            menu.className = "";
            medo.className = "";
            medo2.className = "";
            medo1.className = "";

            meduo1.style.display = "none";
            meduo2.style.display = "none";
            meduo.style.display = "none";
            menudiv.style.display = "none";
        }
    }
}

var name_0 = 'one';
var name_0 = 'column';
var name_0 = 'colum';
var name_0 = 'colun';
var cursel_0 = 1;
var links_len, iIntervalId;
onload = function () {

    var links = document.getElementById("tab1").getElementsByTagName('li');
    var links = document.getElementById("tab2").getElementsByTagName('dd');
    var links = document.getElementById("tab3").getElementsByTagName('dd');
    var links = document.getElementById("tab4").getElementsByTagName('dd');

    links_len = links.length;
    for (var i = 0; i < links_len; i++) {
        links[i].onmouseover = function () {
            clearInterval(iIntervalId);
        }
    }

    document.getElementById("con_" + name_0 + "_" + links_len).parentNode.onmouseover = function () {
        clearInterval(iIntervalId);
    };
    setTab(name_0, cursel_0);
};





