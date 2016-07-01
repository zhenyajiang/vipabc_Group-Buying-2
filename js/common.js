var COMMON = {
    changeHref: function (_href) {
        window.location.href = _href;
    },
    hideShadow: function () {
        document.querySelector('.hidden').style.display = 'none';
    },
    showShadow: function () {
        document.querySelector('.hidden').style.display = 'block';
    }
};