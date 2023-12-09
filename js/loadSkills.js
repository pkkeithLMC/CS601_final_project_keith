fetch('https://www.professorkeith.com/term_project_keith/models/skills.json')
.then( response => {
    if(!response.ok){
        throw new Error('Response was not OK');
    }
    return response.json();
})
.then( data => {
    createSkillBars(data);
})
.catch(error => {
    console.error('Error:', error)
})

function createSkillBars( data ) {
    let progressBars = document.getElementById("row");
    progressBars.innerHTML = displayVals( data.my_skills);
}

function displayVals(data) {
    // const style = document.createElement('style');
    // style.appendChild( document.createTextNode(''));
    // document.head.appendChild( style);
    //var sheets = document.styleSheets[1];
    //console.log(sheets);


    let skillsHTML = "";

    data.forEach( skills => {
        let profMargin =  skills.skills.proficency - 5;
   

        skillsHTML += "<div class = 'item'>";
        skillsHTML += "<div class = 'item-text'>";
        skillsHTML += `<span>${skills.skills.skill}</span>`
        skillsHTML += `<style>.skills .item-text .w-${skills.skills.proficency} { margin-left: ${profMargin}%;}</style>`;
        skillsHTML += `<span class = 'w-${skills.skills.proficency}'>${skills.skills.proficency}%</span>`;
        let rule = `.progress-bar.w-${skills.skills.proficency} {width: ${skills.skills.proficency}%;}`;
        skillsHTML += "</div>";
        skillsHTML += "<div class = 'progress'>";
        skillsHTML += `<style>.progress-bar.w-${skills.skills.proficency} {width: ${skills.skills.proficency}%;}</style>`;
        skillsHTML += `<div class = 'progress-bar w-${skills.skills.proficency}'></div>`;
        skillsHTML += "</div></div>"
    });

    return skillsHTML;

    

}