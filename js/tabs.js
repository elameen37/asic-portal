function openTab(event, tabName) {
  // Get all tab buttons and tab content elements
  var tabBtns = document.getElementsByClassName("tab-btn");
  var tabs = document.getElementsByClassName("tab");

  // Deactivate all tab buttons and tab content elements
  for (var i = 0; i < tabBtns.length; i++) {
    tabBtns[i].className = tabBtns[i].className.replace(" active", "");
  }
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none";
  }

  // Activate the clicked tab button and tab content element
  event.currentTarget.className += " active";
  document.getElementById(tabName).style.display = "block";
}
