function $(selector) {
    let element;
    if (typeof selector == "string") {
        element = document.querySelectorAll(selector);

    } else if (selector instanceof HTMLElement) {
        element = [selector]
    } else {
        element = null;
    }
    return new jQ(element);

}

function jQ(params) {
    this.element = params;
    this.on = function (event, callBackFun) {
        for (let i = 0; i < this.element.length; i++) {
            this.element[i].addEventListener(event, callBackFun)

        }
        return this;
    }
    this.html = function (html) {
        if (typeof html == "string" || typeof html == "number") {
            for (let i = 0; i < this.element.length; i++) {
                this.element[i].innerHTML = html;

            }
        }
        return this;
    }
    this.css = function (styleName, value) {
        if (typeof styleName == "string" && (typeof value == "string" || typeof value == "number")) {
            for (let i = 0; i < this.element.length; i++) {
                this.element[i].style = `${styleName}: ${value};`

            }
        } else if (typeof styleName == "object" && styleName != null && !Array.isArray(styleName)) {

            for (let i = 0; i < this.element.length; i++) {
                for (const key in styleName) {
                    this.element[i].style[key] = styleName[key]
                }
            }
            return this;
        }
    }
    this.toggleClass = function (className) {
        if (typeof className == "string") {
            for (let i = 0; i < this.element.length; i++) {
                if (this.element[i].classList.contains(className)) {
                    this.element[i].classList.remove(className);
                } else {
                    this.element[i].classList.add(className);
                }

            }

        }
        return this
    }
    this.hover = function (mouseoverFun, mouseoutFun) {
        if (typeof mouseoverFun == "function" && typeof mouseoutFun == "function") {
            this.on("mouseover", mouseoverFun);
            this.on("mouseout", mouseoutFun);
        }
        return this
    }
    this.dblclick = function (callBackFun) {
        if (typeof callBackFun == "function") {
            this.on("dblclick", callBackFun)
        }
        return this
    }
    this.attr = function (attrName, value) {
        if (typeof attrName == "string" && (typeof value == "string" || typeof value == "number")) {
            for (let i = 0; i < this.element.length; i++) {
                this.element[i].setAttribute(attrName, value)

            }
        } else if (typeof attrName == "object" && attrName != null && !Array.isArray(attrName)) {
            for (let i = 0; i < this.element.length; i++) {
                for (const key in attrName) {
                    this.element[i].setAttribute(key, attrName[key])
                }

            }
        } else if (typeof attrName == "string" && value === undefined) {
            return this.element[0].getAttribute(attrName);
        }
        return this;
    }
    this.removeAttr = function (attrName) {
        if (typeof attrName == "string") {
            for (let i = 0; i < this.element.length; i++) {
                this.element[i].removeAttribute(attrName)

            }
        }
        return this
    }
    this.next = function () {
        this.element = [this.element[0].nextElementSibling]
        return this
    }
    this.contain = function (className) {
        if (typeof className == "string") {
            for (let i = 0; i < this.element.length; i++) {
                if (this.element[0].classList.contains(className)) {
                    return true
                    // console.log(true);
                } else {
                    return false
                    //  console.log(false);
                }
            }
        }
        return this
    }
    this.hoverFun = function (hoverFun) {
        if (typeof hoverFun == "function") {
            this.on("mouseover", hoverFun)
        }
        return this
    }
    this.prevEl = function () {
        for (let i = 0; i < this.element.length; i++) {
            return this.element[i].previousElementSibling;
            //    console.log(this.element[i].previousElementSibling);

        }
    }
    this.children = function (className) {
        for (let i = 0; i < this.element.length; i++) {
            return this.element[i].children()
        //     console.log(this.element[i].children);
        }
      }

}