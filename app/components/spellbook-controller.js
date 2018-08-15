import SpellbookService from "./spellbook-service.js"

let ss = new SpellbookService

const app = document.getElementById('app')

function draw(spells) {
    let template = ''
    spells.forEach(spell => {
        template += `
        <div class="spell">
       <h3>${spell.name}</h3>
       <div id="${spell.name.split(' ').join('-')}"></div>
       <button onclick="app.controllers.spellbook.viewSpell('${spell.url}')">View</button>
       </div>
       `
    });
    app.innerHTML = template
}

function drawSpell(spell) {
    let template = `
    <div class="spell-details">
    <p><strong>Description: </strong>${spell.desc}</p>
    <p><strong>Description: </strong>${spell.desc}</p>
    <p><strong>Description: </strong>${spell.desc}</p>
    <p><strong>Description: </strong>${spell.desc}</p>

    </div>
    `
    document.getElementById(spell.name.split(' ').join('-')).innerHTML = template


}


export default class SpellbookController {
    constructor() {
        ss.getSpells(draw)

    }
    viewSpell(url) {
        ss.getSpell(url, drawSpell)
    }
}