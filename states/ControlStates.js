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
        this.xVersch =  startDragPointX - event.clientX;
        this.yVersch =  event.clientY - startDragPointY;
        return this.yVersch+this.xVersch/3;
    }
}

class UntenRechts extends RotationState{

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
        this.yVersch =  startDragPointY - event.clientY;
        return this.yVersch+this.xVersch/3;
    }
}
class ObenLinks extends RotationState{

    constructor() {
        super()
    }

    rotate(event, startDragPointX, startDragPointY) {
        this.xVersch =  event.clientX - startDragPointX;
        this.yVersch =  event.clientY - startDragPointY;
        return this.yVersch+this.xVersch/3;
    }


}
