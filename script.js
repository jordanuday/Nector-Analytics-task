document.addEventListener("DOMContentLoaded", function() {
    const addTabBtn = document.querySelector(".add-tab-btn");
    const tabs = document.querySelector(".tabs");
    const contentContainer = document.querySelector(".content-container");
    const tabNameInput = document.getElementById("tab-name-input");
    const urlInput = document.getElementById("url-input");
    const searchBtn = document.querySelector(".search-btn");

    function createTab(tabTitle) {
      const newTab = document.createElement("li");
      newTab.classList.add("tab");
      newTab.textContent = tabTitle;

      const closeBtn = document.createElement("button");
      closeBtn.classList.add("close-btn");
      closeBtn.textContent = "×";
      newTab.appendChild(closeBtn);

      newTab.addEventListener("click", function() {
        const activeTab = document.querySelector(".tab.active");
        const activeIframe = document.querySelector(".iframe.active");
        activeTab.classList.remove("active");
        activeIframe.classList.remove("active");
        newTab.classList.add("active");
        const correspondingIframe = document.querySelector(`.iframe[data-tab-id="${tabTitle}"]`);
        correspondingIframe.classList.add("active");
      });

      closeBtn.addEventListener("click", function(event) {
        event.stopPropagation();
        const tabToRemove = newTab;
        const iframeToRemove = document.querySelector(`.iframe[data-tab-id="${tabTitle}"]`);
        tabs.removeChild(tabToRemove);
        contentContainer.removeChild(iframeToRemove);

        // If there are remaining tabs, activate the last one
        if (tabs.children.length > 0) {
          const lastTab = tabs.children[tabs.children.length - 1];
          lastTab.click();
        }
      });

      return newTab;
    }


    addTabBtn.addEventListener("click", function() {
      const tabTitle = tabNameInput.value.trim();
      if (tabTitle) { // Check if input is not empty
        const newTab = createTab(tabTitle);
        tabs.appendChild(newTab);

        const newIframe = document.createElement("iframe");
        newIframe.classList.add("iframe");
        newIframe.src = "about:blank";
        newIframe.dataset.tabId = tabTitle;
        contentContainer.appendChild(newIframe);

        newIframe.addEventListener("load", function() {
          newIframe.style.display = "block";
        });

        // Set newly added tab as active
        const activeIframe = document.querySelector(".iframe.active");
        if (activeIframe) {
          activeIframe.classList.remove("active");
        }
        newTab.classList.add("active");
      } else {
        alert("Please enter a name for the new tab.");
      }
    });

    searchBtn.addEventListener("click", function() {
      const url = urlInput.value.trim();
      if (url) {
        const activeIframe = document.querySelector(".iframe.active");
        activeIframe.src = url;
      } else {
        alert("Please enter a valid URL.");
      }
    });
});