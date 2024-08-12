class Entity{
    constructor(x, y, tile){
        this.x = x
        this.y = y
        this.tile = tile
        this.components = []
        map[x][y].setEntity(this)
    }
    draw(){
        image(this.tile, this.x*tileSize, this.y*tileSize, tileSize, tileSize)
    }
    addComponent(component){
        this.components.push(component)
    }
    getComponent(name){
        for(let i = 0; i < this.components.length; i++){
            if(this.components[i].name == name){
                return this.components[i]
            }
        }
    }
    removeComponent(name){
        for(let i = 0; i < this.components.length; i++){
            if(this.components[i].name == name){
                this.components.splice(i, 1)
            }
        }
    }
}

class Monster extends Entity{
    constructor(x, y){
        super(x, y, monster_sprite)
    }
    canWalk(x,y){
        return map[x][y].isWalkable && map[x][y].entity == null
    }
    up(){
        if(this.canWalk(this.x, this.y-1)){
            map[this.x][this.y].setEntity(null)
            this.y--
            map[this.x][this.y].setEntity(this)
            
        }
    }
    down(){
        if(this.canWalk(this.x, this.y+1)){
            map[this.x][this.y].setEntity(null)
            this.y++
            map[this.x][this.y].setEntity(this)
        }
    }
    left(){
        if(this.canWalk(this.x-1, this.y)){
            map[this.x][this.y].setEntity(null)
            this.x--
            map[this.x][this.y].setEntity(this)
        }
    }
    right(){
        if(this.canWalk(this.x+1, this.y)){
            map[this.x][this.y].setEntity(null)
            this.x++
            map[this.x][this.y].setEntity(this)
        }
    }
    randomMove(){
        let val = random(1)
        if(val < 0.25){
            this.up()
        }else if(val < 0.5){
            this.down()
        }else if(val < 0.75){
            this.left()
        }else{
            this.right()
        }
    }
}

class Player extends Entity{
    constructor(x, y){
        super(x, y, player_sprite)
        this.addComponent(new Health(3, 4))
    }
    canWalk(x,y){
        return map[x][y].isWalkable && map[x][y].entity == null && turnoJudador
    }
    up(){
        if(this.canWalk(this.x, this.y-1)){
            map[this.x][this.y].setEntity(null)
            this.y--
            turnoJudador = false
            map[this.x][this.y].setEntity(this)
        }
    }
    down(){
        if(this.canWalk(this.x, this.y+1)){
            map[this.x][this.y].setEntity(null)
            this.y++
            turnoJudador = false
            map[this.x][this.y].setEntity(this)
        }
    }
    left(){
        if(this.canWalk(this.x-1, this.y)){
            map[this.x][this.y].setEntity(null)
            this.x--
            turnoJudador = false
            map[this.x][this.y].setEntity(this)
        }
    }
    right(){
        if(this.canWalk(this.x+1, this.y)){
            map[this.x][this.y].setEntity(null)
            this.x++
            turnoJudador = false
            map[this.x][this.y].setEntity(this)
        }
    }
    getHealth(){
        return this.getComponent("health").getHealth()
    }
    drawHealth(){
        for(let i = 0; i < this.getComponent("health").maxHealth; i++){
            if(i < this.getHealth()){
                image(heart_sprite, i*tileSize, height-tileSize)
            }else{
                image(circle_sprite, i*tileSize, height-tileSize)
            }
        }
    }
}

class Component{
    constructor(name){
        this.name = name
    }
}
class Health extends Component{
    constructor(val, max){
        super("health")
        this.health = val
        this.maxHealth = max
    }
    applyDamage(damage){
        this.health -= damage
    }
    getHealth(){
        return this.health
    }
    heal(val){
        this.health += val
        if(this.health > this.maxHealth){
            this.health = this.maxHealth
        }
    }
}


function keyPressed(){
    if(keyCode == UP_ARROW){
        player.up()
    }else if(keyCode == DOWN_ARROW){
        player.down()
    }else if(keyCode == LEFT_ARROW){
        player.left()
    }else if(keyCode == RIGHT_ARROW){
        player.right()
    }
}