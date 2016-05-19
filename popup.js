document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('randomChooser');
  checkPageButton.addEventListener('click', function() {
    chrome.tabs.getCurrent(function (tab) {
		chrome.tabs.query({currentWindow: true, active: true}, function (tab) {
			friends_url = "http://putlocker.is/watch-friends-tvshow-season-"
			friends_url += Math.floor(Math.random() * 10)
			friends_url += "-episode-" + Math.floor(Math.random() * 24) + "-online-free-putlocker.html"
			chrome.tabs.update(tab.id, {url: friends_url});
		});
	});
  }, false);
}, false);