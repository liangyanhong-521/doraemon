const code = `
/*首先准备背景*/
body {
    background: #93b8ca;
}
/*接下来，画哆啦A梦外面的蓝脸*/
.out-face{
    margin: 100px auto;
    margin-left:100px;
    width: 420px;
    height: 400px;
    position: relative;
    background-color: #1e90ff;;
    border: 2px solid black;
    border-radius: 47% 47% 45% 45%;
}
/*画哆啦A梦里面的白脸*/
.inside-face{
    width: 360px;
    height: 300px;
    position: absolute;
    bottom: 0px; 
    left: 30px;
    background-color: white;
    border: 2px solid black;
    border-radius: 50% 50% 45% 45%;
}
/*接下来，画哆啦A梦的眼睛*/
.eyes{
    position: absolute;
    top: -45px;
    left: 78px;
    width: 180px;
    height: 110px;
}
.left-eye,.right-eye{
    width: 90px;
    height: 110px;
    background-color: white;
    border: 2px solid black;
    border-radius: 45% 45% 45% 45%;
}
.left-eye{
    float: left;
}
.right-eye{
    float: right;
}
/*画哆啦A梦的眼睛里面的瞳孔*/
.inner-left-eye,.inner-right-eye{
    position: absolute;
    top: 60px;
    width: 20px;
    height: 20px;
    background-color: black;
    border-radius: 50%;
}
.inner-left-eye{
    left: 61px;
}
.inner-right-eye{
    right: 60px;
}
/*接下来，画哆啦A梦的鼻子*/
.nose{
   position: absolute;
   width: 50px; 
   height: 50px;
   top: 49px;
   left: 143px;
   background-color: red;
   border: 2px solid black;
   border-radius: 50%;
}
/*画哆啦A梦的鼻子里面的部分*/
.inner-nose{
    position: absolute;
    top: 13px;
    left: 28px;
    width: 15px;
    height: 15px;
    background-color: white;
    border-radius: 50%;
    box-shadow: 0px 0px 2px 2px rgba(255, 255, 255, 0.4);
}
/*接下来，画哆啦A梦胡须的中间部分*/
.middle-beard{
    position: absolute;
    top: 100px;
    left: 168px;
    width: 2px;
    height: 128px;
    background-color: #000;
}
.left-beard,.right-beard{
    position: absolute;
    top: 60px;
    width: 180px;
    height: 180px;
}
.left-beard{
    left: 0;
}
.right-beard{
    right: 0;
}
.left-whisker,.right-whisker{
    position: absolute;
    left: 28px;
    width: 110px;
    height: 1.3px;
}
/*画哆啦A梦的左边第一根胡须*/
.left-whisker:nth-child(1){
    position: absolute;
    top: 35px;
    /* -webkit-transform: rotate(20deg); */
    transform: rotate(20deg);
    background-color: #000;
}
/*画哆啦A梦的右边第一根胡须*/
.right-whisker:nth-child(1){
    position: absolute;
    top: 35px;
    /* -webkit-transform: rotate(-20deg); */
    transform: rotate(-20deg);
    background-color: #000;
}
/*画哆啦A梦的左边第二根胡须*/
.left-whisker:nth-child(2){
    position: absolute;
    top: 72px;
    background-color: #000;  
}
/*画哆啦A梦的右边第二根胡须*/
.right-whisker:nth-child(2){
    position: absolute;
    top: 72px;
    background-color: #000;
}
/*画哆啦A梦的左边第三根胡须*/
.left-whisker:nth-child(3){
    position: absolute;
    top: 105px;
    -webkit-transform: rotate(-20deg);
    transform: rotate(-20deg);
    background-color: #000;
}
/*画哆啦A梦的右边第三根胡须*/
.right-whisker:nth-child(3){
    position: absolute;
    top: 105px;
    -webkit-transform: rotate(20deg);
    transform: rotate(20deg);
    background-color: #000;
}
/*接下来，画哆啦A梦的左边嘴巴啦*/
.mouse{
    position: absolute;
    top: 30px;
    left: 60px;
    height: 200px;
    width: 240px;
    border-bottom: 2px solid #000;
    border-radius: 0 0 45% 45%;
}
/*接下来，画哆啦A梦的衣领啦*/
.collar{
    position: absolute;
    bottom: -20px;
    left: 47px;
    width: 320px;
    height: 50px;
    background-color: #ff0404;
    border: 2px solid #000;
    border-radius: 30px;
}
/*接下来，画哆啦A梦的铃铛啦*/
.bell{
    position: absolute;
    bottom: -45px;
    left: 175px;
    width: 55px;
    height: 55px;
    background-color: #ffff00;
    border: 2px solid #000;
    border-radius: 50% 50%;
}
/*画哆啦A梦铃铛的第一部分/
.bell-01 {
    position: absolute;
    top: 12px;
    left: 2px;
    width: 50px;
    height: 2px;
    background-color: #000;
}
/*画哆啦A梦铃铛的第二部分/
.bell-02 {
    position: absolute;
    top: 18px;
    left: 0px;
    width: 53px;
    height: 1.5px;
    background-color: #000;
}
/*画哆啦A梦铃铛的第三部分/
.bell-03 {
    position: absolute;
    top: 25px;
    left: 18px;
    width: 15px;
    height: 10px;
    background-color: #000;
    border-radius: 50%;
}
/*画哆啦A梦铃铛的第四部分/
.bell-04 {
    position: absolute;
    top: 30px;
    left: 25px;
    width: 1.5px;
    height: 20px;
    background-color: #000;
} 
/*好啦，哆啦A梦画完啦，一只可爱的哆啦A梦送给你啦/
`

export default code
