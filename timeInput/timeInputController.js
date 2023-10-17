// requires ../observable/observable.js

const TimeInputController = () => {

    const duration = Observable(0);
    const start = Observable(0);

    const calculateEnd = () => start.getValue() + duration.getValue();


    return {
        getDuration:              duration.getValue,
        setDuration:              duration.setValue,
        onDurationChanged:        duration.onChange,
        getStart:                 start.getValue,
        setStart:                 start.setValue,
        onStartChanged:           start.onChange,
        calculateEnd:            calculateEnd,
    }
};

