class LoadImage{

    constructor() {
        this.images = {
            background: null,
            main: null,
            shed: null,
            howToPlay: null,

            duckback1: null,
            duckback2: null,
            duckback3: null,
            duckback3: null,
            duckbackleft1: null,
            duckbackleft2: null,
            duckbackleft3: null,
            duckbackright1: null,
            duckbackright2: null,
            duckbackright3: null,

            duckfront1: null,
            duckfront2: null,
            duckfront3: null,
            duckfrontleft1: null,
            duckfrontleft2: null,
            duckfrontleft3: null,
            duckfrontright1: null,
            duckfrontright2: null,
            duckfrontright3: null,

            duckleft1: null,
            duckleft2: null,
            duckleft3: null,
            duckleft4: null,

            duckright1: null,
            duckright2: null,
            duckright3: null,
            duckright4: null,

            duckeatleft: null,
            duckeatright: null,

            bucketEmpty: null,
            bucketFull: null,
            well1: null,
            well2: null,

            egg1:null,
            egg2:null,

            grass1:null,
            grass2:null,
            grass3:null,
            grass4:null,

            van1: null,
            van2: null,
        };

        for(let i in this.images) {
            let img = new Image();

            img.src = 'src/images/' + i + '.png';
            this.images[i] = img;

        }
    }

    getImage(name) {
        return this.images[name];
    }
    draw( name, posx, posy, width, height ) {
        ctx.drawImage( this.images[name], posx, posy, width, height );
      }
}

let images = new LoadImage()
