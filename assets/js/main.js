
async function get() {
    const response = await fetch("https://raw.githubusercontent.com/guillxr/developer-portfolio/main/data/profile.json")
    return response.json()
}

async function render() {
    const data = await get()
    const main = document.getElementById("main")

    const newHtml =
    `<section class="header" id="header">
        <div class="photo">
            <img src="${data.photo}" alt="${data.name}">
        </div>
        <div class="title">
            <h1>Olá!</h1>
            <span class="msg">Sou ${data.name}</span>
        </div>
        <div class="information">
            <p>${data.description}</p>
        </div>
        <div class="contact" id="contact">
            ${data.contact.map((i) =>`
            <a href="${i.url}" class="${i.name.toLowerCase()}" target="_blank">
            <span>
                ${i.name === 'LinkedIn'
                ? 
                `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-linkedin" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                </svg>` 
                :
                `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-github" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                </svg>`}
            </span>
            <span>${i.name}</span>
            </a>`).join('')}
        </div>
        </section>
        <section class="graduations" id="graduations">
            <div class="section-title">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" class="bi bi-mortarboard" viewBox="0 0 16 16">
                    <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917zM8 8.46 1.758 5.965 8 3.052l6.242 2.913z"/>
                    <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46z"/></svg>
                </span>
                <h2>Formação</h2>
            </div>
            <div class="graduation-list">
                ${data.graduation.map((i) => `
                    <div class="graduation">
                        <div class="graduation-content">
                            <div class="graduation-information">
                                <h3 class="title">${i.name}</h3>
                                <span class="institution">${i.institution}</span>
                                <span class="date">${i.period}</span>
                            </div>
                            <div class="graduation-description">
                                <p>${i.description}</p>
                            </div>
                        </div>
                    </div>`
                ).join('')}
            </div>
        </section>
        <section class="projects" id="projects">
            <div class="section-title">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" class="bi bi-code-slash" viewBox="0 0 16 16">
                    <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0"/></svg>
                </span>
                <h2>Projetos</h2>
            </div>
            <div class="projects-list">
                ${data.projects.map((i) => `
                    <div class="project">
                        <div class="project-photo">
                        <img src="assets/img/projectPokeDex.webp" alt="">
                    </div>
                    <div class="project-information">
                        <h3 class="title">PokeDex</h3>
                            <div class="technologies">
                            ${i.technologies.map((i) => `
                                <div class="${i.name.toLowerCase()}">
                                    <span>
                                    ${i.icon}
                                    </span>
                                    <span>${i.name}</span>
                                </div>`).join('')}
                            </div>
                    <p class="description">${i.description}</p>
                    <div class="links">
                        <a href="${i.code}" target="_blank">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-github" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/></svg>
                            </span>
                            <span>Code</span>
                        </a>
                        <a href="${i.url}" target="_blank">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-link-45deg" viewBox="0 0 16 16">
                                <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"/>
                                <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"/></svg>
                            </span>
                            <span>Preview</span>
                        </a>
                    </div>
                </div>
                
                `).join('')}
            </div>
        </section>
        <section class="about" id="about">
        <div class="section-title">
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" class="bi bi-person" viewBox="0 0 16 16">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
            </svg>
            </span>
            <h2>Sobre mim</h2>
        </div>
        <div class="about-content">
            <div class="about-text">
            <p>${data.about}</p>
            </div>
            <div class="about-photo">
            <img src="${data.photo}" alt="${data.name}">
            </div>
        </div>
        </section>`
    main.innerHTML = newHtml
}
render()