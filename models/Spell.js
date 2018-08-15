export default class Spell {
    constructor(data) {
        this.name = data.name
        this.desc = data.desc
        this.page = data.page
        this.range = data.range
        this.id = data._id
        this.duration = data.duration
        this.level = data.level
    }
}