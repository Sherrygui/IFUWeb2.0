(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0a5c72bc"],{"00d9":function(t,o,e){"use strict";var s=e("4bf9"),a=e.n(s);a.a},"27b2":function(t,o,e){},"2a9a":function(t,o,e){"use strict";var s=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"collapse"},[e("div",{staticClass:"header",style:{background:""+t.backgroundColor},on:{click:t.toggle}},[e("div",{staticClass:"arrow",class:t.show?"arrow-up":"arrow-down"}),e("div",{staticClass:"title-en",class:"zh"===t.lang?"title-zh":"title-en"},[t._v(t._s(t.title))])]),t.show||t.screenWidth>1024?e("div",{staticClass:"container"},[t._t("default")],2):t._e()])},a=[],c=(e("a4d3"),e("4de4"),e("4160"),e("e439"),e("dbb4"),e("b64b"),e("159b"),e("2fa7")),i=e("2f62");function r(t,o){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);o&&(s=s.filter((function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable}))),e.push.apply(e,s)}return e}function n(t){for(var o=1;o<arguments.length;o++){var e=null!=arguments[o]?arguments[o]:{};o%2?r(e,!0).forEach((function(o){Object(c["a"])(t,o,e[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(e).forEach((function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(e,o))}))}return t}var l={name:"Collapse",props:{title:String,backgroundColor:String,defaultShow:{type:Boolean,default:!1}},computed:n({},Object(i["c"])("lang",["lang"]),{lang:function(){return localStorage.getItem("lang")}}),data:function(){return{show:this.defaultShow,screenWidth:document.body.clientWidth}},methods:{toggle:function(){this.show=!this.show}}},d=l,g=(e("8ad6"),e("00d9"),e("2877")),u=Object(g["a"])(d,s,a,!1,null,"9fe81200",null);o["a"]=u.exports},"4bf9":function(t,o,e){},"4c93":function(t,o,e){},"524d":function(t,o){t.exports="data:image/png;base64,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"},5951:function(t,o,e){"use strict";var s=e("d523"),a=e.n(s);a.a},6480:function(t,o,e){t.exports=e.p+"img/academic-img.fa00f5a8.png"},"661c":function(t,o,e){t.exports=e.p+"img/cohesion.7f330e1b.png"},8654:function(t,o,e){"use strict";var s=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"tab"},[e("div",{staticClass:"desktop tab-list"},t._l(t.list,(function(o,s){return e("div",{key:s,staticClass:"tab-title",style:t.getTabTitleStyle(s),on:{click:function(o){return t.changeTab(s)}}},[t._v(t._s(o.title))])})),0),e("div",{staticClass:"desktop tab-content"},[e(t.list[t.activeIndex].content,{tag:"component"})],1),e("div",{staticClass:"mobile tab-mobile"},t._l(t.list,(function(t,o){return e("DmaCollapse",{key:o,attrs:{title:t.title,backgroundColor:t.color,defaultShow:t.defaultShow||!1}},[e("div",{staticClass:"tab-content-mobile"},[e(t.content,{tag:"component"})],1)])})),1)])},a=[],c=e("2a9a"),i=e("fc29"),r=e("ee9e"),n={name:"Tab",props:{list:Array},components:{DmaCollapse:c["a"],Academic:i["a"],Cohesion:r["a"]},data:function(){return{activeIndex:0}},methods:{changeTab:function(t){this.activeIndex=t},getTabTitleStyle:function(t){return t===this.activeIndex?{color:this.list[t].color,borderBottom:"20px solid".concat(this.list[t].color)}:{borderBottom:"20px solid".concat(this.list[t].color)}},getTabTitleMobileStyle:function(t){return{color:"white",padding:"18px",background:this.list[t].color,boxSizing:"border-box"}}}},l=n,d=(e("ed00"),e("968c"),e("2877")),g=Object(d["a"])(l,s,a,!1,null,"15ff681f",null);o["a"]=g.exports},"8ad6":function(t,o,e){"use strict";var s=e("ee45"),a=e.n(s);a.a},"95a5":function(t,o,e){t.exports=e.p+"img/ifu-logo.1a92266f.png"},"968c":function(t,o,e){"use strict";var s=e("ee26"),a=e.n(s);a.a},bca1:function(t,o,e){},ca22:function(t,o,e){},ce41:function(t,o){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABtCAYAAADkiS7DAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA4YSURBVHgB7Z1NVhvHFsfvrW41xJ/yCp68AsvjN7Aw7+WcjCI/xBi8AsgKjFcAWQEwNgl4lHOcEMmDN0ZZgXkrMC822EbquqlqCYyJUX/W7WpRv0k+0LFRdf/r3lv3oxAc7LR/+dCoBYMWgf8AARqE1CCA+sXPIOAhEhwRhH8QUT98F/b2ntw7AgcrCA4WOr++a4HwvldiaGtRQCawJ0luy9NBb++7e4fgMI4TiGEW998vE4olAGpBgSjrsjU4PX3uhGIWJxBDaItBntjMbi2S4YRiFieQgmnvvq3X7gSbhNAGTlCs7cx98xwcheIEUiBcVmMC/eGn0yfOmhSHE0hBLHZPVtRp0waUjHqgh4NPp3NOJMUgwJGbTvf4mQ3i0Kjj4oY/ExwsvnrfBEdunAXJiRaHeivXwD6OlLv10FmSfDiB5GDht+M2CtgFS3HuVn6ci5WR9i9vG2r11sFiRu7WzCY4MuMEkpFaEKyXeFqVAmp19k9WwZEJ52JlYJQdxyrtzEdDPL2/N+dqudLiLEgGJOIzqBZ1XwbOimTACSQl2npUw7W6BMJKu/u2Do5UOIGkhBCWoJo4K5IBJ5AURCdXgC2oKoiPwJEKJ5AU1IJaCyoNtZyblQ4nkFTg91BxhKzxVhlXHCeQFEiEytc3qQMGV6OVAh8qhO61gNnZcxdh77tvDoEJ7ZogVfD06hKI2ABmLj43zmdWBNYKZNR45LX1YANA3a5KDfV41SLL8890fj/W/+gj4SGBfI0h9F58e6sPBvCHfhM8qDzKgjwAg+gqYvKghSAeSaTm5yPx0XMbPTNSCUvRB4I+yPDlzr9v98BSrMukR8MNPE8l4mRzJIh06AK9kOh50YMNFn77s43Cs7YwMQ07j28W+tz1ZubXZ1eIZMYcER2pTW7PxtZhawTyWRjFDDfQQiEUW0W1oXb2368q/8Tq4sSkyJkbjZ//if+DnJwJAyhczbKZfQ3beuxLD9L1Ine6J+vgiW6Rkz90JSuQXFv8/fhNJL7cf5528aYDcfL+PuREr6l3NzjQa1yUODQqEbvszwRvOt0PVpTzlCoQnXgbLTIZy/BGQlHiy73gWNxLUDZSYANycLahGS25GW9uo+RseZQmkMVXb5v+TO2Ara5JLXhn/ySzi6R+z3/ANUdb+4Xu8abJDe0ienOrzQTdMkVSikC0OMivdYs0zYlAWl3YP772DUQio7uoxxmpGGEZGClbJOwC0V9U+sEuuzjGoPJxM7pb17pEQ7tV7LO+xpyLpIQyGXaBeOqLll4urt2tlIE7wfTEIGnRJf5cbtVVRCKR/O3DrALRE0Bs6aVAT2y6wr14IotvSYOYHvyt81HACJtA9EITs/86iWiggeuPiMULAms2NY0Q3jrnxsYmED+orVjXiee67CaiNzUds4FFjDa22jIwwSYQQrSxzLrOudhVw9r+FxRsbQcsAtEBsbV93AkXG4EO4ZqhTq1WwEqo9Z//EkteikUgJMBG6zGGmkncLCScmpE5EvAw7jPj9mJre0fEx+MnwACLQBDRaIl1Tuo1qDXiPiSR/g9TgpDx1tCreVY3VqHgeaeYYhB7dyJNKOO77JCul4ulNjWrn5k6EWX5/YwLZOy+WH1SlKT0YppikKE/jG0qoxI6D1PSAAaMC6Q2iHdfygaFiA34JMG0xCBHSUaQVqA4s85xRG9cICr7aX2egQgbcZ8JvZqRVl5+MOn3sP65iaB+FwxjXCAo7G80wgQu1t5cNGyg8laESP6R7JPYAMspovEr9u8AwxBgA6YEJOhBxVGZ6KmxIHkbv5Lg5mLBuOsw0efoNVQcT8QLxJXffMYJJA2SKh2HoEoQvphLMhZp1glkDIOLNT2NRuP5TdWNQ5B6MEUIhnfLWZCUKDfrJVQUGYaV/d3Lwvwp1hSc/FwEQ9qCanL007/u7MEUIRneLWdBUlJVNwsRUojj41RtanlgEIj9VbB6CmOazwPJH6FiDEAknjBZlcs+kxRd5v47wDAI0vrFpgTl3xcZiuEGVMqKYG+c6EwMpd00phTzFiQUFTgaTVfKHu2wVbIiYZh6PjFGE9jtRt649QYMY1wgg5pnvwXJUMpeFSuisv97Wa4XUBYkYUlKeRQxgDsO4wKpQg0TZnAnqmJFBkL8AFkg6y0Ii2fCdIpleQY6Y4Z8Z/72GjA9qEwQPE8be5whbH9mAMath4anJ53IanOd54ajIQrdG23hbov9nfmba5CRgaj1wGaIpyqAx4KQzSUO2IMc6B1aEmVzYwyha66GiLmGGujvZfNJFgqeymoWgYRe2ANboTB3he7P87e2yKZ4BOWTrK7VF5C0sjQledFlflgEMko82WlFUGAh5Rc/zd9eteI7qrijqJcHJRSyNoXDWHTJV2pCYN1uVPRONETvKZQYj+jvkyfuuMx4uIN18RUN5TYwwSaQoRhsgWWLHZIs5ILPMyK3pkRXa4A4BwVi41F2tAkwXhvNJhDbFlsvtBReDwpGJxDTlq4UASJsFRJ3XGIo/C2wiKI3tThYq3ltyj6ro+dtEy+U3giwhI0gTTFiGkanWcTm0kxCb2r6QAQYYRWILVYkOgYVYgsMwe1OmrIeZ4TorYEFGxu39dCw94OU5YJcRC+0yRdKbwScnYemOwXLjq00ZVgPDbtAIhckDJ9CSejdlmOhBckeMMGRZyq5rOao6AOIpJTSURidQpRgLvUuZMpXvwxJNit5xNXgVFpZDZFRiz+J0lpu9Y6kS7GBEb0LlbXQpuDs+Y/WLpQs93KcoxKfO/O3NqAkSu1JH4jTp2zxCNEPnOLgmkmsh95xDnrT1p+rrKboxGcWShUIYzzSZ9+F0GO7R88f+k1gJBTDNY6Nray44yKlTzUZZUXN1taMfWc2FvffL3PeDhvd+R5dmcYDx8Zm+ug6KXaM/QnJWODMvdCLr942CWEdGImuRp4JdrldLZMbG9dhShxWCGS82EaOEDmnCepdXPrBrpIl24t6gaZPQZd18LS5AtSXthymWDM4jsjM5HSuaYLacvgztYOSr7seiYTJ3RpXDBSPRQ121gjEUA80S2JrsXuyQn5wUJLluEyzNsMjknH+pfhjZoum6E/j6NFRc1Yo53Ye33wIBtEv4eL+8a6yfqWd03+NcUzyptP98AwMow5AHiLRU+sHc2QEwRI6++/WAEWeBxoVQg7FrY29ObPjTtu7b+t+fXYFKFy1xGpciR5pFKpMNEd5TefXdy3ycFnlL5YgB1IJroy6q69hhUD0TuwptyCj/+6EkQjsSZLbHC9eu/uh4VG4lkMo/SGeztkwI7h0gUQv3d2gq/41Q7KLerrN1eSJR/T73VKJOM9T1k02qyeML4mG5Om7FkP68cW3Zgcf6HyQVF5BkktSL0MEWz/N3yytqPWMUgWiX77anWBT5Q3akBaiH0xlx9u/fGj4QdhWLt/30yCKqzgTi6TwZfgu7O09KX7HzmVNUKztzH1Taj6kNIFktRy6PkePtSlq2MK5hRDYRBCPCGVrWgWRgD4S9EOg114I/SItTOYYk3BjZ/5GaXPHShHIKJgTm2ljjqhcPWdFrhaEd9trIfqPAKkFmVy764Kezyv60XwsdfSad1hCVpFoSzf4pGKS7+4dAjOsAhkFuTPPlHu0CinJI47IZZqFJfX3ttRDb4EjI3SEJHohyJfyz8FeFpcs12mlcrmGHz9ucwqFRSCLr943lcVYUq7Rclb3BZEepnGrIjHeqS2P4ggnChMod2yLpNxOa1kW9t9tIIoVyIC2JoRii0soxgTyZaCb8wWNmmaS9wVEmW2Sa9c4lmAGe8NPn56meWE7vx8fQE73Fgn3Imt2OuiZEkthAtGCqAWDFoH/gJDaRdUkRdMPH9+4n+SzUSWtP7PuLEZJqIB6KD49T5K/0KdbPkktkoI2MeypjbRPNHxd5IlcZoHoQJvj5GeI4n6SuGOh+2EJKdxwVqNc0gTUBVRPTKKQE7nEAvnSp+fJDehejhdz8cmiTvdYBf6wBg4rSCoSXZrvU6DvGTT/Ll3I+aSp8I4VSHQkK8SSCpLb3LtzEuux8NtxGwXsgsMqkorEsBX5KmdiGZyePo/7/a4USJQvuBOsc7aOXiSJ9dA1XLoHw7lVtoK9ncc3JvaVc1qRr6KPjuHjj1fFTV8td9dWw79be1OWOEZQ7OQMf2Zm04nDZqjV2T+ZmPMqfRytOu2sUXBwVf/M3wSig13wRLfMFy/JvR26EM6dVlUApGexbcCS5zq1qxj3zxzofN3ln30hEG05kOQWlAxRuB33GYnI6rc6MlP3ZTDRikSztsq/D7FOPv6tE/NcIPoHuj4KLCDuWrRIyOX2fjvSgBCfNbfjPsS6ng5z8X+cC8QLgmeWvHRHce6VPlUDR5WoR3mzCVh0H2Kzs3+8dvYfkUC09Sg3IP+C+OkmCC1wVAoSOLHnZ3wfoh0oi3cWN0UC8QI/dXWtMUhODs5VIOXcq+ohECeOYh3dqWLNvewqblJJcThzsaLsuB0QTZ6OQZ6zHlUk2ZBtM7PRMjHWhLBtRxaeOJz0c3UE/AgclSRuyDYSHYI1UEsLWoBnV0ddbIDOdK2AwwACJwsEbBKICj1CryUkkE0CSVCijK5FtqJQjKfCeCtXIhBFQ8VO+AAsIeFtSc6CVBQh8O6knw99/xAsQuXjHggCbIAlxF3Kwjq53FE4RHAPKgQRKgtSqR151gmk0ky2ILahB97pY1730jkcVzCN090djsKomEA+FtKI73AkRViU3oe4Icc2TPt2ZAdxcp6jNgitcveVNo58oUeloCUJGoo/B0eCPZcsrCgyQSEq2HP9GpDo/wUjFDzEx18czgAAAABJRU5ErkJggg=="},d523:function(t,o,e){},e651:function(t,o,e){"use strict";var s=e("bca1"),a=e.n(s);a.a},e842:function(t,o,e){"use strict";var s=e("ca22"),a=e.n(s);a.a},e995:function(t,o,e){"use strict";var s=e("4c93"),a=e.n(s);a.a},ed00:function(t,o,e){"use strict";var s=e("27b2"),a=e.n(s);a.a},ee26:function(t,o,e){},ee45:function(t,o,e){},ee9e:function(t,o,e){"use strict";var s=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("section",{staticClass:"cohesion-section"},[e("div",{staticClass:"row row-reverse"},[e("div",{staticClass:"col-half col-half-center"},[e("p",[t._v(t._s(t.$t("totoro.cohesion.text1")))])]),e("div",{staticClass:"col-half "},[e("div",{staticClass:"cohesion-image"},[e("img",{attrs:{src:t.cohesionImage,alt:"image in cohesion section"}})])])]),e("div",{staticClass:"row light-blue-row"},[e("div",{staticClass:"col-half larger-half display-desktop"},[e("div",{staticClass:"flex-top-left"},[e("div",{staticClass:"color-box blue"},[t._v(t._s(t.$t("totoro.cohesion.courses1")))]),e("div",{staticClass:"color-box green"},[t._v(t._s(t.$t("totoro.cohesion.courses2")))]),e("div",{staticClass:"color-box purple"},[t._v(t._s(t.$t("totoro.cohesion.courses3")))])]),e("div",{staticClass:"flex-middle-right"},[e("div",{staticClass:"color-box orange",class:"zh"===t.lang?"middle-margin":"en-middle-margin"},[t._v(t._s(t.$t("totoro.cohesion.courses4")))]),e("div",{staticClass:"color-box blue-light"},[t._v(t._s(t.$t("totoro.cohesion.courses5")))])]),e("div",{staticClass:"flex-top-left end-margin"},[e("div",{staticClass:"color-box pink"},[t._v(t._s(t.$t("totoro.cohesion.courses6")))])])]),e("div",{staticClass:"col-half larger-half display-mobile"},[e("div",{staticClass:"flex-top-left"},[e("div",{staticClass:"color-box blue"},[t._v(t._s(t.$t("totoro.cohesion.courses1")))]),e("div",{staticClass:"color-box green"},[t._v(t._s(t.$t("totoro.cohesion.courses2")))])]),e("div",{staticClass:"flex-middle-right"},[e("div",{staticClass:"color-box orange middle-margin"},[t._v(t._s(t.$t("totoro.cohesion.courses4")))]),e("div",{staticClass:"color-box blue-light"},[t._v(t._s(t.$t("totoro.cohesion.courses5")))])]),e("div",{staticClass:"flex-top-left end-margin"},[e("div",{staticClass:"color-box pink"},[t._v(t._s(t.$t("totoro.cohesion.courses6")))]),e("div",{staticClass:"color-box purple"},[t._v(t._s(t.$t("totoro.cohesion.courses3")))])])]),e("div",{staticClass:"col-half smaller-half"},[e("p",[t._v(t._s(t.$t("totoro.cohesion.text2")))])])]),e("div",{staticClass:"row group-class-row"},[e("div",{staticClass:"col-half col-half-center"},[e("p",[t._v(t._s(t.$t("totoro.cohesion.text3")))]),e("p",[t._v(t._s(t.$t("totoro.cohesion.text4")))])]),e("div",{staticClass:"col-half col-half-half"},[e("div",{staticClass:"icon-register half-to-half"},[e("img",{attrs:{src:t.onetooneImage,alt:"one to one image"}}),e("span",[t._v(t._s(t.$t("totoro.cohesion.oneToone")))]),e("Button",[t._v(t._s(t.$t("totoro.cohesion.buttonText")))])],1),e("div",{staticClass:"icon-register half-to-half group-top"},[e("img",{attrs:{src:t.smallGroupImage,alt:"one to one image"}}),e("span",[t._v(t._s(t.$t("totoro.cohesion.smallGroup")))]),e("Button",[t._v(t._s(t.$t("totoro.cohesion.buttonText")))])],1)])])])])},a=[],c=(e("a4d3"),e("4de4"),e("4160"),e("e439"),e("dbb4"),e("b64b"),e("159b"),e("2fa7")),i=e("661c"),r=e.n(i),n=e("2a7d"),l=e("524d"),d=e.n(l),g=e("ce41"),u=e.n(g),A=e("2f62");function v(t,o){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);o&&(s=s.filter((function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable}))),e.push.apply(e,s)}return e}function f(t){for(var o=1;o<arguments.length;o++){var e=null!=arguments[o]?arguments[o]:{};o%2?v(e,!0).forEach((function(o){Object(c["a"])(t,o,e[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):v(e).forEach((function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(e,o))}))}return t}var C={name:"Cohesion",components:{Button:n["a"]},data:function(){return{cohesionImage:r.a,onetooneImage:d.a,smallGroupImage:u.a}},computed:f({},Object(A["c"])("lang",["lang"]))},h=C,b=(e("5951"),e("e995"),e("2877")),p=Object(b["a"])(h,s,a,!1,null,"698fce3f",null);o["a"]=p.exports},fc29:function(t,o,e){"use strict";var s=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("section",{staticClass:"academic-section"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-half"},[e("div",{staticClass:"academic-image"},[e("img",{attrs:{src:t.academicImage,alt:"image in academic section"}})])]),e("div",{staticClass:"col-half"},[e("p",[t._v(t._s(t.$t("totoro.academic.text1"))),e("b",[t._v(t._s(t.$t("totoro.academic.text2")))]),t._v(" "+t._s(t.$t("totoro.academic.text3"))),e("b",[t._v(t._s(t.$t("totoro.academic.text4")))]),t._v(" "+t._s(t.$t("totoro.academic.text5"))),e("b",[t._v(t._s(t.$t("totoro.academic.text6")))]),t._v(" "+t._s(t.$t("totoro.academic.text7"))+" ")]),e("p",[t._v(t._s(t.$t("totoro.academic.text8"))),e("b",[t._v(t._s(t.$t("totoro.academic.text9")))])])])]),e("div",{staticClass:"row row-flex-end"},[e("div",{staticClass:"col-half"},[e("div",{staticClass:"flex-top-left"},[e("div",{staticClass:"color-box blue"},[t._v(t._s(t.$t("totoro.academic.text10")))]),e("div",{staticClass:"color-box green"},[t._v(t._s(t.$t("totoro.academic.text11")))])]),e("div",{staticClass:"flex-bottom-right"},[e("div",{staticClass:"color-box orange"},[t._v(t._s(t.$t("totoro.academic.text12")))]),e("div",{staticClass:"color-box pink"},[t._v(t._s(t.$t("totoro.academic.text13")))])])]),e("div",{staticClass:"col-half"},[e("p",{attrs:{id:"scan-qr"}},[e("strong",[t._v(t._s(t.$t("totoro.academic.text14")))])]),e("img",{attrs:{src:t.ifuLogo,id:"ifu-logo-img",alt:"IFU Logo"}})])])])])},a=[],c=e("6480"),i=e.n(c),r=e("95a5"),n=e.n(r),l={name:"Academic",components:{},data:function(){return{academicImage:i.a,ifuLogo:n.a}}},d=l,g=(e("e842"),e("e651"),e("2877")),u=Object(g["a"])(d,s,a,!1,null,"f9afc056",null);o["a"]=u.exports}}]);
//# sourceMappingURL=chunk-0a5c72bc.a970200d.js.map