const Game = {

    // Metadata
    name: 'JetPack Joyride',
    author: 'Sergio Baltanás & Jon Arechalde',
    version: '1.0.0',
    license: undefined,
    description: 'Go through the longest distance you can',

    // Canvas
    canvas: {

        size: {
            width: undefined,
            height: undefined
        },
        obejectInDOM: undefined

    },
    ctx: undefined,

    // Time
    time: {

        FPS: 60,
        framesCount: 0

    },

    // Controls
    keys: {

        SPACE: 32,
        UP: 38

    },

    // Game elements
    player: undefined,
    bullets: [],
    bulletShells: [],

    walkers: [],
    rockets: [],
    obstacles: [],
    lasers: [],

    background: undefined,

    // Game points system
    distanceDone: {

        position: {
            x: 0,
            y: 0
        },
        value: 0

    },

    coins: {

        position: {
            x: 0,
            y: 0
        },
        value: 0

    },


    //----- INITIALIZE METHODS -----    

    init() {

    },

    setCanvasDimensions() {

    },

    reset() {

    },


    //----- GAME START METHODS -----

    start() {

    },


    //----- GAME ENGINE -----

    createFrame() {

        setInterval(() => {


        }, 1000 / this.time.FPS)

    },


    //----- CREATORS -----

    createEnemies() {

    },

    deleteOutsiders() {

    },


    //----- MOTION METHODS -----    

    moveBackground() {

    },

    moveEnemies() {

    },

    movePlayer() {

    },


    //----- CHECKERS -----

    checkCollisions() {

    },

    playerCollision() {

    },

    bulletsCollision() {

    },


    //----- RENDERING IMAGE-----

    clearAll() {

    },

    drawAll() {

    },

    drawBackgrond() {

    },

    drawEnemies() {

    },

    drawPlayer() {

    },


    //----- GAME OVER -----

    gameOver() {

    }

}