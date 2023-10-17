
const DetailView = (timeInputController, detailElement) => {

    const render = () =>
        console.log(timeInputController.getDuration());
        detailElement.innerText = "" + timeInputController.getDuration().toString();

    timeInputController.onStartChanged(render);
    timeInputController.onDurationChanged(render);
};

