
const DetailView = (timeInputController, detailElement) => {
    const render = () => {
        detailElement.innerText = "Duration: " + Math.round(timeInputController.getDuration())
            +"   ---   Start: "+ timeInputController.getStart()/20;

    }

    timeInputController.onDurationChanged(render);
    timeInputController.onStartChanged(render);
};

