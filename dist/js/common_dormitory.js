
var warp = new Vue({
    data :{
        baseUrl :'http://39.106.176.55:9001'
        //baseUrl :'http://localhost:9001'
    },
    methods:{
        getBaseUrl:function(){
            //设置请求的头信息
            var token = sessionStorage.getItem("usertoken");
            if (token) {
                axios.defaults.headers.common['Authorization'] = token;
                
            }else {
                window.parent.location.href = '/login.html';
            }      
            axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
           return this.baseUrl;
        },getLoginBaseUrl:function(){
            
           return this.baseUrl;
        }

    }
});
  