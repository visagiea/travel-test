import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';

var mobileMenu = new MobileMenu();
//var revealOnScroll = new RevealOnScroll();
new RevealOnScroll($('.feature-item'), "85%");
new RevealOnScroll($('.testimonial'), "60%");



/*var $ = require('jquery');
//Person = require('./modules/Person');
import Person from './modules/Person';

class Adult extends Person {
	payTaxes() {
		console.log(this.name + " now owes $0 in taxes");
	}
}


var john = new Person("John Doe", "blue");
john.greet();

var jane = new Adult("Jane Smith", "orange");
jane.greet();
jane.payTaxes();*/