class RenderSystemMap{
    constructor(map){
        this.map = map
    }
    draw(){
        for(let i = 0; i < columns; i++){
            for(let j = 0; j < rows; j++){
                this.map[i][j].draw()
            }
        }
    }
}

class RenderSystemEntity{
    constructor(entity){
        this.entity = entity
    }
    draw(){
        this.entity.draw()
    }
}

class RenderSystemEnemies{
    constructor(entities){
        this.entities = entities
    }
    draw(){
        for(let i = 0; i < this.entities.length; i++){
            this.entities[i].draw()
        }
    }
}

class RenderSystemPlayer{
    constructor(player){
        this.player = player
    }
    draw(){
        this.player.draw()
        this.player.drawHealth()
    }
}

class EnemySystemTurn{
    constructor(entities){
        this.entities = entities
    }
    update(){
        if(!turnoJudador){
        for(let i = 0; i < this.entities.length; i++){
            this.entities[i].randomMove()
        }
        turnoJudador = true
    }
    }
}