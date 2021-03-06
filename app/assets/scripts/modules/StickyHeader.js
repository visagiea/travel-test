import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
	constructor() {
		this.lazyImages = $('.lazyload');
		this.siteHeader = $(".site-header");
		this.headerTriggerElement = $(".large-hero__title");
		this.pageSection = $('.page-section');
		this.headerLinks = $('.primary-nav a');
		this.createHeaderWaypoint();
		this.createPageSectionWaypoints();
		this.addSmoothScrolling();
		this.refreshWaypoints();
	}

	refreshWaypoints() {
		this.lazyImages.on('load', function() {
			Waypoint.refreshAll();
		});
	}

	createHeaderWaypoint() {
		var that = this;
		new Waypoint({
			element: this.headerTriggerElement[0],
			handler: function(direction) {
				if(direction == "down") {
					that.siteHeader.addClass("site-header--dark");
				} else {
					that.siteHeader.removeClass("site-header--dark");
				}
			}
		});
	}

	addSmoothScrolling() {
		this.headerLinks.smoothScroll();
	}

	createPageSectionWaypoints() {
		var that = this;
		this.pageSection.each(function(){
			var currentPageSection = this;

			new Waypoint({
				element: currentPageSection,
				offset: "18%",
				handler: function(direction) {
					if(direction == "down") {
						var matchingHeaderLink = currentPageSection.getAttribute('data-matching-link');
						that.headerLinks.removeClass('is-current-link');
						$(matchingHeaderLink).addClass('is-current-link');
					}
					
				}
			});

			new Waypoint({
				element: currentPageSection,
				offset: "-40%%",
				handler: function(direction) {
					if(direction == "up") {
						var matchingHeaderLink = currentPageSection.getAttribute('data-matching-link');
						that.headerLinks.removeClass('is-current-link');
						$(matchingHeaderLink).addClass('is-current-link');
					}
					
				}
			});
		});
	}
}

export default StickyHeader;