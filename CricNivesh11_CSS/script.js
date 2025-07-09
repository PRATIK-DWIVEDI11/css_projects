
      // Tab switching functionality
      function showTab(tabName) {
        // Hide all tab contents
        const tabContents = document.querySelectorAll(".tab-content");
        tabContents.forEach((tab) => {
          tab.classList.remove("active");
        });

        // Remove active class from all nav tabs
        const navTabs = document.querySelectorAll(".nav-tab");
        navTabs.forEach((tab) => {
          tab.classList.remove("active");
        });

        // Show selected tab content
        document.getElementById(tabName).classList.add("active");

        // Add active class to clicked nav tab
        event.target.classList.add("active");
      }

      // Auction sub-tab switching
      function showAuctionTab(tabName) {
        // Hide all auction tab contents
        const auctionTabs = document.querySelectorAll(".auction-tab-content");
        auctionTabs.forEach((tab) => {
          tab.style.display = "none";
        });

        // Remove active class from all auction tab triggers
        const auctionTriggers = document.querySelectorAll(".tab-trigger");
        auctionTriggers.forEach((trigger) => {
          trigger.classList.remove("active");
        });

        // Show selected auction tab content
        document.getElementById(tabName + "-tab").style.display = "block";

        // Add active class to clicked trigger
        event.target.classList.add("active");
      }

      // Profile sub-tab switching
      function showProfileTab(tabName) {
        // Hide all profile tab contents
        const profileTabs = document.querySelectorAll(".profile-tab-content");
        profileTabs.forEach((tab) => {
          tab.style.display = "none";
        });

        // Remove active class from all profile tab triggers
        const profileTriggers = document.querySelectorAll(".tab-trigger");
        profileTriggers.forEach((trigger) => {
          trigger.classList.remove("active");
        });

        // Show selected profile tab content
        document.getElementById(tabName + "-tab").style.display = "block";

        // Add active class to clicked trigger
        event.target.classList.add("active");
      }
    