document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('nav_toggle');
    const items = document.getElementById('nav_items');

    toggle.onclick = function() {
        if (items.classList.contains('open')) {
            items.classList.remove('open');
        } else {
            items.classList.add('open');
        }

        if (toggle.classList.contains('close')) {
            toggle.classList.remove('close');
        } else {
            toggle.classList.add('close');
        }
    };
});
