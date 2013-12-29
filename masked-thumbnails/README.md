#Masked Thumbnails

I liked the masking and hover effects on [http://www.julienrenvoye.com](http://www.julienrenvoye.com) and wanted to recreate it for practice. I'm a sucker for any shape that's not a square or a circle.

This miniproject presents a list of thumbnails as a grid, each masked by png shapes which expand when you hover over them so that the active thumbnail appears to enlarge slightly. Nothing earth shattering. If you notice on the original site, all of the items other than the one hovered over get grayed out. ~~That will be tomorrow's project.~~

**Added the grayed out effect as the project for 12/29/2013.**

		To gray out the other elements:
			-On hover, grab the `src` attribute of the `img` tag inside the element being hovered over.
			-For each thumbnail container on the page, compare its `img` tag's `src` attribute against the one being hovered.
			-If they are not equal, add css opacity of .5
			-On on mouse leave, reset opacity for all elements back to 1.

 
That site has a bounty of other animation goodies on page transitions and such, so I may be stealing a few more projects from that font of inspiration.

Incidentally, this is the first project created on a Mac. Just picked up my shiny new Macbook Pro 15" yesterday and spent quite a few hours last night setting it all up for dev.

~~5~~ 6 days down, ~~95~~ 94 to go.