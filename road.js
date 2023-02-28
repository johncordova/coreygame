class Road{
    constructor(x,width,laneCount=3){
        this.x=x;
        this.width=width;
        this.laneCount=laneCount;
        this.left=x-width/2;
        this.right=x+width/2;

        const infinity=10000;
        this.top=-infinity;
        this.bottom=infinity;

        const topLeft={x:this.left, y:this.top};
        const bottomLeft={x:this.left, y:this.bottom};
        const topRight={x:this.right, y:this.top};
        const bottomRight={x:this.right, y:this.bottom};

    }

    getLaneCenter(laneIndex){
        const laneWidth=this.width/this.laneCount;
        return this.left+laneWidth/2+
        Math.min(laneIndex, this.laneCount-1)*laneWidth;
    }


    draw(ctx){
        ctx.linewidth = 5;
        ctx.strokeStyle="yellow";
        // This is where we draw all the lanes
        for (let i=1;i<=this.laneCount-1;i++){
            // We have defined a linear interpolation method in util.js
            const x=lerp(
                this.left,
                this.right,
                i/this.laneCount
            );
            // This is where we draw the inside lanes
            ctx.setLineDash([20,20]);
            ctx.beginPath();
            ctx.moveTo(x, this.top);
            ctx.lineTo(x, this.bottom);
            ctx.stroke();
        }

    }
}



