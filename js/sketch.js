
function prepareMap(){
    map = createMap()
    let floors = getFloors()
    empty_cell = getEmptyTile()
    let connected_tiles = map[empty_cell.x][empty_cell.y].getConnectedTiles()
    while(connected_tiles.length != floors.length){
        map = createMap()
        floors = getFloors()
        empty_cell = getEmptyTile()
        connected_tiles = map[empty_cell.x][empty_cell.y].getConnectedTiles()
    }
    empty_cell = getEmptyTile()
    player = new Player(empty_cell.x, empty_cell.y)
    empty_cell = getEmptyTile()
    enemies = [new Monster(empty_cell.x, empty_cell.y)]
}

function setup() {
    tileSize = floor_sprites[0].width
    let w = columns * tileSize
    let h = rows * tileSize
    createCanvas(w+4, h+4+tileSize) //*tileSize por cada fila extra que queramos
    background(0);
    noSmooth()
    prepareMap();
    renderSystemMap = new RenderSystemMap(map)
    renderSystemPlayer = new RenderSystemPlayer(player)
    renderSystemEnemies = new RenderSystemEnemies(enemies)
    enemySystemTurn = new EnemySystemTurn(enemies)
}

function draw() {
    renderSystemMap.draw()
    renderSystemPlayer.draw()
    renderSystemEnemies.draw()
    enemySystemTurn.update()
}
