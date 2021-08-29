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

 // for (const key in value){
 //     if (typeof value[key]==='object'){
 //         container.innerHTML+=`<div style='margin-left:${indent*5}px'>`+key+': '+makeHint(value[key])+'</div>'
 //         drawer(container,key,value[key],indent+4)
 //     }else{
 //         let val
 //         switch(typeof value[key]){
 //             case 'number':
 //                 val=makeEl(value[key],'num')
 //                 break
 //             case 'string':
 //                 val=makeEl(value[key],'str')
 //                 break
 //             case 'function':
 //                 val=makeEl(value[key],'num')
 //                 break
 //             case 'boolean':
 //                 val=makeEl(value[key],'bool')
 //                 break
 //         }
 //         container.innerHTML+=`<div style='margin-left:${indent*5}px'>`+key+': '+val.replace(',','')+'<br></div>'
 //     }
 //     // container.appendChild(arr[arr.length-1])
 // }


 // function span(data, color) {
 //     let m = document.createElement('div')
 //     let span = CreateElement('span')
 //     span.style.color = color
 //     span.innerText = data
 //     m.appendChild(span)
 //     return m.innerHTML
 // }