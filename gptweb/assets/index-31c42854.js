function i(o){const t={origin:!0,...o};let e;t.origin?e=document.createElement("textarea"):e=document.createElement("input"),e.setAttribute("readonly","readonly"),e.value=t.text,t.dom?t.dom.appendChild(e):document.body.appendChild(e),e.select(),document.execCommand("copy")&&document.execCommand("copy"),t.dom?t.dom.removeChild(e):document.body.removeChild(e),window.$message.success("复制成功")}function d(o){const t=new RegExp(`(^|&)${o}=([^&]*)(&|$)`,"i"),e=window.location.href.split("?");let n="";e[1]&&(n=e[1].match(t));let c="";return n&&(c=n[2]),c||""}export{i as c,d as g};