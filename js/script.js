$(document).ready(function(){
	$('.header__burger').click(function(event){
		$('.header__burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

"use strict"

const menuLinksWrappers = document.querySelectorAll('[data-line-effect]');

menuLinksWrappers.length ? menuEffect() : null;

function menuEffect() {

	menuLinksWrappers.forEach(menuLinksWrapper => {
		const menuLinks = menuLinksWrapper.querySelectorAll('a');
		const effectSpeed = menuLinksWrapper.dataset.lineEffect ? menuLinksWrapper.dataset.lineEffect : 200;
		menuLinks.length ? menuEffectItem(menuLinks, effectSpeed) : null;
	});

	function menuEffectItem(menuLinks, effectSpeed) {
		
		const effectTransition = `transition: transform ${effectSpeed}ms ease;`;
		const effectHover = `transform: translate3d(0px, 0%, 0px);`;
		const effectTop = `transform: translate3d(0px, -100%, 0px);`;
		const effectBottom = `transform: translate3d(0px, 100%, 0px);`;
			
		menuLinks.forEach(menuLink => {
			menuLink.insertAdjacentHTML('beforeend', `
				<span style="transform: translate3d(0px, 100%, 0px);" class="hover">
					<span style="transform: translate3d(0px, -100%, 0px);" class="hover_text">${menuLink.textContent}</span>
				</span>
			`);
			menuLink.onmouseenter = menuLink.onmouseleave = menuLinkActions;
		});

		
		function menuLinkActions(e) {

			const menuLink = e.target;
			const menuLinkItem = menuLink.querySelector('.hover');
			const menuLinkText = menuLink.querySelector('.hover__text');

			
			const menuLinkHeight = menuLink.offsetHeight / 2;
			
			const menuLinkPos = e.pageY - (menuLink.getBoundingClientRect().top + scrollY);

			
			if(e.type === 'mouseenter') {
				
				menuLinkItem.style.cssText = menuLinkPos > menuLinkHeight ? effectBottom : effectTop;
				menuLinkText.style.cssText = menuLinkPos > menuLinkHeight ? effectTop : effectBottom;

				setTimeout(() => {
					menuLinkItem.style.cssText = effectHover + effectTransition;
					menuLinkText.style.cssText = effectHover + effectTransition;
				}, 5);
			}

			if(e.type === 'mouseleave') {
				
				menuLinkItem.style.cssText = menuLinkPos > menuLinkHeight ? effectBottom + effectTransition : effectTop + effectTransition;
				menuLinkText.style.cssText = menuLinkPos > menuLinkHeight ? effectTop + effectTransition : effectBottom + effectTransition;
			}
		}
	}
}
