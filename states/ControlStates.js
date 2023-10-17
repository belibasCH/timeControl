class RotationState {

    xVersch = 0; number
    yVersch = 0;
    scale = 0;
    constructor() {
    }

    rotate(event, startDragPointX, startDragPointY){}

}

class UntenLinks extends RotationState{

    constructor() {
        super()
    }

    rotate(event, startDragPointX, startDragPointY) {
        this.xVersch =  startDragPointX - event.clientX;
        this.yVersch =  startDragPointY - event.clientY;


        return this.yVersch+this.xVersch/3;
    }
}
class ObenRechts extends RotationState{

    constructor() {
        super()
    }

    rotate(event, startDragPointX, startDragPointY) {
        this.xVersch =  event.clientX - startDragPointX;
        this.yVersch =  event.clientY - startDragPointY;
        // console.log("eventx:"+event.clientX+ " - startx: "+ startDragPointX);
        // console.log("x: "+this.xVersch);
        return this.yVersch+this.xVersch/3;
    }
}
class UntenRechts extends RotationState{

    constructor() {
        super()
    }

    rotate(event, startDragPointX, startDragPointY) {
        this.xVersch =  startDragPointX - event.clientX;
        this.yVersch =  event.clientY - startDragPointY;
        return this.yVersch+this.xVersch/3;
    }
}


class ObenLinks extends RotationState{

    constructor() {
        super()
    }

    rotate(event, startDragPointX, startDragPointY) {
        this.xVersch =  event.clientX - startDragPointX;
        this.yVersch =  startDragPointY - event.clientY;

        this.scale = Math.sqrt(Math.pow(100 - event.clientX, 2) + Math.pow(100 - event.clientY, 2));
        this.scale = this.scale/10;

        return this.yVersch+this.xVersch/this.scale;
    }


}
