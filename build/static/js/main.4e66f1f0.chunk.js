(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{14:function(e,a,t){e.exports=t.p+"static/media/profile.ab51b7a6.png"},15:function(e,a,t){e.exports=t(27)},20:function(e,a,t){},21:function(e,a,t){},27:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(13),i=t.n(s),l=(t(20),t(2)),c=t(3),o=t(4),m=t(5),u=(t(21),t(14)),d=t.n(u),p=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).sidebarData=e.sidebarData,n}return Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{class:"navbar navbar-expand-lg navbar-dark bg-primary fixed-top",id:"sideNav"},r.a.createElement("a",{class:"navbar-brand js-scroll-trigger",href:"#page-top"},r.a.createElement("span",{class:"d-block d-lg-none"},"Clarence Taylor"),r.a.createElement("span",{class:"d-none d-lg-block"},r.a.createElement("img",{class:"img-fluid img-profile rounded-circle mx-auto mb-2",src:d.a,alt:""}))),r.a.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{class:"navbar-toggler-icon"})),r.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{class:"navbar-nav"},r.a.createElement("li",{class:"nav-item"},r.a.createElement("a",{class:"nav-link js-scroll-trigger",href:"#about"},"About")),r.a.createElement("li",{class:"nav-item"},r.a.createElement("a",{class:"nav-link js-scroll-trigger",href:"#experience"},"Experience")),r.a.createElement("li",{class:"nav-item"},r.a.createElement("a",{class:"nav-link js-scroll-trigger",href:"#education"},"Education")),r.a.createElement("li",{class:"nav-item"},r.a.createElement("a",{class:"nav-link js-scroll-trigger",href:"#skills"},"Skills")),r.a.createElement("li",{class:"nav-item"},r.a.createElement("a",{class:"nav-link js-scroll-trigger",href:"#interests"},"Interests")),r.a.createElement("li",{class:"nav-item"},r.a.createElement("a",{class:"nav-link js-scroll-trigger",href:"#awards"},"Awards")))))}}]),t}(n.Component),b=t(6),h=t(11),g=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).landingData=e.landingData,n}return Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{class:"resume-section",id:"about"},r.a.createElement("div",{class:"resume-section-content"},r.a.createElement("h1",{class:"mb-0"},this.landingData.firstName," ",r.a.createElement("span",{class:"text-primary"},this.landingData.lastName)),r.a.createElement("div",{class:"subheading mb-5"},this.landingData.phoneNumber," \xb7 ",r.a.createElement("a",{href:"mailto:{this.landingData.email}"},this.landingData.email," \xb7 ")),r.a.createElement("p",{class:"lead mb-5"},this.landingData.bio),r.a.createElement("div",{class:"social-icons"},r.a.createElement("a",{class:"social-icon",href:this.landingData.linkedin},r.a.createElement(b.a,{icon:h.b})),r.a.createElement("a",{class:"social-icon",href:this.landingData.github},r.a.createElement(b.a,{icon:h.a})))))}}]),t}(n.Component),E=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).experience=e.experience,n}return Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{class:"resume-section",id:"experience"},r.a.createElement("div",{class:"resume-section-content"},r.a.createElement("h2",{class:"mb-5"},"Experience"),this.experience.map((function(e,a){return r.a.createElement("div",{key:a,class:"d-flex flex-column flex-md-row justify-content-between mb-5"},r.a.createElement("div",{class:"flex-grow-1"},r.a.createElement("h3",{class:"mb-0"},e.position),r.a.createElement("div",{class:"subheading mb-3"},e.organization),r.a.createElement("p",null,e.aboutWork)),r.a.createElement("div",{class:"flex-shrink-0"},r.a.createElement("span",{class:"text-primary"},e.fromDate," - ",e.toDate)))}))))}}]),t}(n.Component),f=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).education=e.education,n}return Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{class:"resume-section",id:"education"},r.a.createElement("div",{class:"resume-section-content"},r.a.createElement("h2",{class:"mb-5"},"Education"),this.education.map((function(e,a){return r.a.createElement("div",{key:a,class:"d-flex flex-column flex-md-row justify-content-between mb-5"},r.a.createElement("div",{class:"flex-grow-1"},r.a.createElement("h3",{class:"mb-0"},e.university),r.a.createElement("div",{class:"subheading mb-3"},e.degree),r.a.createElement("p",null,e.gpa)),r.a.createElement("div",{class:"flex-shrink-0"},r.a.createElement("span",{class:"text-primary"},e.fromDate," - ",e.toDate)))}))))}}]),t}(n.Component),v=t(8),k=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).skills=e.skills,n}return Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"skills"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h2",{className:"mb-5"},"Skills"),r.a.createElement("div",{className:"subheading mb-3"},"Programming Languages & Tools"),r.a.createElement("div",{className:"row"},this.skills.map((function(e,a){return r.a.createElement("div",{key:a,className:"col-6"},r.a.createElement("p",{className:"list-item"},r.a.createElement(b.a,{icon:v.b,color:"green"}),r.a.createElement("span",{className:"ml-3"},e.name)))})))))}}]),t}(n.Component),j=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).interests=e.interests,n}return Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"interests"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h2",{className:"mb-5"},"Interests"),r.a.createElement("p",null,this.interests.paragraphOne),r.a.createElement("p",{className:"mb-0"},this.interests.paragraphTwo)))}}]),t}(n.Component),w=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).awards=e.awards,n}return Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"awards"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h2",{className:"mb-5"},"Awards & Certifications"),r.a.createElement("ul",{className:"fa-ul mb-0"},this.awards.map((function(e,a){return r.a.createElement("li",{key:a},r.a.createElement(b.a,{icon:v.a,color:"#ffc107"}),r.a.createElement("span",{className:"ml-2"}," ",e.awardDetail," "))})))))}}]),t}(n.Component),y=t(7),O=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).state={landingData:y.landing,experience:y.experience,education:y.education,skills:y.skills,interests:y.interests,awards:y.awards},n}return Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p,{sidebarData:this.state.landingData}),r.a.createElement("div",{className:"container-fluid p-0"},r.a.createElement(g,{landingData:this.state.landingData}),r.a.createElement("hr",{className:"m-0"}),r.a.createElement(E,{experience:this.state.experience}),r.a.createElement("hr",{className:"m-0"}),r.a.createElement(f,{education:this.state.education}),r.a.createElement("hr",{className:"m-0"}),r.a.createElement(k,{skills:this.state.skills}),r.a.createElement("hr",{className:"m-0"}),r.a.createElement(j,{interests:this.state.interests}),r.a.createElement("hr",{className:"m-0"}),r.a.createElement(w,{awards:this.state.awards})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e){e.exports=JSON.parse('{"landing":{"firstName":"Harivamshi","lastName":"Diddiga","phoneNumber":"+91-7671083299","bio":"I am persuing B.Tech 4th year in Computer Science Stream. I am a flutter mobile app developer","email":"harivamshididdiga@gmail.com","linkedin":"https://www.linkedin.com/in/harivamshi-diddiga/","github":"https://github.com/harivamshi81189"},"experience":[{"position":"Mobile App Developer Intern","organization":"Viven Infomedia","aboutWork":"Responsible for building the mobile applications using flutter.","fromDate":"May 2019","toDate":"Present"},{"position":"Campus Ambassador","organization":"Plunes Technology","aboutWork":"Responsible for encouraging students to participate in the debates conducted by plunes.","fromDate":"December 2017","toDate":"May 2018"}],"education":[{"university":"Kommuri Pratap Reddy Institute of Technology, Ghatkesar","degree":"Bachelor of Technology, Computer Science","gpa":"6.8/10","fromDate":"August 2016","toDate":"Present"},{"university":"NRI Junior College, Nizampet, Hyderabad","degree":"Intermediate, MPC","gpa":"88.4 %","fromDate":"June 2014","toDate":"May 2016"}],"skills":[{"name":"Flutter"},{"name":"Dart"},{"name":"Python"},{"name":"C Programming"},{"name":"C++"},{"name":"HTML5"},{"name":"CSS"},{"name":"Java"},{"name":"Adobe Photoshop"},{"name":"Adobe Premiere Pro"},{"name":"Microsoft Office"},{"name":"Camtasia"}],"interests":{"paragraphOne":"I am always interested in learning new skills and increase my knowledge.","paragraphTwo":"Apart from being a mobile app developer, I host a youtube channel named \'Tech Soutions\' which is technology related. Most of my videos are about solving issues related to mobile and PC. "},"awards":[{"awardDetail":"2nd Prize in Presentation about Ethical Hacking, Aagama 2k18-Anurag College."}]}')}},[[15,1,2]]]);
//# sourceMappingURL=main.4e66f1f0.chunk.js.map