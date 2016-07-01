var COMMON = {
    changeHref: function (_href) {
        window.location.href = _href;
    },
    hideShadow: function () {
        document.querySelector('.hidden').style.display = 'none';
    },
    showShadow: function () {
        document.querySelector('.hidden').style.display = 'block';
    },
    showToast: function (msg, duration) {
        duration = isNaN(duration) ? 2000 : duration;
        var m = document.createElement('div');
        m.innerHTML = msg;
        m.setAttribute('class', 'toastDiv');
        document.body.appendChild(m);
        setTimeout(function () {
            var d = 0.5;
            m.style.webkitTransition = '-webkit-transform ' + d
                + 's ease-in, opacity ' + d + 's ease-in';
            m.style.opacity = '0';
            setTimeout(function () {
                document.body.removeChild(m)
            }, d * 1000);
        }, duration);
    },
    checkPwd: function (id) {
        var pwd = document.getElementById(id).value;

        if (!pwd) {
            this.showToast("密码不能为空");
            return false;
        }

        return true;
    },

    checkMail: function (id) {
        var acct = document.getElementById(id).value;

        if (!acct) {
            this.showToast("账号不能为空");
            return false;
        }

        var emailReg = /^([a-zA-Z-z0-9_\.-]+)@([\da-zA-Z\.-]+)\.([a-zA-Z\.]{2,6})$/;
        if (!emailReg.test(acct)) {
            this.showToast("您输入的邮箱有误,请重新核对后再输入!");
            return false;
        }

        return true;
    }
};