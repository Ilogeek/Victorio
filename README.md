#Victorio

Better interface for default Apache directory theme ([Watch it live](http://hzilliox.fr/projets))

>Did you know that Victorio was a warrior and chief of the Warm Springs band of the Tchihendeh division of the central Apaches ?
>Me neither but [Wikipedia](http://en.wikipedia.org/wiki/Victorio) does.

##Features

Victorio aims to enhance the visual aspect of your Apache directory theme by adding some CSS and JS to your page.

* CSS to style your page.
* Search bar to find specific element.
* Responsive.
* Custom icons depending on file's MIME.
* Custom header and footer message.

##Installation

* Download Victorio
* Copy and paste `.victorio` folder and `.htaccess` file to the folder you want to customize
* Open and edit `.htaccess` file. Replace all occurences of */PATH_FROM_ROOT_TO* by the path from root to the folder where you paste `.victorio` and `.htaccess`
(Eg : if you're in the folder : `http://example.com/listing` replace `/PATH_FROM_ROOT_TO` by `/listing`)
* Feel free to take a look at the other options available in the `.htaccess` file and edit `.victorio/header.html`, `.victorio/footer.html` and `.victorio/style.css` at your convenience
* Voilà


##Apparence

If you want to change the Victorio theme, go in `.victorio` folder and edit :

* `header.html`
* `footer.html`
* `style.css`

Adding / modifying icons by opening the `.htaccess` file and editing the list `AddIcon`


##Credits

Inspiration from [Adam Whitcroft](http://adamwhitcroft.com) and [Lars Jung](http://larsjung.de), Icons from [Fatcow](http://www.fatcow.com/free-icons).