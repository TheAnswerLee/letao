$(function () {
    //console.log(1);
    var keyword =getParamsByUrl(location.href,'keyword');
    console.log(keyword);
    $.ajax({
        url:'/product/queryProduct',
        type:'get',
        data:{
            page:1,
            pageSize:6,
            proName:keyword
        },
        success:function (response) {
            var html=template('searchTpl',response);
            $('#search-box').html(html)
        }
    })
});
function getParamsByUrl(url,name) {
    var params=url.substr(url.indexOf('?')+1);
    var param=params.split('&');
    for (var i = 0; i < param.length; i++) {
        //console.log(param[i]);
        var current=param[i].split('=');
        if(current[0]==name){
            return current[1]
        }

    }
    return null
}