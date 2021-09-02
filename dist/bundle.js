(()=>{"use strict";function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var n=function(){function n(t){var r,o=t.selector,a=t.pattern,i=void 0===a?{}:a,c=t.method;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.form=document.querySelector(o),this.pattern=i,this.method=c,this.elementsForm=(r=this.form.elements,function(t){if(Array.isArray(t))return e(t)}(r)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(r)||function(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).filter((function(e){return"button"!==e.tagName.toLowerCase()&&"button"!==e.type})),this.error=new Set}var r,o;return r=n,(o=[{key:"init",value:function(){var e=this;this.applyStyle(),this.setPattern(),this.elementsForm.forEach((function(t){return t.addEventListener("input",e.chekIt.bind(e))}))}},{key:"isValid",value:function(e){var t=this,n={notEmpty:function(e){return""!==e.value.trim()},pattern:function(e,t){return t.test(e.value)}};if(this.method){var r=this.method[e.id];if(r)return r.every((function(r){return n[r[0]](e,t.pattern[r[1]])}));console.log("передайте id полей")}return!0}},{key:"chekIt",value:function(e){var t=e.target;this.isValid(t)?(this.showSuccess(t),this.error.delete(t)):(this.showError(t),this.error.add(t))}},{key:"showError",value:function(e){if(e.classList.remove("success"),e.classList.add("error"),!e.nextElementSibling||!e.nextElementSibling.classList.contains("validator-error")){var t=document.createElement("div");t.textContent="Ошибка в этом поле!",t.classList.add("validator-error"),e.insertAdjacentElement("afterend",t)}}},{key:"showSuccess",value:function(e){e.classList.remove("error"),e.classList.add("success"),e.nextElementSibling&&e.nextElementSibling.classList.contains("validator-error")&&e.nextElementSibling.remove()}},{key:"applyStyle",value:function(){var e=document.createElement("style");e.textContent="\n      body form input.success {\n        border: 2px solid green !important;\n      }\n      body form input.error {\n        border: 2px solid red !important;\n      }\n      .validator-error {\n        font-size: 14px;\n        color: red;    \n        z-index: 1;\n        position: relative;\n      }\n    ",document.head.appendChild(e)}},{key:"setPattern",value:function(){this.pattern.name||(this.pattern.name=/^[а-яё]{2,}$/i),this.pattern.message||(this.pattern.message=/^[а-яё\d\.\,\? ! "" ; :]+$/gi),this.pattern.phone||(this.pattern.phone=/^\+[7](\d){11}$/),this.pattern.email||(this.pattern.email=/^\w+@\w+\.\w{2,}$/)}}])&&t(r.prototype,o),n}(),r=new n({selector:"#form1",pattern:{},method:{"form1-name":[["notEmpty"],["pattern","name"]],"form1-phone":[["notEmpty"],["pattern","phone"]],"form1-email":[["notEmpty"],["pattern","email"]]}}),o=new n({selector:"#form2",pattern:{},method:{"form2-name":[["notEmpty"],["pattern","name"]],"form2-message":[["notEmpty"],["pattern","message"]],"form2-phone":[["notEmpty"],["pattern","phone"]],"form2-email":[["notEmpty"],["pattern","email"]]}}),a=new n({selector:"#form3",pattern:{},method:{"form3-name":[["notEmpty"],["pattern","name"]],"form3-phone":[["notEmpty"],["pattern","phone"]],"form3-email":[["notEmpty"],["pattern","email"]]}});function i(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){s=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(s)throw a}}}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"+7 (___) ___-__-__",n=document.querySelectorAll(e);function r(e){var n=e.keyCode,r=t,o=r.replace(/\D/g,""),a=this.value.replace(/\D/g,""),i=0,c=r.replace(/[_\d]/g,(function(e){return i<a.length?a.charAt(i++)||o.charAt(i):e}));-1!=(i=c.indexOf("_"))&&(c=c.slice(0,i));var s=r.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");(!(s=new RegExp("^"+s+"$")).test(this.value)||this.value.length<5||n>47&&n<58)&&(this.value=c),"blur"==e.type&&this.value.length<5&&(this.value="")}var o,a=i(n);try{for(a.s();!(o=a.n()).done;){var c=o.value;c.addEventListener("input",r),c.addEventListener("focus",r),c.addEventListener("blur",r)}}catch(e){a.e(e)}finally{a.f()}};var l,u=function(e){if(void 0!==e.href){var t=e.href.split("#")[1];document.querySelector("#"+t).scrollIntoView({behavior:"smooth",block:"start"})}};(l=document.querySelector('a[href="#service-block"]')).addEventListener("click",(function(e){e.preventDefault(),u(l)}));function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var d,f,p,v,h,y,g,b,E,S,A,_,L,q,w,x,k,I,C,j,P,T,O,D,$;r.init(),o.init(),a.init(),s("#form1-phone","+7__________"),s("#form2-phone","+7__________"),s("#form3-phone","+7__________"),C="13 Sep 2021",j=0,P=document.querySelector("#timer-hours"),T=document.querySelector("#timer-minutes"),O=document.querySelector("#timer-seconds"),D=function(e){return 1===String(e).length?"0"+e:String(e)},($=function(){var e,t,n,r,o=(t=0,n=0,r=0,(e=(new Date(C).getTime()-(new Date).getTime())/1e3)>0&&(t=Math.floor(e%60),n=Math.floor(e/60%60),r=Math.floor(e/60/60)),{timeRemaining:e,hours:r,minutes:n,seconds:t});P.textContent=D(o.hours),T.textContent=D(o.minutes),O.textContent=D(o.seconds),o.timeRemaining<=0&&clearInterval(j)})(),j=setInterval($,1e3),L=document.querySelector("menu"),q=document.querySelector(".menu"),w=document.querySelector("main"),x=-100,k=function e(){if(document.documentElement.clientWidth<768)L.style.transform="translate(0)";else{var t=requestAnimationFrame(e);x+=10,L.style.transform="translate(".concat(x,"%)"),0===x&&cancelAnimationFrame(t)}},I=function e(t){t.preventDefault();var n=t.target;(n.closest(".menu")||n!==L&&n.closest('[href^="#"]'))&&L.classList.toggle("active-menu"),n.classList.contains("close-btn")||(L.style.display="flex"),null!==n.closest(".menu")||null!==n.closest("menu")?("A"===n.tagName&&"close-btn"!==n.className&&u(n),L.style.transform&&"translate(-100%)"!==L.style.transform?("A"===n.tagName||n.closest(".menu"))&&(L.style.transform="translate(-100%)"):(x=-100,k()),n.removeEventListener("click",(function(t){e(t)}))):L.style.transform="translate(-100%)"},q.addEventListener("click",(function(e){I(e)})),L.addEventListener("click",(function(e){I(e)})),w.addEventListener("click",(function(e){e.target.closest(".form-btn")||I(e)})),b=document.querySelector(".popup"),E=document.querySelectorAll(".popup-btn"),S=document.querySelector(".popup-content"),A={count:-445,speed:15,startPos:-445,endPos:0},_=function e(){A.startPos>A.endPos?A.count-=A.speed:(A.count+=A.speed,S.style.transform="translateY(".concat(A.count,"px)")),(A.startPos>A.endPos&&A.count>A.endPos||A.count<A.endPos)&&requestAnimationFrame(e)},E.forEach((function(e){e.addEventListener("click",(function(){b.style.display="block",screen.width>768&&(A.count=A.startPos,requestAnimationFrame(_))}))})),b.addEventListener("click",(function(e){var t=e.target;t.classList.contains("popup-close")?b.style.display="none":(t=t.closest(".popup-content"))||(b.style.display="none")})),v=document.querySelector(".service-header"),h=v.querySelectorAll(".service-header-tab"),y=document.querySelectorAll(".service-tab"),(g=function(e){for(var t=0;t<y.length;t++)e===t?(h[t].classList.add("active"),y[t].classList.remove("d-none")):(h[t].classList.remove("active"),y[t].classList.add("d-none"))})(0),v.addEventListener("click",(function(e){var t=e.target;(t=t.closest(".service-header-tab"))&&h.forEach((function(e,n){e===t&&g(n)}))})),function(){for(var e=document.querySelectorAll(".portfolio-item"),t=document.querySelector(".portfolio-dots"),n=document.querySelector(".portfolio-content"),r=0;r<e.length;r++)t.insertAdjacentHTML("beforeend",'<li class="dot '.concat(0===r?"dot-active":"",'"></li>'));var o,a=document.querySelectorAll(".dot"),i=0,c=function(e,t,n){e[t].classList.remove(n)},s=function(e,t,n){e[t].classList.add(n)},l=function(){c(e,i,"portfolio-item-active"),c(a,i,"dot-active"),++i>=e.length&&(i=0),s(e,i,"portfolio-item-active"),s(a,i,"dot-active")},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3;o=setInterval(l,e)};n.addEventListener("click",(function(t){t.preventDefault();var n=t.target;n.matches(".portfolio-btn, .dot")&&(c(e,i,"portfolio-item-active"),c(a,i,"dot-active"),n.matches("#arrow-right")?i++:n.matches("#arrow-left")?i--:n.matches(".dot")&&a.forEach((function(e,t){e===n&&(i=t)})),i>=e.length&&(i=0),i<0&&(i=e.length-1),s(e,i,"portfolio-item-active"),s(a,i,"dot-active"))})),n.addEventListener("mouseover",(function(e){(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&clearInterval(o)})),n.addEventListener("mouseout",(function(e){(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&u()})),u()}(),document.querySelectorAll("#command .row img").forEach((function(e){e.addEventListener("mouseenter",(function(e){var t=e.target;p=e.target.src,t.src=t.getAttribute("data-img")})),e.addEventListener("mouseout",(function(e){e.target.src=p}))})),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,t=document.querySelector(".calc-block"),n=document.querySelector(".calc-type"),r=document.querySelector(".calc-square"),o=document.querySelector(".calc-day"),a=document.querySelector(".calc-count"),i=document.querySelectorAll("select.calc-type"),c=document.getElementById("total"),s=function(){document.querySelector("#calc").addEventListener("input",(function(e){e.target.value=e.target.value.replace(/[^\d\.]/g,"")}))};s();var l=function(){var t=0,i=1,s=10,l=n.options[n.selectedIndex].value,u=+r.value;a.value>1&&(i+=(a.value-1)/10),o.value&&(o.value<5?s*=2:o.value<10&&(s*=1.5)),l&&u&&(t=e*l*u*i*s),c.textContent=+t.toFixed(0)};t.addEventListener("change",(function(e){var t=e.target;(t.matches(".calc-day")||t.matches(".calc-type")||t.matches(".calc-square")||t.matches(".calc-count"))&&l()})),i.forEach((function(e){e.addEventListener("change",(function(e){e.target.selectedIndex||(r.value="",o.value="",a.value="")}))}))}(100),d=function(){var e=document.querySelector(".status-message"),t=document.querySelector(".popup");e&&setTimeout((function(){e.remove(),t.style.display="none"}),3e3)},(f=function(e){var t=document.getElementById(e),n=document.createElement("div"),r=document.querySelectorAll(".form-email"),o=document.querySelectorAll("input"),a=document.querySelectorAll(".form-btn");n.classList.add("status-message"),n.style.cssText="font-size: 2rem; color: #fff",r.forEach((function(e){e.setAttribute("required","")})),o.forEach((function(e){e.addEventListener("input",(function(e){e.target.closest(".error")?a.forEach((function(e){e.setAttribute("disabled",!0)})):a.forEach((function(e){e.removeAttribute("disabled")}))}))})),t.addEventListener("submit",(function(r){var o;r.preventDefault(),n.textContent="Загрузка...",t.appendChild(n),(o=Object.fromEntries(new FormData(t)),fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o),credentials:"include"})).then((function(t){if(200!==t.status)throw new Error("status network not 200");n.style.cssText="font-size: 2rem;\n            color: green; ",d(),n.textContent="Спасибо! Мы скоро с вами свяжемся!",function(e){var t;(t=document.getElementById(e).elements,function(e){if(Array.isArray(e))return m(e)}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).filter((function(e){return"button"!==e.tagName.toLowerCase()&&"button"!==e.type})).forEach((function(e){return e.value=""}))}(e)})).catch((function(e){n.style.cssText="font-size: 2rem;\n            color: red; ",d(),n.textContent="Что-то пошло не так...",console.error(e)}))}))})("form1"),f("form2"),f("form3")})();