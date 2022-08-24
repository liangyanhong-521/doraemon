import code from "./code.js"

$(
    // 需要做两件事情，第一件事情是按钮的获取并且做出相应的反应，
    // 第二件事情是需要把哆啦A梦的css手动添加进去
    function () {
        let id = 0
        let n = 0
        let delayTime = 50
        $(".actions").on("click","button",function(e){
            let button = e.currentTarget//获取当前的操作元素
            // $(this).addClass(‘class’).siblings(‘class’).removeClass(‘class’)：
            // 作用是 给当前元素添加’class’类并查找同胞元素再去除同胞元素的’class’类
            $(button).addClass("active").siblings().removeClass("active")
            let speed =  $(button).attr("data-speed")
            switch(speed){
                case 'pause':
                    clearTimeout(id)
                    break
                case 'play':
                    writeCode(code)
                    break
                case 'slow':
                    delayTime = 100
                    break
                case 'normal':
                    delayTime = 50
                    break
                case 'fast':
                    delayTime = 20
                    break
                case 'change':
                    $(location).attr('href', 'https://liangyanhong-521.github.io/pikachu/');
                    break
            }
        })

        function writeCode(code){
            let codeText = document.querySelector("#code")
            let codeStyle = document.querySelector("#codeStyle")
            id = setTimeout(function run() {
                n += 1
                codeText.innerHTML = code.substring(0, n)
                codeStyle.innerHTML = code.substring(0, n)
                // 解释该语句的作用
                codeText.scrollTop = codeText.scrollHeight
                if (n < code.length) {
                  id = setTimeout(run, delayTime)
                }
              }, delayTime)
        }
        writeCode(code)

    }
)