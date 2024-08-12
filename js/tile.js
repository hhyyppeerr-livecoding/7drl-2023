

class Tile{
    constructor(x, y, tile, isWalkable){
        this.x = int(x)
        this.y = int(y)
        this.tile = tile
        this.isWalkable = isWalkable
        this.entity = null
        this.item = null
    }
    draw(){
        image(this.tile, this.x*tileSize, this.y*tileSize, tileSize, tileSize)
        if(this.entity != null){
            this.entity.draw()
        }
    }
    setEntity(entity){
        this.entity = entity
    }
    getTile(x, y){
        return map[x][y]
    }
    getNeighbor(dx, dy){
        return this.getTile(this.x+dx, this.y+dy)
    }
    getNeighbors(){
        let neighbors = []
        neighbors.push(this.getNeighbor(0, -1))
        neighbors.push(this.getNeighbor(0, 1))
        neighbors.push(this.getNeighbor(-1, 0))
        neighbors.push(this.getNeighbor(1, 0))
        return neighbors
    }
    getWalkableNeighbors(){
        let neighbors = this.getNeighbors()
        let walkableNeighbors = []
        for(let i = 0; i < neighbors.length; i++){
            if(neighbors[i].isWalkable){
                walkableNeighbors.push(neighbors[i])
            }
        }
        return walkableNeighbors
    }
    getConnectedTiles(){
        let frontier = [this]
        let connectedTiles = [this]
        while(frontier.length > 0){
            let current = frontier.pop()
            let neighbors = current.getWalkableNeighbors()
            for(let i = 0; i < neighbors.length; i++){
                if(!connectedTiles.includes(neighbors[i])){
                    frontier.push(neighbors[i])
                    connectedTiles.push(neighbors[i])
                }
            }
        }
        return connectedTiles
    }
 
}

class Floor extends Tile{
    constructor(x, y){
        super(x, y, random(floor_sprites), true)
    }
}

class Wall extends Tile{
    constructor(x, y){
        super(x, y, random(wall_sprites), false)
    }
}