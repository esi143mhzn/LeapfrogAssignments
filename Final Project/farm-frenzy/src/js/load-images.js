class LoadImage{

    constructor() {
        this.images = {
            background: null,
            main: null,
            shed: null,
            howToPlay: null,

            duckleft1: null,
            duckleft2: null,
            duckleft3: null,
            duckleft4: null,

            duckright1: null,
            duckright2: null,
            duckright3: null,
            duckright4: null,

            duckeatleft: null,

            bucketEmpty: null,
            bucketFull: null,
            well1: null,
            well2: null,

            egg1:null,
            egg2:null,

            grass1:null,

            van1: null,
            van2: null,
        };

        for(let i in this.images) {
            let img = new Image();

            img.src = 'src/images/' + i + '.png';
            this.images[i] = img;

        }
    }

    //image getter
    getImage(name) {
        return this.images[name];
    }

    //draw image
    draw( name, posx, posy, width, height ) {
        ctx.drawImage( this.images[name], posx, posy, width, height );
    }
}

let images = new LoadImage()
