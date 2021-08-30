function Consol(container) {

    this.init(container)
}

Consol.prototype = (function() {
            let CreateElement = (el, css) => {
                let bufer = document.createElement(el)
                bufer.setCss(css)
                return bufer
            }
            HTMLElement.prototype.setCss = function(css = {}) {
                for (const key in css)
                    this.style[key] = css[key]
            }
            let theme = {
                str: {
                    color: '#3CEC85',
                },
                num: {
                    color: '#FF955C'
                },
                bool: {
                    color: '#E35535'
                }
            }

            const makeEl = (value, type) => {
                    return `<span style='color:${theme[type].color}'>${type!=='str'?(`${value}`):(`"${value}"`)}</span>, `
    }

    function makeHint(object, bool = true) {
        let isArr = Array.isArray(object)
        let result = isArr ? `Array(${object.length})[` : '{'
        for (const key in object) {
            result += !isArr ? (key + ": ") : ''
            switch (typeof object[key]) {

                case 'string':
                    result += makeEl(object[key], 'str')
                    break
                case 'number':
                    result += makeEl(object[key], 'num')
                    break
                case 'object':
                    if (Array.isArray(object[key])) {
                        if (object[key].length === 0) result += '[], '
                        else result += `Array(${object[key].length}), `
                    } else result += '{...}, '
                    break
                case 'function':
                    result += makeEl('f', 'num')
                    break
                case 'boolean':
                    result += makeEl(object[key], 'bool')
                    break
            }
        }
        let dd = CreateElement('div')
        let hint = CreateElement('div')
        hint.className = 'md'
        hint.className = bool ? 'collapse' : 'root'
        hint.innerHTML = `<span>${(result + (isArr ? "]" : '}')).replace(isArr ? ', ]' : ', }', isArr ? ']' : '}')}</span>`
        dd.appendChild(hint)
        return dd.innerHTML
    }
    let keys = (key) => {
        return `<span style='color:white'>${key}</span>`
    }

    function grip() {
        return `<svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M9.78633 6.74709L4.58008 2.25724C4.38594 2.09044 4.10156 2.24083 4.10156 2.51017V11.4899C4.10156 11.7592 4.38594 11.9096 4.58008 11.7428L9.78633 7.25295C9.93535 7.12443 9.93535 6.8756 9.78633 6.74709Z" fill="#727272"/>
        </svg>
        `
    }

    function drawer(value, indent = 0) {
        let result = CreateElement('div', {
            overflow: 'hidden',
            maxHeight: 0
        })
        result.className = 'expandable'
        for (const key in value) {
            if (typeof value[key] !== 'object') {
                let val
                switch (typeof value[key]) {
                    case 'number':
                        val = makeEl(value[key], 'num')
                        break
                    case 'string':
                        val = makeEl(value[key], 'str')
                        break
                    case 'function':
                        val = makeEl(value[key], 'num')
                        break
                    case 'boolean':
                        val = makeEl(value[key], 'bool')
                        break
                }
                let div = CreateElement('div', {
                    marginLeft: `${indent*10}px`
                })
                div.innerHTML = keys(key) + ": " + val
                result.appendChild(div)
            } else {
                let div = CreateElement('div', {
                    marginLeft: `${indent*10}px`,
                    display: 'flex',
                    alignItems: 'center'
                })
                div.innerHTML = grip() + keys(key) + ": " + makeHint(value[key])
                result.appendChild(div)
                result.appendChild(drawer(value[key], indent + 4))
            }
        }
        return result
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
                        let root = CreateElement('div')
                        root.innerHTML = makeHint(item, false)
                        root.addEventListener('click', function() {
                            this.nextSibling.style.maxHeight = this.nextSibling.scrollHeight + 100 + 'px'
                            setTimeout(() => {
                                this.nextSibling.style.maxHeight = 'fit-content'
                            }, 500)
                        })
                        this.consol.appendChild(root)
                        this.consol.appendChild(drawer(item, 0))
                        let arr = this.consol.getElementsByClassName('collapse')
                        for (const a of arr) {
                            a.addEventListener('click', function() {
                                let el = this.parentElement.nextSibling
                                if (el.getAttribute('state')==='open'){
                                    el.style.maxHeight = 0
                                    el.setAttribute('state','close')
                                    this.style.opacity=1
                                }else{
                                    el.style.maxHeight = el.scrollHeight + 100 + 'px'
                                    this.style.opacity=0
                                    el.setAttribute('state','open')
                                    setTimeout(function(){
                                        el.style.maxHeight = 'fit-content'
                                    }, 500)
                                }
                                
                            })
                        }
                        break
                    case 'string':
                        let str = CreateElement('div')
                        str.innerHTML = makeEl(item, 'str')
                        this.consol.appendChild(str)
                        break
                    case 'number':
                        let num = CreateElement('div')
                        num.innerHTML = makeEl(item, 'num')
                        this.consol.appendChild(num)
                        break
                    case 'function':
                        let fn = CreateElement('div')
                        fn.innerHTML = makeEl(item, 'num')
                        this.consol.appendChild(fn)
                        break
                }
            })

        }
    }
})()