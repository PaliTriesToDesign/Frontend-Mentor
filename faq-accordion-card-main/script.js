document.querySelectorAll('.accordion__question').forEach((item) => {
    item.addEventListener('click', (e) => {

        // Open accordion item
        if (!item.classList.contains('open')) {
            console.log('Toggle accordion button');
            // Remove 'collapse', add 'collapsing' class to '.accordion__ collapse' (sibling)
            item.nextElementSibling.classList = 'accordion__collapse collapsing';

            // After x amount of time, remove 'collapsing' class and add 'collapse open' class
            setTimeout(() => {
                console.log('Open accordion content');
                item.nextElementSibling.classList = 'accordion__collapse open';
            }, 300);
        }
        else {
            console.log('Toggle accordion button');
            item.nextElementSibling.classList = 'accordion__collapse collapsing';

            // Add-remove 'collapse' class to '.accordion__collapse' (sibling).
            setTimeout(() => {
                console.log('Close accordion content');
                item.nextElementSibling.classList = 'accordion__collapse collapse';
            }, 300);
        }

        
        

        item.classList.toggle('open');
    });
});