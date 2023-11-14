
const DetailView = (timeInputController, detailElement) => {
    const render = () => {
        detailElement.innerText = "Duration: " + timeInputController.getDuration() +"   ---   Start: "+ timeInputController.getStart();

    }

    timeInputController.onDurationChanged(render);
    timeInputController.onStartChanged(render);
};

