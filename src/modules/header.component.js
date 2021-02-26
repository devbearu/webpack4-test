import $ from 'jquery'

$('<h1 />')
	.text('Hello World from jQuery')
	.css({
		textAlign: 'center',
		color: 'blue'
	})
	.appendTo($('header'))

