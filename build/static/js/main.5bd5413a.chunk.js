(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{14:function(e,a,t){e.exports=t.p+"static/media/profile.ab51b7a6.png"},15:function(e,a,t){e.exports=t(27)},20:function(e,a,t){},21:function(e,a,t){},27:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(13),s=t.n(i),l=(t(20),t(2)),c=t(3),o=t(5),m=t(4),u=(t(21),t(14)),d=t.n(u),p=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).sidebarData=e.sidebarData,n}return Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary fixed-top",id:"sideNav"},r.a.createElement("a",{className:"navbar-brand js-scroll-trigger",href:"#page-top"},r.a.createElement("span",{className:"d-block d-lg-none"},"Harivamshi Diddiga"),r.a.createElement("span",{className:"d-none d-lg-block"},r.a.createElement("img",{className:"img-fluid img-profile rounded-circle mx-auto mb-2",src:d.a,alt:""}))),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll-trigger active",href:"#about"},"About")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#experience"},"Experience")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#education"},"Education")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#skills"},"Skills")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#interests"},"Interests")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#awards"},"Awards")))))}}]),t}(n.Component),g=t(6),b=t(11),h=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).landingData=e.landingData,n}return Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"resume-section",id:"about"},r.a.createElement("div",{className:"resume-section-content"},r.a.createElement("h1",{className:"mb-0"},this.landingData.firstName," ",r.a.createElement("span",{className:"text-primary"},this.landingData.lastName)),r.a.createElement("div",{className:"subheading mb-5"},this.landingData.phoneNumber," \xb7 ",r.a.createElement("a",{href:"mailto:{this.landingData.email}"},this.landingData.email," \xb7 ")),r.a.createElement("p",{className:"lead mb-5"},this.landingData.bio),r.a.createElement("div",{className:"social-icons"},r.a.createElement("a",{className:"social-icon",href:this.landingData.linkedin},r.a.createElement(g.a,{icon:b.b})),r.a.createElement("a",{className:"social-icon",href:this.landingData.github},r.a.createElement(g.a,{icon:b.a})))))}}]),t}(n.Component),f=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).experience=e.experience,n}return Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"resume-section",id:"experience"},r.a.createElement("div",{className:"resume-section-content"},r.a.createElement("h2",{className:"mb-5"},"Experience"),this.experience.map((function(e,a){return r.a.createElement("div",{key:a,className:"d-flex flex-column flex-md-row justify-content-between mb-5"},r.a.createElement("div",{className:"flex-grow-1 text-left mr-1"},r.a.createElement("h3",{className:"mb-0"},e.position),r.a.createElement("div",{className:"subheading mb-1"},e.organization),r.a.createElement("p",null,e.aboutWork)),r.a.createElement("div",{className:"flex-shrink-0"},r.a.createElement("span",{className:"text-primary"},e.fromDate," - ",e.toDate)))}))))}}]),t}(n.Component),v=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).education=e.education,n}return Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"resume-section",id:"education"},r.a.createElement("div",{className:"resume-section-content"},r.a.createElement("h2",{className:"mb-5"},"Education"),this.education.map((function(e,a){return r.a.createElement("div",{key:a,className:"d-flex flex-column flex-md-row justify-content-between mb-5"},r.a.createElement("div",{className:"flex-grow-1 text-left mr-1"},r.a.createElement("h3",{className:"mb-0"},e.university),r.a.createElement("div",{className:"subheading mb-1"},e.degree),r.a.createElement("p",null,e.gpa)),r.a.createElement("div",{className:"flex-shrink-0"},r.a.createElement("span",{className:"text-primary"},e.fromDate," - ",e.toDate)))}))))}}]),t}(n.Component),E=t(9),N=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).skills=e.skills,n}return Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"skills"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h2",{className:"mb-3"},"Skills"),r.a.createElement("div",{className:"subheading mb-3"},"Programming Languages & Tools"),r.a.createElement("div",{className:"row"},this.skills.map((function(e,a){return r.a.createElement("div",{key:a,className:"col-6 text-center"},r.a.createElement("p",{className:"list-item"},r.a.createElement(g.a,{icon:E.b,color:"green"}),r.a.createElement("span",{className:"ml-3"},e.name)))})))))}}]),t}(n.Component),D=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).interests=e.interests,n}return Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"interests"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h2",{className:"mb-5"},"Interests"),r.a.createElement("p",null,this.interests.paragraphOne),r.a.createElement("p",{className:"mb-0"},this.interests.paragraphTwo)))}}]),t}(n.Component),k=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).awards=e.awards,n}return Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"awards"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h2",{className:"mb-5"},"Awards & Certifications"),r.a.createElement("ul",{className:"fa-ul mb-0"},this.awards.map((function(e,a){return r.a.createElement("li",{key:a},r.a.createElement(g.a,{icon:E.a,color:"#ffc107"}),r.a.createElement("span",{className:"ml-2"}," ",e.awardDetail," "))})))))}}]),t}(n.Component),w=t(7),y=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).state={landingData:w.landing,experience:w.experience,education:w.education,skills:w.skills,interests:w.interests,awards:w.awards},n}return Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p,{sidebarData:this.state.landingData}),r.a.createElement("div",{className:"container-fluid p-0"},r.a.createElement(h,{landingData:this.state.landingData}),r.a.createElement("hr",{className:"m-0"}),r.a.createElement(f,{experience:this.state.experience}),r.a.createElement("hr",{className:"m-0"}),r.a.createElement(v,{education:this.state.education}),r.a.createElement("hr",{className:"m-0"}),r.a.createElement(N,{skills:this.state.skills}),r.a.createElement("hr",{className:"m-0"}),r.a.createElement(D,{interests:this.state.interests}),r.a.createElement("hr",{className:"m-0"}),r.a.createElement(k,{awards:this.state.awards})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e){e.exports=JSON.parse('{"landing":{"firstName":"Harivamshi","lastName":"Diddiga","phoneNumber":"+1 631-820-5839","bio":"Software Developer with 4 years of Experience","email":"harivamshididdiga@gmail.com","linkedin":"https://www.linkedin.com/in/harivamshi-diddiga/","github":"https://github.com/harivamshi81189"},"experience":[{"position":"Software Developer","organization":"Gridlex Inc","aboutWork":"Responsible for gathering client requirements to analyze the data and build algorithms for website development using Python-Django","fromDate":"September 2022","toDate":"May 2023"},{"position":"Research Assistant","organization":"University of Albama at Birmingham","aboutWork":"Built a mobile application for CV anesthesia trainees\' CIED curriculum using Flutter.","fromDate":"September 2021","toDate":"August 2022"},{"position":"Software Developer","organization":"Gridlex Services","aboutWork":"Responsible for building the mobile applications using Flutter and web aplications using Python-Django.","fromDate":"July 2020","toDate":"July 2021"},{"position":"Software Developer","organization":"Viven Infomedia","aboutWork":"Responsible for building the mobile applications using Flutter.","fromDate":"May 2019","toDate":"June 2020"},{"position":"Campus Ambassador","organization":"Plunes Technology","aboutWork":"Responsible for encouraging students to participate in the debates conducted by plunes.","fromDate":"December 2017","toDate":"May 2018"}],"education":[{"university":"University of Alabama, Birmingham","degree":"Masters, Computer Science","gpa":"3.88/4.0","fromDate":"August 2021","toDate":"December 2022"},{"university":"Kommuri Pratap Reddy Institute of Technology, Ghatkesar","degree":"Bachelor of Technology, Computer Science","gpa":"7.16/10","fromDate":"August 2016","toDate":"September 2020"}],"skills":[{"name":"Flutter"},{"name":"Dart"},{"name":"Python"},{"name":"Django"},{"name":"C/C++"},{"name":"HTML5"},{"name":"CSS"},{"name":"Java"},{"name":"Postgres SQL"},{"name":"Adobe Photoshop"},{"name":"Adobe Premiere Pro"},{"name":"Microsoft Office"},{"name":"Camtasia"},{"name":"Docker"},{"name":"Kubernetes"},{"name":"Jenkins"}],"interests":{"paragraphOne":"Always interested in learning new skills and improve my knowledge.","paragraphTwo":"Hosting a youtube channel named \'Tech Soutions\' which is technology related. Most of the videos are about solving issues related to mobile and PC. "},"awards":[{"awardDetail":"2nd Prize in Presentation about Ethical Hacking, Aagama 2k18-Anurag College."},{"awardDetail":"IBM AI Engineering Professional Certification, Coursera"},{"awardDetail":"Python 3 Programming Certification, Coursera"},{"awardDetail":"Python for Everybody Certification, Coursera"},{"awardDetail":"Introduction to HTMl Certification, Coursera"},{"awardDetail":"Flutter: Mobile App Development Certification, Udemy"}]}')}},[[15,1,2]]]);
//# sourceMappingURL=main.5bd5413a.chunk.js.map