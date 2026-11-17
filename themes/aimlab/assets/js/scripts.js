(function () {
  'use strict';

  var menuButton = document.getElementById('menu-btn');
  var mobileMenu = document.getElementById('mobile-menu');

  if (menuButton && mobileMenu) {
    var openIcon = menuButton.querySelector('.menu-open-icon');
    var closeIcon = menuButton.querySelector('.menu-close-icon');

    var setMenuState = function (open) {
      mobileMenu.classList.toggle('hidden', !open);
      menuButton.setAttribute('aria-expanded', String(open));
      if (openIcon && closeIcon) {
        openIcon.classList.toggle('hidden', open);
        closeIcon.classList.toggle('hidden', !open);
      }
    };

    menuButton.addEventListener('click', function () {
      setMenuState(mobileMenu.classList.contains('hidden'));
    });

    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        setMenuState(false);
      });
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        setMenuState(false);
      }
    });
  }

  var revealItems = document.querySelectorAll('[data-reveal]');

  if (revealItems.length) {
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      revealItems.forEach(function (item) {
        item.classList.add('is-visible');
      });
    } else {
      var revealObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
      );

      revealItems.forEach(function (item) {
        revealObserver.observe(item);
      });
    }
  }

  var tocLinks = document.querySelectorAll('.toc a[href^="#"]');

  if (tocLinks.length && 'IntersectionObserver' in window) {
    var linkById = {};
    var headings = [];

    tocLinks.forEach(function (link) {
      var id = decodeURIComponent(link.getAttribute('href').slice(1));
      var heading = document.getElementById(id);
      if (heading) {
        linkById[id] = link;
        headings.push(heading);
      }
    });

    var setActive = function (id) {
      tocLinks.forEach(function (link) {
        link.parentElement.classList.remove('is-active');
      });
      if (linkById[id]) {
        linkById[id].parentElement.classList.add('is-active');
      }
    };

    var tocObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '0px 0px -70% 0px', threshold: 0 }
    );

    headings.forEach(function (heading) {
      tocObserver.observe(heading);
    });
  }

  var filterBars = document.querySelectorAll('[data-filter-bar]');

  filterBars.forEach(function (bar) {
    var targetSelector = bar.getAttribute('data-filter-target');
    var target = targetSelector ? document.querySelector(targetSelector) : null;
    if (!target) return;

    var items = target.querySelectorAll('[data-filter-item]');
    var emptyStateSelector = bar.getAttribute('data-filter-empty');
    var emptyState = emptyStateSelector ? document.querySelector(emptyStateSelector) : null;
    var buttons = bar.querySelectorAll('[data-filter]');

    var applyFilter = function (filter) {
      var visibleCount = 0;

      items.forEach(function (item) {
        var categories = item.getAttribute('data-category') || '';
        var visible = filter === 'all' || (' ' + categories + ' ').indexOf(' ' + filter + ' ') !== -1;
        item.hidden = !visible;
        if (visible) visibleCount += 1;
      });

      document.querySelectorAll('[data-filter-group]').forEach(function (group) {
        group.hidden = !group.querySelector('[data-filter-item]:not([hidden])');
      });

      buttons.forEach(function (button) {
        var active = button.getAttribute('data-filter') === filter;
        button.classList.toggle('is-active', active);
        button.setAttribute('aria-pressed', String(active));
      });

      if (emptyState) {
        emptyState.hidden = visibleCount > 0;
      }
    };

    bar.addEventListener('click', function (event) {
      var button = event.target.closest('[data-filter]');
      if (!button || !bar.contains(button)) return;
      applyFilter(button.getAttribute('data-filter'));
    });
  });
})();
