// requires ../observable/observable.js

const TimeInputController = () => {

    const duration = Observable(30);
    const start = Observable(0);

    const calculateEnd = () => start.getValue() + duration.getValue();

    let startDragPointX = 0;
    let startDragPointY = 0;

    const setStartPositions = mousePosition => {
        startDragPointX = mousePosition.clientX;
        startDragPointY = mousePosition.clientY;
    }

    const updateDuration = event => {
        let rotationstate = new ObenLinks();
        if (event.clientX < 100 && event.clientY < 100) rotationstate = new ObenLinks()
        if (event.clientX > 100 && event.clientY < 100) rotationstate = new ObenRechts()
        if (event.clientX > 100 && event.clientY > 100) rotationstate = new UntenRechts()
        if (event.clientX < 100 && event.clientY > 100) rotationstate = new UntenLinks()
        const newRotation = rotationstate.rotate(event, startDragPointX, startDragPointY);

        startDragPointY = event.clientY;
        startDragPointX = event.clientX;

        duration.setValue(duration.getValue() + newRotation);
    };
    const updateWheelRotation = event => {
        const delta = event.deltaY;
        duration.setValue(duration.getValue() - delta);
};


    return {
        getDuration:              duration.getValue,
        setDuration:              duration.setValue,
        onDurationChanged:        duration.onChange,
        getStart:                 start.getValue,
        setStart:                 start.setValue,
        onStartChanged:           start.onChange,
        calculateEnd:             calculateEnd,
        setStartPositions:        setStartPositions,
        updateDuration:     updateDuration,
        updateWheelRotation:        updateWheelRotation,
};}


