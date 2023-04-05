export class Tournament {
    id: Number;
    name: String;
    game: String;
    date: String;
    constructor(id:Number, name: String, game: String, date: String){
        this.id = id;
        this.name = name;
        this.game = game;
        this.date = date;
    }
}