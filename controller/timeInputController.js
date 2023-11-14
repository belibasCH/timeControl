// requires ../observable/observable.js
const TimeInputController = () => {

    const width = Observable(750);
    const ticks = Observable(5);
    const timeLineLength = Observable(750);
    const startHour = Observable(6);
    // Model
    const duration = Observable(400);
    const start = Observable(0);
    const wheelsize = Observable(200);
    const wheelposition = Observable({x: 0, y: 0});

    // Temporary variables for dragging
    let startDragPointX = 0;
    let startDragPointY = 0;


    //Calculates the end of the meeting
    const calculateEnd = () => start.getValue() + duration.getValue();

    //Sets the start positions for dragging - temporary variables
    const setStartPositions = mousePosition => {
        startDragPointX = mousePosition.clientX;
        startDragPointY = mousePosition.clientY;
    };

    //Updates the duration of the meeting on mousemove
    const updateDuration = event => {
        let rotationstate = new ObenLinks();
        console.log("x: "+event.clientX);
        if (event.clientX < 100 && event.clientY < 100) rotationstate = new ObenLinks()
        if (event.clientX > 100 && event.clientY < 100) rotationstate = new ObenRechts()
        if (event.clientX > 100 && event.clientY > 100) rotationstate = new UntenRechts()
        if (event.clientX < 100 && event.clientY > 100) rotationstate = new UntenLinks()
        const newRotation = rotationstate.rotate(event, startDragPointX, startDragPointY);

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
        const distance = event.clientX - startDragPointX;
        const newStart = start.getValue() + distance;
        start.setValue(newStart);
        startDragPointX = event.clientX;
    };

    return {
        getDuration: duration.getValue,
        setDuration: duration.setValue,
        onDurationChanged: duration.onChange,
        getStart: start.getValue,
        setStart: start.setValue,
        onStartChanged: start.onChange,
        getWidth: width.getValue,
        getTicks: ticks.getValue,
        getTimeLineLength: timeLineLength.getValue,
        getStartHour: startHour.getValue,
        getWheelsize: wheelsize.getValue,
        setWheelsize: wheelsize.setValue,
        calculateEnd: calculateEnd,
        setStartPositions: setStartPositions,
        updateDuration: updateDuration,
        updateWheelRotation: updateWheelRotation,
        updateStart : updateStart,
    };
}


