// requires ../observable/observable.js
const TimeInputController = () => {
    // Model
    const duration = Observable(200);
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


    //Sets the start positions for dragging - temporary variables
    const setStartPositions = mousePosition => {
        startDragPointX = mousePosition.clientX;
        startDragPointY = mousePosition.clientY;
    };

    //Updates the duration of the meeting on mousemove
    const updateDuration = event => {
        let rotationstate = new ObenLinks();
        console.log("x: "+event.clientX);
        if (event.clientX + wheelSize.getValue()/2 - duration.getValue()/2 - start.getValue() < 100 && event.clientY < 100) rotationstate = new ObenLinks();
        if (event.clientX + wheelSize.getValue()/2 - duration.getValue()/2 - start.getValue()> 100 && event.clientY < 100) rotationstate = new ObenRechts();
        if (event.clientX + wheelSize.getValue()/2 - duration.getValue()/2 - start.getValue() > 100 && event.clientY > 100) rotationstate = new UntenRechts();
        if (event.clientX + wheelSize.getValue()/2 - duration.getValue()/2 - start.getValue()< 100 && event.clientY > 100) rotationstate = new UntenLinks();
        const newRotation = rotationstate.rotate(event, startDragPointX, startDragPointY);
        console.log(rotationstate);

        startDragPointY = event.clientY;
        startDragPointX = event.clientX;

        duration.setValue(duration.getValue() + newRotation);
        start.setValue(start.getValue() - newRotation/2);

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


