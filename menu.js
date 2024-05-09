function openSidebar() {
    document.getElementById("sidebar").style.width = "250px";
}

function closeSidebar() {
    document.getElementById("sidebar").style.width = "0";
}
function closeModal() {
    document.getElementById("modal-container").innerHTML = "";
}

document.addEventListener("DOMContentLoaded", function() {
    loadPage("home.html", "page-container");
    loadModuleScript("chatting.js");
});

document.getElementById("contactLink").addEventListener("click", function(event) {
    event.preventDefault();
    loadPage("contact.html", "page-container");
});  
document.getElementById("registerLink").addEventListener("click", function(event) {
    event.preventDefault();
    loadPage("register.html", "modal-container");
    document.getElementById("closeModal").addEventListener("click", closeModal); 

});

document.getElementById("signinLink").addEventListener("click", function(event) {
    event.preventDefault();
    loadPage("signin.html", "modal-container");

    document.getElementById("closeModal").addEventListener("click", closeModal); 
});


document.getElementById("aboutLink").addEventListener("click", function(event) {
    event.preventDefault();
    loadPage("about.html", "page-container");
});
document.getElementById("homeLink").addEventListener("click", function(event) {
    event.preventDefault();
    loadPage("home.html", "page-container");
    loadModuleScript("chatting.js");
    location.reload();

});
document.getElementById("contactLinkMobile").addEventListener("click", function(event) {
    event.preventDefault();
    loadPage("contact.html", "page-container");
    closeSidebar()
});

document.getElementById("homeLinkMobile").addEventListener("click", function(event) {
    event.preventDefault();
    loadPage("home.html", "page-container");
    loadModuleScript("chatting.js");

    closeSidebar()
    location.reload();

});
function loadPage(page, container) {
    // Use AJAX or fetch to load the content of the specified page
    // Example using fetch:
    fetch(page)
        .then(response => response.text())
        .then(html => {
            // Replace the content of the container with the loaded page content
            document.getElementById(container).innerHTML = html;
        })
        .catch(error => console.error("Error loading page:", error));
}


function loadScript(scriptUrl) {
    const script = document.createElement('script');
    script.src = scriptUrl;
    document.head.appendChild(script);
}
function loadModuleScript(scriptUrl) {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = scriptUrl;
    script.defer = true;
    document.head.appendChild(script);
    console.log("test")

}


/* drop down menu script */
function toggleDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }