myCanvas.height=window.innerHeight;
myCanvas.width=200;

const ctx=myCanvas.getContext("2d");
const road=new Road(myCanvas.width/2, myCanvas.width*0.9,3);
const car=new Car(road.getLaneCenter(1),100,30,50);

animate();

function animate(){
    // This clears the canvas each frame.
    ctx.save();
    //
    myCanvas.height=window.innerHeight;
    // Have the camera follow the car
    ctx.translate(0,-car.y+myCanvas.height*0.7);
    car.update();
    // Draw the road
    road.draw(ctx)
    // Draw the car on the road
    car.draw(ctx);
    ctx.restore();
    
    requestAnimationFrame(animate);
}
