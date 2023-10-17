class RotationState {

    xVersch = 0; number
    yVersch = 0;
    constructor() {
    }

    rotate(event, startDragPointX, startDragPointY){}

}

class UntenLinks extends RotationState{

    constructor() {
        super()
    }

    rotate(event, startDragPointX, startDragPointY) {
        this.xVersch =  startDragPointX - event.offsetX;
        this.yVersch =  event.offsetY - startDragPointY;
        return this.yVersch+this.xVersch/3;
    }
}

class UntenRechts extends RotationState{

    constructor() {
        super()
    }

    rotate(event, startDragPointX, startDragPointY) {
        this.xVersch =  startDragPointX - event.offsetX;
        this.yVersch =  startDragPointY - event.offsetY;
        return this.yVersch+this.xVersch/3;
    }
}

class ObenRechts extends RotationState{

    constructor() {
        super()
    }

    rotate(event, startDragPointX, startDragPointY) {
        this.xVersch =  event.offsetX - startDragPointX;
        this.yVersch =  startDragPointY - event.offsetY;
        return this.yVersch+this.xVersch/3;
    }
}
class ObenLinks extends RotationState{

    constructor() {
        super()
    }

    rotate(event, startDragPointX, startDragPointY) {
        this.xVersch =  event.offsetX - startDragPointX;
        this.yVersch =  event.offsetY - startDragPointY;
        return this.yVersch+this.xVersch/3;
    }


}
