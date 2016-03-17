var Kylin = {}
Kylin.Preview=function(){
	var $ = function(id){return document.getElementById(id)};
	
	var init = function(id,imgId){
		this.inputElement = $(id)
		this.imgElement = $(imgId)
		this.bind()
	}
	init.prototype={
		handleFiles:function(el,imgEl){
			var fileList = this.files
			if(imgEl.filters && typeof(imgEl.filters.item) === 'string'){
				imgEl.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=image);"+imgEl.currentStyle.filter
				el.select()
				var path = document.selection.createRangeCollection()[0].htmlText
				imgEl.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = path
			}else{
				imgEl.src = window.URL.createObjectURL(fileList[0])	
			}
		},
		bind:function(){
			var that = this
			this.inputElement.addEventListener("change", function(){
				that.handleFiles.call(this,that.inputElement,that.imgElement)
			}, false)
		}
	}
	return init
}();