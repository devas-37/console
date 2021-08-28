function Consol(container) {

    this.init(container)
}
CreateElement = (el) => document.createElement(el)
Consol.prototype = (function() {

            const css = {
                color: 'darkred',
                'font-weight': 'bold',
            }

            let theme = {
                str: {
                    color: '#d90f1f',
                },
                num: {
                    color: 'blue'
                }
            }

            const makeEl = (value, type) => {
                    return `<span style='color:${theme[type].color}'>${type!=='str'?(`${value}`):(`"${value}"`)}</span>, `
    }

    function makeHint(object) {
        let isArr = Array.isArray(object)
        let result = isArr ? `(${object.length}) [` : '{'
        for (const key in object) {
            if (typeof object[key] === 'string')
                result += makeEl(object[key], 'str')
            else if (typeof object[key] === 'object')
                result += Array.isArray(object[key]) ? `Array(${object[key].length}), ` : '{...}, '
            else result += makeEl(object[key], 'num')
        }
        return "<span style='font-style:italic'>"+result + `${isArr?']':'}'}<br></span>`
    }

    function drawer(container, key, value, indent = 0) {
        if (typeof value === "object") {
            container.innerHTML += `<span style='margin-left:${indent*6}px;color:#972485'> ${key}: </span>` + makeHint(value)
            for (const key in value)
                drawer(container, key, value[key], indent + 4)
        } else {
            let val = typeof value === 'string' ? `<span style='color:#f34531'>"${value}"</span>` : value
            container.innerHTML += `<span style='margin-left:${indent*6}px;color:#972485'> ` + key + `</span>` + ": " + val + '<br>'
        }
    }

    function span(data, color) {
        let m = document.createElement('div')
        let span = CreateElement('span')
        span.style.color = color
        span.innerText = data
        m.appendChild(span)
        return m.innerHTML
    }
    return {
        init(container) {
            this.consol = document.getElementById(container)
        },
        log() {
            let arg = Array.from(arguments)
            arg.forEach((item) => {
                switch (typeof item) {
                    case "object":
                        this.consol.innerHTML += makeHint(item)
                        for (const i in item) {
                            drawer(this.consol, i, item[i], 4)
                        }
                        break
                    case 'string':
                        this.consol.innerText += item
                        break
                }
            })
        }
    }
})()