var bigPhoto = function(){
		//选择监听click事件的父div
		var _this = this;
		this.el = '.piexl',
		this.width = '100px',
		this.height = '100px',
		this.div_style = 'position:fixed;left:0;top:0;width:100%;height:100%;background: #333 ;text-align: center;display: table;vertical-align: middle',
		this.on_click = function(){
			_this_el = _this.el;
			piexl_thumbnail_a = _this_el+' .piexl-thumbnail a';
			$(piexl_thumbnail_a).each(function(n){
				$(piexl_thumbnail_a).eq(n).click(function(){
					var src = $(piexl_thumbnail_a).eq(n).attr('picurl');
					var div = '<div class="pic_div" style="'+_this.div_style+'"><div style="display: table-cell;vertical-align: middle;" ><img style="max-width:800px; max-height:450px" src="'+src+'"/></div></div>';
					_this.show(div);
				});
			});
			
		},
		this.show = function(div){
			$('body').append(div);
			_this.close_pic();
		},
		this.close_pic = function(){

			$('.pic_div').click(function(){
			$('.pic_div').hide();
			})
		}
	};