// requires ../observable/observable.js
const TimeInputController = () => {
    // Model
    const duration = Observable(60);
    const start = Observable(200);

    //Wheel
    const wheelSize = Observable(200);

    //Timeline
    const ticks = Observable(5);
    const timeLineLength = Observable(750);
    const startHour = Observable(6);

    // Temporary variables for dragging
    let startDragPointX = 0;
    let startDragPointY = 0;


    //Sets the start positions for dragging - temporary variables
    const setStartPositions = mousePosition => {
        startDragPointX = mousePosition.clientX;
        startDragPointY = mousePosition.clientY;
    };

    let startangle = 0;
    //Updates the duration of the meeting on mousemove
    const updateDuration = (relativeX, relativeY) => {
        const y = 2 * (((wheelSize.getValue() / 2) - relativeY) / wheelSize.getValue());
        const x = 2 * (relativeX / wheelSize.getValue() - 0.5);

        let angle = Math.atan2(y, x) ;

        angle -= Math.PI / 2;

        if (angle < 0) {
            angle += 2 * Math.PI;
        }

        let angleDegrees = angle * 180 / Math.PI;
        angleDegrees = 360 - angleDegrees;
        
        let diff = (angleDegrees - startangle);
        if (diff < -300) {
            startangle += -359;
            diff = 0;
        }
        if (diff > 300) {
            startangle += 359;
            diff = 0;
        }
        console.log("differenzen:" + relativeX, relativeY);
        duration.setValue((duration.getValue()*6 + diff)/6);
        start.setValue((start.getValue()*6 - diff/2)/6);
        startangle += diff;



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


