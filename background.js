chrome.commands.onCommand.addListener((command) => {
    if (command.startsWith("speed")) {
        var speed = parseInt(command.substring(5,6));
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                func: changeSpeed,
                args: [speed],
            });
        });
    }
});

function changeSpeed(speed) {
    console.log(`setting video speed to ${speed}`);

    const videoStreamElements = document.getElementsByClassName("video-stream");
    if (videoStreamElements.length > 0) {
        videoStreamElements[0].playbackRate = speed;
        return;
    }

    const videoElements = document.querySelectorAll("video");
    if (videoElements.length > 0) {
        videoElements.forEach(el => el.playbackRate = speed);
    }
}
