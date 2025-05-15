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

    // Function to create skeleton cards
    function createSkeletonCards(num) {
        const skeletonCards = [];
        for (let i = 0; i < num; i++) {
            const card = document.createElement('div');
            card.classList.add('prompt-card', 'skeleton');
            skeletonCards.push(card);
        }
        return skeletonCards;
    }

    // Function to replace skeleton cards with actual data
    function replaceWithData(skeletonCards, data) {
      //Replace Skeleton cards with actual data cards here.
    }

    // TODO: Implement skeleton loaders
    // 1. Call createSkeletonCards(number_of_cards_to_show) and add them to the prompts-grid
    // 2. Fetch the JSON data
    // 3. Call replaceWithData(skeletonCards, fetched_data)

});