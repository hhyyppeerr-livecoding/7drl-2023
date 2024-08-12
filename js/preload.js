let tileSize
let tileset_size_aux = 48 //12, 24, 36, 48, 60
let tileset_size = tileset_size_aux + 'x' + tileset_size_aux
let player_sprite_val = 98
let monster_sprite_val = 243
let heartfull_sprite_val = 332
let circle_sprite_val = 312
let floors = [6,7,8,9,10,11,12,14,15,16,17,18,19,20,21,22,23,25,26,27,65,290,293,296,297,298]
let walls = [274,275,276,277,278,279,280,281]
let doors = [123, 90]
let floor_sprites = []
let wall_sprites = []
let doors_sprites = []
let player_sprite
let heart_sprite
let circle_sprite
let monster_sprite
let stairs_sprite

let player
let turnoJudador = true

function preload() {
    for(let i = 0; i < floors.length; i++){
        floor_sprites.push(loadImage('../imgs/tileset/'+tileset_size+'/'+floors[i]+'.png'))
    }
    for(let i = 0; i < walls.length; i++){
        wall_sprites.push(loadImage('../imgs/tileset/'+tileset_size+'/'+walls[i]+'.png'))
    }
    for(let i = 0; i < doors.length; i++){
        doors_sprites.push(loadImage('../imgs/tileset/'+tileset_size+'/'+doors[i]+'.png'))
    }
    player_sprite = loadImage('../imgs/tileset2/'+tileset_size+'/'+player_sprite_val+'.png')
    heart_sprite = loadImage('../imgs/tileset3/'+tileset_size+'/'+heartfull_sprite_val+'.png')
    circle_sprite = loadImage('../imgs/tileset3/'+tileset_size+'/'+circle_sprite_val+'.png')
    monster_sprite = loadImage('../imgs/tileset3/'+tileset_size+'/'+monster_sprite_val+'.png')
}