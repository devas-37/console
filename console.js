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
                },
                bool: {
                    color: 'green'
                }
            }

            const makeEl = (value, type) => {
                    return `<span style='color:${theme[type].color}'>${type!=='str'?(`${value}`):(`"${value}"`)}</span>, `
    }

    function makeHint(object) {
            let isArr=Array.isArray(object)
            let result = isArr?`Array(${object.length})[`:'{'
            for (const key in object ){
                result+=!isArr?(key+": "):''
                switch(typeof object[key]){
                    case 'string':
                        result+=makeEl(object[key],'str')
                        break
                    case 'number':
                        result+=makeEl(object[key],'num')
                        break
                    case 'object':
                        if (Array.isArray(object[key])){
                            if (object[key].length===0) result+='[], '
                            else result+=`Array(${object[key].length}), `
                        }else result+='{...}, '
                        break
                    case 'function':
                        result+=makeEl('f','num')
                        break 
                    case 'boolean':
                        result+=makeEl(object[key],'bool')
                        break
                }
            }
            return '<span >'+(result+(isArr?"]":'}')).replace(isArr?', ]':', }',isArr?']':'}')+'</span><br>'
    }
    let arr=[collapse()]
    function collapse(){
        let m=CreateElement('div')
        m.style.border='1px solid red'
        m.style.padding='10px'
        return m
    }
    function drawer(container, k, value, indent = 0,buf) {
        // if (typeof value==='object'){
        //     let collaps=collapse()
        //     collaps.innerHTML=`<div>${k}: ${makeHint(value)}</div>`
        //     let inner=collapse()
        //     for (const m in value){
        //         if (typeof value[m]!=='object')
        //         inner.innerHTML+=`<div style='margin-left:${indent*5}px'>${m}: ${value[m]}</div>`
        //         else
        //         drawer(container,m,value[m],indent+4,buf)

        //     }
        //     collaps.appendChild(inner)
        //     container.appendChild(collaps)
            
        // }
        // if (typeof value === "object") {
        //     container.innerHTML += `<span style='margin-left:${indent*6}px;color:#972485'> ${key}: </span>` + makeHint(value)
        //     for (const key in value)
        //         drawer(container, key, value[key], indent + 4)
        // } else {
        //     let val = typeof value === 'string' ? `<span style='color:#f34531'>"${value}"</span>` : value
        //     container.innerHTML += `<span style='margin-left:${indent*6}px;color:#972485'> ` + key + `</span>` + ": " + val + '<br>'
        // }
  
        for (const key in value){
            if (typeof value[key]==='object'){
                container.innerHTML+=`<div style='margin-left:${indent*5}px'>`+key+': '+makeHint(value[key])+'</div>'
                drawer(container,key,value[key],indent+4)
            }else{
                let val
                switch(typeof value[key]){
                    case 'number':
                        val=makeEl(value[key],'num')
                        break
                    case 'string':
                        val=makeEl(value[key],'str')
                        break
                    case 'function':
                        val=makeEl(value[key],'num')
                        break
                    case 'boolean':
                        val=makeEl(value[key],'bool')
                        break
                }
                container.innerHTML+=`<div style='margin-left:${indent*5}px'>`+key+': '+val.replace(',','')+'<br></div>'
            }
            // container.appendChild(arr[arr.length-1])
        }

        
    }

    // function span(data, color) {
    //     let m = document.createElement('div')
    //     let span = CreateElement('span')
    //     span.style.color = color
    //     span.innerText = data
    //     m.appendChild(span)
    //     return m.innerHTML
    // }
    return {
        init(container) {
            this.consol = document.getElementById(container)
        },
        log() {
            let arg = Array.from(arguments)
            arg.forEach((item) => {
                switch (typeof item) {
                    case "object":
                        // this.consol.innerHTML += makeHint(item)
                        // for (const i in item) {
                        
                        //     console.log(drawer(this.consol, i, item[i], 4))
                        // }
                   
                        drawer(this.consol,0,item,0,arr)
                       console.log(arr);
                        break
                    case 'string':
                        this.consol.innerHTML+=makeEl(item,'str')+'&#9224;'
                        break
                    case 'number':
                        this.consol.innerHTML+=makeEl(item,'num')
                        break
                    case 'function':
                        this.consol.innerHTML+=makeEl(item,'num')
                }
            })
        }
    }
})()