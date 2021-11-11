(function () {
    window.addEventListener('load', ()=> {
        const url = window.location.href
        const location = url.substr(url.lastIndexOf('/')+1)
        if (location === 'skills'){
            PopulateSkills()
        }
        ToggleNav()
    })
    
    function ToggleNav () {
        const toggle = document.querySelector('.menu-icon')
        toggle.addEventListener('click', () => {
            document.querySelector('nav').classList.toggle('active')
        })
    }
    
    function PopulateSkills () {
        let injectionTemplate = ``
        let prof = ''
        
        skills.sort((a, b) => b.progress - a.progress)
        
        skills.forEach((skill) =>{
            if (skill.progress === 100){
                prof = 'Mastered'
            }else if (skill.progress >= 80){
                prof = 'Skilled'
            }else if (skill.progress > 70){
                prof = 'Comfortable'
            }else if (skill.progress > 60) {
                prof = 'Still Learning'
            }else if (skill.progress < 50) {
                prof = 'Just starting'
            }else{
                prof = 'Want to Learn'
            }
            
            let template = `<div class="skill">
      <img src="assests/png/${skill.img}" alt="${skill.skill} logo">
      <h2>${skill.skill}</h2>
      <p>${prof}</p>
      <div class="progress-container">
        <div class="progress-bar" style="width: ${skill.progress}%"></div>
      </div>
      <p>${skill.progress}%</p>
    </div> `
            injectionTemplate += template
        })
        const insertionDiv = document.querySelector('.skill-flex-container')
        insertionDiv.insertAdjacentHTML('afterbegin', injectionTemplate)
    }
})()