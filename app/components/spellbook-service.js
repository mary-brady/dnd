import Spell from "../../models/Spell.js";

function formatUrl(url) {
    return '//bcw-getter.herokuapp.com/?url=' + encodeURIComponent(url)
}

//saving the spells
let spells = {}
//my saved/learned spells
let mySpellbook = {}

export default class SpellbookService {
    forgetSpell(url) {
        delete mySpellbook[url]
    }
    learnSpell(url) {
        mySpellbook[url] = spells[url]
    }
    constructor() {
    }

    get mySpellbook() {
        return mySpellbook
    }

    getSpells(draw, drawError) {
        fetch(formatUrl('http://dnd5eapi.co/api/spells'))
            .then(res => res.json())
            .then(res => draw(res.results))
    }

    getSpell(url, draw) {
        if (spells[url]) {
            return draw(spells[url])
        }
        fetch(formatUrl(url))
            .then(res => res.json())
            .then(res => {
                let spell = new Spell(res)
                spells[url] = spell
                return draw(spell)
            })
    }
}