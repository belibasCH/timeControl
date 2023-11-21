// requires ../observable/observable.js
const TimeInputController = () => {
    // Model
    const duration = Observable(20);
    const start = Observable(100);

    //Wheel
    const wheelSize = Observable(200);

    //Timeline
    const ticks = Observable(5);
    const timeLineLength = Observable(750);
    const startHour = Observable(6);

    // Temporary variables for dragging
    let startDragPointX = 0;
    let startDragPointY = 0;

    let startangle = duration.getValue()*6;


    //Sets the start positions for dragging - temporary variables
    const setStartPositions = mousePosition => {
        startDragPointX = mousePosition.clientX;
        startDragPointY = mousePosition.clientY;
    };

    //Updates the duration of the meeting on mousemove
    const updateDuration = event => {


        const relativeX = event.offsetX; // selection position via mouse or touch where 0,0 is the canvas top left corner
        const relativeY = event.offsetY;
        // normalize into cartesian coords where 0,0 is at the center of a unit circle
        const y = 2 * (((wheelSize.getValue() / 2) - relativeY) / wheelSize.getValue());
        const x = 2 * (relativeX / wheelSize.getValue() - 0.5);

        let angle = Math.atan2(y, x) ;

        angle += Math.PI / 2;

        if (angle < 0) {
            angle += 2 * Math.PI;
        }

        let angleDegrees = angle * 180 / Math.PI;
        console.log("angledegre: "+angleDegrees);
        console.log("start: "+angleDegrees);
        if (angleDegrees < 0) {
            angleDegrees += 360;
        }
        duration.setValue(duration.getValue() + startangle -angleDegrees);

        console.log("diff: "+(startangle - angleDegrees));
        startangle = angleDegrees;




    };

    //Updates the duration of the meeting on mousewheel
    const updateWheelRotation = event => {
        const delta = event.deltaY;
        duration.setValue(duration.getValue() - delta);
    };

    const updateStart  = (event)=> {
        const distance = event.clientX  - startDragPointX;
        const newStart = start.getValue() + distance;
        start.setValue(newStart);
        startDragPointX = event.clientX ;
    };

    return {
        getDuration: duration.getValue,
        setDuration: duration.setValue,
        onDurationChanged: duration.onChange,
        getStart: start.getValue,
        setStart: start.setValue,
        onStartChanged: start.onChange,
        getWidth: wheelSize.getValue,
        getTicks: ticks.getValue,
        getTimeLineLength: timeLineLength.getValue,
        getStartHour: startHour.getValue,
        getWheelsize: wheelSize.getValue,
        setWheelsize: wheelSize.setValue,
        setStartPositions: setStartPositions,
        updateDuration: updateDuration,
        updateWheelRotation: updateWheelRotation,
        updateStart : updateStart,
    };
}


