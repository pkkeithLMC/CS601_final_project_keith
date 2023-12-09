async function getEduction(){

   
    try{
        const response = await fetch('https://www.professorkeith.com/term_project_keith/models/degrees.json');
        const data = await response.json();
        return displayEducationData( data );
    } catch(err) {console.log(err)}

   
  }

async function getExperience(){
    try{
        const response = await fetch('https://www.professorkeith.com/term_project_keith/models/experience.json');
        const data = await response.json();
        return displayExperienceData( data );
    } catch(err) {console.log(err)}
}

async function getPresentations(){
    try{
        const response = await fetch('https://www.professorkeith.com/term_project_keith/models/conferences.json');
        const data = await response.json();
        return displayPresentationData( data );
    } catch(err) {console.log(err)}
}

async function getPublications(){
    try{
        const response = await fetch('https://www.professorkeith.com/term_project_keith/models/publications.json');
        const data = await response.json();
        return displayPublicationData( data );
    } catch(err) {console.log(err)}
}


async function getService(){
    try{
        const response = await fetch('https://www.professorkeith.com/term_project_keith/models/service.json');
        const data = await response.json();
        return displayServiceData( data );
    } catch(err) {console.log(err)}
}

new Vue({
    el: '#resumeApp',
    data: {
      resumeSections: [
        { title: 'Experience', content: '', active: false },
        { title: 'Education', content: '', active: false },
        { title: 'Conference Presentations', content: '', active: false},
        { title: 'Publications', content: '', active: false },
        { title: 'Service Activities', content: '', active: false}
        // Add more sections as needed
      ]
    },
    methods: {
        async loadExperienceContent() {
            this.resumeSections[0].content = await getExperience();
        },
        async loadEducationContent(){
            this.resumeSections[1].content = await getEduction();
        },
        async loadPresentationConent(){
            this.resumeSections[2].content = await getPresentations();
        },
        async loadPublicationConent(){
            this.resumeSections[3].content = await getPublications();
        },
        async loadServiceContent(){
            this.resumeSections[4].content = await getService();
        },
      toggleSection(index) {
        this.resumeSections[index].active = !this.resumeSections[index].active;
      }
    },
    created() {
        this.loadExperienceContent();
        this.loadEducationContent();
        this.loadPresentationConent();
        this.loadPublicationConent();
        this.loadServiceContent();
    }
  });


  function displayEducationData( data ){
    let htmlCode = "<table>"

    data.forEach(degree => {
        htmlCode += '<tr class="edu-row">'
        htmlCode += `<td class = "title">${degree.type} - ${degree.school}</td>`
        htmlCode += `<td class = "year">${degree.yearConferred}</td>`
        htmlCode += '</tr>'
        htmlCode += '<tr class="edu-row">'
        htmlCode += `<td class = "info">${degree.major}</td>`
        htmlCode += '<tr><td class = "blank" colspan = "2"></td></tr>'
    });
    
    htmlCode += "</table>"

    return htmlCode;
  }

  function displayExperienceData( data ){
    let htmlCode = "<table>"

    data.forEach(exp => {
        htmlCode += '<tr class="exp-row">'
        htmlCode += `<td class = "title">${exp.title} - ${exp.location}</td>`
        htmlCode += `<td class = "year">${exp.dates}</td>`
        htmlCode += '</tr>'
        htmlCode += '<tr class="exp-row">'
        htmlCode += `<td class = "info">${exp.description}</td>`
        htmlCode += '<tr><td class = "blank" colspan = "2"></td></tr>'
    });
    
    htmlCode += "</table>"
   
    return htmlCode;
  }

  function displayPresentationData( data ){
    let htmlCode = "<table>"

    data.forEach(exp => {
        htmlCode += `<tr class = "pres-row">`
        htmlCode += `<td>${exp.names} ${exp.date}. <span class = "pres-title">${exp.title}</span>. ${exp.type}, ${exp.location}.</td>`
        htmlCode += '<tr><td class = "blank"></td></tr>'
    });

    htmlCode += "</table>";

    return htmlCode;
  }

  function displayPublicationData(data) {
    let htmlCode = "<table>"
    data.forEach(exp => {
        htmlCode += `<tr class = "pub-row">`
        htmlCode += `<td>${exp.names} ${exp.date}. ${exp.title}. ${exp.publisher}, ${exp.page}, ${exp.other}.</td>`
        htmlCode += '<tr><td class = "blank"></td></tr>'
    });

    htmlCode += "</table>";

    return htmlCode;
  }

  function displayServiceData( data ){
    let htmlCode = "<table>"

    data.forEach(exp => {
        htmlCode += '<tr class="serv-row">'
        htmlCode += `<td class = "dates">${exp.dates}</td>`
        htmlCode += `<td class = "activity">${exp.activity}</td>`
        htmlCode += '</tr>'
        htmlCode += '<tr><td class = "blank" colspan = "2"></td></tr>'
    });
    
    htmlCode += "</table>"
   
    return htmlCode;
  }