
const DetailView = (timeInputController, detailElement) => {
    const render = () => {
        detailElement.innerText = "Duration: " + Math.round(timeInputController.getDuration())
            +"   ---   Start: "+ timeInputController.getStart();
    };

    timeInputController.onDurationChanged(render);
    timeInputController.onStartChanged(render);
};

