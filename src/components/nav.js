var nav_list_com_template = { 
		props:['post'],
		template : '<li class="nav-item active"><a class="nav-link" v-bind:href="post.link" >{{ post.title }}</a></li>'
	};
	var vm = new Vue({
		el : ".navbar-nav",
		data : {
			posts:[
			{title:'tombforest',link:'http://www.tombforest.xyz'}, 
			{title:'像素画',link:'http://www.tombforest.xyz'},
			{title:'摄影',link:'http://www.tombforest.xyz'},
			{title:'界面',link:'http://www.tombforest.xyz'},
		]},
		components:{
			'nav_list_com': nav_list_com_template,
		},
	});