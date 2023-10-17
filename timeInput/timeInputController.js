// requires ../observable/observable.js

const TimeInputController = () => {

    const duration = Observable(0);
    const start = Observable(0);

    const calculateEnd = () => start.getValue() + duration.getValue();

    let startDragPointX = 0;
    let startDragPointY = 0;

    const setStartPositions = mousePosition => {
        console.log(mousePosition);
        startDragPointX = mousePosition.offsetX;
        startDragPointY = mousePosition.offsetY;
    }

    const updateDuration = event => {
        let rotationstate = new ObenLinks();
        if (event.offsetX > 100 && event.offsetY < 100) rotationstate = new ObenLinks()
        if (event.offsetX > 100 && event.offsetY > 100) rotationstate = new UntenLinks()
        if (event.offsetX < 100 && event.offsetY > 100) rotationstate = new UntenRechts()
        if (event.offsetX < 100 && event.offsetY < 100) rotationstate = new ObenRechts()

        duration.setValue(duration + rotationstate.rotate(event, startDragPointX, startDragPointY ));

    }


    return {
        getDuration:              duration.getValue,
        setDuration:              duration.setValue,
        onDurationChanged:        duration.onChange,
        getStart:                 start.getValue,
        setStart:                 start.setValue,
        onStartChanged:           start.onChange,
        calculateEnd:            calculateEnd,
        setStartPositions:         setStartPositions,
        updateDuration:           updateDuration,
    }
};

