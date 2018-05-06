<template>
<div>
        <main1></main1>
        <ft></ft>
</div>
</template>

<script type="text/javascript">
    import '../../css/details.css'
    import main1 from './main/main.vue'
    import ft from './footer/footer.vue'
    export default{
        components:{
            main1,
            ft,
        },
        mounted(){
            //轮播图
            let slider = document.getElementById('slider');
            let ul = slider.children[0];

            // 复制第一张图片到最后
            ul.querySelector('img').onload = function(){
                ul.appendChild(ul.children[0].cloneNode(true));
            }

            // 图片的数量
            let len = ul.children.length;

            // 索引值
            let index = 0;

            // 显示分页
            let page = document.createElement('div');
            let num = document.querySelector('.J_swipe_page')
            page.className = 'page';
            for(let i=1;i<len;i++){
                let span = document.createElement('span');
                // idx = i;
                span.innerText = i;
                // num.innerText = span.innerText;
                if(i===1){
                    span.classList.add('active');
                }

                // 把页码写入page
                page.appendChild(span);
            }

            // 把page写入slider
            slider.appendChild(page);
            page.style.display = "none";


            // 获取图片的宽度
            /*let imgWidth;
            ul.querySelector('img').onload = function(){
                imgWidth = this.offsetWidth;
                ul.style.width = imgWidth*len +'px';
                
            }*/
            let liWidth;
            liWidth=ul.children[0].offsetWidth;
            ul.style.width=liWidth*len+"px";

            // 2）水平轮播效果
            let timer = setInterval(autoPlay,3000);
            // 移入移出
            slider.onmouseenter = ()=>{
                clearInterval(timer);
            }

            slider.onmouseleave = ()=>{
                timer = setInterval(autoPlay,3000);
            }
            function autoPlay(){
                index++;
                show();
            }

            function show(){
                if(index >= len){//0,1,2,3,4
                    ul.style.left = 0;
                    index = 1;
                }
                num.innerText = index;
                animate(ul,{left:-liWidth*index});

                // 页码高亮
                for(let i=0;i<len-1;i++){//0,1,2,3
                    page.children[i].className = '';
                }
                

                if(index === len - 1){
                    page.children[0].className = 'active';
                }else{
                    page.children[index].className = 'active'

                }
            }   
        }


    }


</script>