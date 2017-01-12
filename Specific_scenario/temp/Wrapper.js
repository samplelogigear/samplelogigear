enyo.kind({
	name : "Wrapper",
	absoluteMode : false,
	components : [ {
		name : "frame",
		tag : 'div',
		components : [ {
			name : "screen",
			tag : 'iframe',
			scrolling : "no",
			src : url
		} ]
	} ]
});