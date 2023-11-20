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
    document.getElementsByClassName("video-stream")[0].playbackRate = speed;
}
