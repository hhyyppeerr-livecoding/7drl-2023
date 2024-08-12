let map = []
let columns = 8
let rows = 8

function createMap(){
    for(let i = 0; i < columns; i++){
        map[i] = []
        for(let j = 0; j < rows; j++){
            let val = random(1)
            if(val < 0.3){
                map[i][j] = new Wall(i, j)
            }else{
                map[i][j] = new Floor(i, j)
            }
            if(!inBounds(i,j)){
                map[i][j] = new Wall(i, j)
            }
        }
    }
    
    return map
}

function inBounds(x, y){
    return x > 0 && x < columns-1 && y > 0 && y < rows-1
}
function getTile(x, y){
    if(inBounds(x,y)){
        return map[x][y]
    }
}
function getEmptyTile(){
    let x = int(random(columns))
    let y = int(random(rows))
    while(!map[x][y].isWalkable){
        x = int(random(columns))
        y = int(random(rows))
    }
    return map[x][y]
}

function isWalkable(x, y){
    return map[x][y].isWalkable
}

function getFloors(){
    let floors = []
    for(let i = 0; i < columns; i++){
        for(let j = 0; j < rows; j++){
            if(map[i][j].isWalkable){
                floors.push(map[i][j])
            }
        }
    }
    return floors
}