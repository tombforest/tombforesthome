	var piexl_list_template = { 
		props:['post'],
		template : 
		'<div class="col-lg-3 col-sx-3"><div class="piexl-thumbnail" ><a v-bind:picurl="post.link" v-bind:style="{background:post.bg_url}"></a></div></div>',
	};
	var ba_left = 'url(';
	var ba_right = ')no-repeat center/100%';
	var piexl_vm = new Vue({
		el:'.piexl',
		data:{
			list:[
				{title:'xxx',link:'images/p1.jpg',bg_url:ba_left+'images/p1.jpg'+ba_right}, 
				{title:'xxx',link:'images/p2.png',bg_url:ba_left+'images/p2.png'+ba_right}, 
				{title:'xxx',link:'images/p3.png',bg_url:ba_left+'images/p3.png'+ba_right}, 
				{title:'xxx',link:'images/p4.png',bg_url:ba_left+'images/p4.png'+ba_right}, 
				{title:'xxx',link:'images/p5.png',bg_url:ba_left+'images/p5.png'+ba_right}, 
				{title:'xxx',link:'images/p6.png',bg_url:ba_left+'images/p6.png'+ba_right}, 
				{title:'xxx',link:'images/p7.png',bg_url:ba_left+'images/p7.png'+ba_right}, 
			]},
		methods:{
			showBigPoto(){

			}
		},
		components:{
			'pixel_list_com': piexl_list_template,
		},
	})