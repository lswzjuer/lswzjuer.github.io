(function () {
  var navToggle = document.querySelector("[data-nav-toggle]");
  var navMenu = document.querySelector("[data-nav-menu]");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      var isOpen = navMenu.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navMenu.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  var publicationsSection = document.getElementById("publications");
  var publicationToggle = document.querySelector("[data-publication-toggle]");
  var fullPublicationList = document.getElementById("full-publication-list");

  if (publicationToggle && fullPublicationList && publicationsSection) {
    publicationToggle.addEventListener("click", function () {
      var isOpen = publicationToggle.getAttribute("aria-expanded") === "true";
      var nextOpen = !isOpen;

      publicationToggle.setAttribute("aria-expanded", String(nextOpen));
      publicationToggle.innerHTML = nextOpen
        ? 'Hide Full Publication List <span aria-hidden="true">↑</span>'
        : 'View Full Publication List <span aria-hidden="true">→</span>';

      if (nextOpen) {
        fullPublicationList.removeAttribute("hidden");
        publicationsSection.classList.add("is-expanded");
      } else {
        fullPublicationList.setAttribute("hidden", "");
        publicationsSection.classList.remove("is-expanded");
      }
    });
  }

  var sectionIndicators = Array.prototype.slice.call(
    document.querySelectorAll("[data-section-indicator]")
  );

  if ("IntersectionObserver" in window && sectionIndicators.length) {
    var indicatorMap = sectionIndicators.reduce(function (map, item) {
      map[item.getAttribute("data-section-indicator")] = item;
      return map;
    }, {});

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) {
            return;
          }

          sectionIndicators.forEach(function (item) {
            item.classList.remove("is-active");
          });

          var active = indicatorMap[entry.target.id];
          if (active) {
            active.classList.add("is-active");
          }
        });
      },
      { rootMargin: "-120px 0px -70% 0px", threshold: 0.01 }
    );

    Object.keys(indicatorMap).forEach(function (id) {
      var section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });
  }
})();
