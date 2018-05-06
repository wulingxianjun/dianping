// 配置参数
require.config({
    // baseUrl:'lib',

    // 配置别名（虚拟路径）
    paths:{
        // 格式：别名:真实路径（基于baseUrl）
        jquery:'../js/jquery-3.2.1',
        common:'../js/common',
        dl_zc:'../js/dl_zc'
    },

    // 配置依赖
    shim:{
        dl_zc:['jquery','common']
    }
})