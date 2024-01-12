import { gotoBlock } from '../utils/_gotoBlock';

// todo: remove else if from gulp

export function pageNavigation() {
    document.addEventListener('click', pageNavigationAction);
    function pageNavigationAction(e) {
        if (e.type === 'click') {
            const targetElement = e.target;
            if (targetElement.closest('[data-goto]')) {
                const gotoLink = targetElement.closest('[data-goto]');
                const gotoLinkSelector = gotoLink.dataset.goto ? gotoLink.dataset.goto : '';
                const noHeader = !!gotoLink.hasAttribute('data-goto-header'); 
                const gotoSpeed = gotoLink.dataset.gotoSpeed ? gotoLink.dataset.gotoSpeed : '500';
                gotoBlock(gotoLinkSelector, noHeader, gotoSpeed);
                e.preventDefault();
            }
        }
    }
}