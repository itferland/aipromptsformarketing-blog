document.addEventListener('DOMContentLoaded', () => {
    // Toggle mobile menu
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const desktopNav = document.querySelector('.desktop-nav');

    if (menuToggle && desktopNav) {
        menuToggle.addEventListener('click', () => {
            desktopNav.classList.toggle('open');
        });
    }

    // Close mobile menu on link click
    document.querySelectorAll('.desktop-nav a').forEach(link => {
        link.addEventListener('click', () => {
            document.querySelector('.desktop-nav').classList.remove('open');
        });
    });

    // Copy prompt to clipboard
    document.querySelectorAll('.copy-prompt').forEach(btn => {
        btn.addEventListener('click', async () => {
            const prompt = btn.getAttribute('data-prompt');
            try {
                await navigator.clipboard.writeText(prompt);
                btn.classList.add('copied');
                setTimeout(() => btn.classList.remove('copied'), 2000);
            } catch (err) {
                console.error('Failed to copy!', err);
            }
        });
    });
});