// requires ../observable/observable.js
const TimeInputController = () => {
    // Model
    const duration = Observable(200);
    const start = Observable(50);
    const wheelsize = Observable(200);
    const wheelposition = Observable({x: 0, y: 0});

    // Temporary variables for dragging
    let startDragPointX = 0;
    let startDragPointY = 0;

    //Calculates the end of the meeting
    const calculateEnd = () => start.getValue() + duration.getValue();

    //Sets the start positions for draging - temporary variables
    const setStartPositions = mousePosition => {
        startDragPointX = mousePosition.clientX;
        startDragPointY = mousePosition.clientY;
    }

    //Updates the duration of the meeting on mousemove
    const updateDuration = event => {
        let rotationstate = new ObenLinks();
        if (event.clientX < 100 && event.clientY < 100) rotationstate = new ObenLinks();
        if (event.clientX > 100 && event.clientY < 100) rotationstate = new ObenRechts();
        if (event.clientX > 100 && event.clientY > 100) rotationstate = new UntenRechts();
        if (event.clientX < 100 && event.clientY > 100) rotationstate = new UntenLinks();
        const newRotation = rotationstate.rotate(event, startDragPointX, startDragPointY);

        startDragPointY = event.clientY;
        startDragPointX = event.clientX;

        duration.setValue(duration.getValue() + newRotation);
    };

    //Updates the duration of the meeting on mousewheel
    const updateWheelRotation = event => {
        const delta = event.deltaY;
        duration.setValue(duration.getValue() - delta);
    };

    return {
        getDuration: duration.getValue,
        setDuration: duration.setValue,
        onDurationChanged: duration.onChange,
        getStart: start.getValue,
        setStart: start.setValue,
        onStartChanged: start.onChange,
        getWheelsize: wheelsize.getValue,
        setWheelsize: wheelsize.setValue,
        calculateEnd: calculateEnd,
        setStartPositions: setStartPositions,
        updateDuration: updateDuration,
        updateWheelRotation: updateWheelRotation,
    };
}


