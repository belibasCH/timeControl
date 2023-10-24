class RotationState {

    xVersch = 0; number
    yVersch = 0;
    scale = 0;

    scaleMultiplicator = 45;

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

        this.scale = Math.sqrt(Math.pow(100 - event.clientX, 2) + Math.pow(event.clientY - 100, 2));
        this.scale = this.scale/this.scaleMultiplicator;

        return (this.yVersch+this.xVersch)/this.scale;
    }
}
class ObenRechts extends RotationState{

    constructor() {
        super()
    }

    rotate(event, startDragPointX, startDragPointY) {
        this.xVersch =  event.clientX - startDragPointX;
        this.yVersch =  event.clientY - startDragPointY;

        this.scale = Math.sqrt(Math.pow(event.clientX -100, 2) + Math.pow(100 - event.clientY, 2));
        this.scale = this.scale/this.scaleMultiplicator;

        return (this.yVersch+this.xVersch)/this.scale;
    }
}
class UntenRechts extends RotationState{

    constructor() {
        super()
    }

    rotate(event, startDragPointX, startDragPointY) {
        this.xVersch =  startDragPointX - event.clientX;
        this.yVersch =  event.clientY - startDragPointY;

        this.scale = Math.sqrt(Math.pow(event.clientX - 100, 2) + Math.pow(event.clientY -100, 2));
        this.scale = this.scale/this.scaleMultiplicator;

        return (this.yVersch+this.xVersch)/this.scale;
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
        this.scale = this.scale/this.scaleMultiplicator;

        return (this.yVersch+this.xVersch)/this.scale;
    }


}
