-------------------
README
-------------------
Members:

Andreas Kjerstad: andrkje@stud.ntnu.no
Marius Lundbø: mariulun@stud.ntnu.no
Stian Dysthe: stiandy@stud.ntnu.no

-------------------
Page overview with technique overview:

index.html : CSS, Javascript
about.html : CSS
andreas.html, marius.html, stian.html : CSS, Javascript
contact.html : Form Controls, CSS, PHP
after.html : CSS
error.html: CSS
policy.html : CSS, XML
faq.html : CSS, XML
links.html : CSS
references.html : CSS
work.html : CSS
--------------------------------------

style_core.css (main style for all pages)
style_home.css (contains styling for the index page making up the four center blocks) 
style_blog.css (a blog style for some pages)
faq.css (for styling xml-files formatted lika a typical FAQ)
style_contact.css (styling the contact form)

Generally for all pages (header and footer):
	CSS:
		Used to make a footer and header with color and highlighted links when hovered over, as well as making the search function expand when in use. We have also used css to make a drop down menu at the “about” link for easy access to about’s sub pages.
	Javascript:
		The footer contains javascript from facebook and twitter for connecting the buttons with social media. We also have a comment script that runs if a Internet Explorer version less than 9 runs, then it creates the html5 elements we have used (and they get styled in style_core.css to display as blocks).

index.html
	CSS:
		style_core.css
		style_home
	Javascript:
		Inside the <canvas> element we used javascript to rotate the internet browser making up a animation by calculating the x and y position of each of the browser images, and then clear and rewrite all elements on their new positions. There is also some javascript generated from twitter for showing the twitter feed. jQuery is also used on the animated slideshow.


about.html:
	CSS:
		style_core.css
		style_blog.css
	


andreas.html, marius.html, stian.html:
	CSS:
		style_core.css
		style_blog.css
	Javascript:
		We have used Javascript and jQuery for inserting the processed text from the javascript file and appending it to the right place on the site after all content has loaded.

contact.html:
 	CSS:
		style_core.css
		style_blog.css
		style_contact.css
JavaScript (form validation): 
		form_validation.js is used for client side validation of the email form. Checking if  the length of inputs are greater than 0.
PHP (form validation):
		email.php is used to send an email using NTNUs email service. Before the email is sent, server side validation is performed. If the validation is not successful, the user is sent to error.html. If the email is successfully sent, the user is sent to after.html.
	
after.html:
	CSS: 
		style_core.css
		style_blog.css
		
error.html:
	CSS: 
		style_core.css
		style_blog.css

policy.html:
	CSS:
		style_core.css
		faq.css
	XML:
		Policy contains an iframe with a style XML file. We chose to display it using xml because it would be easy to add more content to the file without having to alter the html-page. 
		
faq.html:
	CSS:
		style_core.css
		faq.css
	XML:
		Policy contains an iframe with a style XML file. We chose to display it using xml because it would be easy to add more content to the file without having to alter the html-page.

links.html:
	CSS:
		style_core.css
		style_blog.css
	
references.html:
	CSS:
		style_core.css
		style_blog.css
	Javascript:
		We have used Javascript and jQuery for inserting the processed text from the javascript file and appending it to the right place on the site after all content has loaded.
		
work.html:
	CSS:
		style_blog.css (Used to position the video and audio clip, as well as dropping a shadow around the video.)
		style_core.css 
