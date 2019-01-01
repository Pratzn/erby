    $(function(){

        var setRenderImg = ""
        // var imgArr = ['bg-01.jpg', 'bg-02.jpg', 'bg-03.jpg', 'bg-04.jpg', 'bg-05.jpg', 'bg-06.jpg', 'bg-07.jpg']
        var imgArr = [/*[[${request.imageString}]]*/];

        imgArr.forEach(function(element) {
            var url = 'http://localhost/assets/'
            console.log(element);
            setRenderImg += `<img src="${url}${element}" alt="${element}" class="setImg rounded-circle">`
        });

        $('.renderImg').html(setRenderImg)

        $('.setImg').on('click', function() {
            var url = $(this).attr('src')
            var urlImg = `${url}?${Math.random()}`
            var txt = `<image class='setBackground' xlink:href="${urlImg}" x="-150" y="0" height="512px" preserveAspectRatio="xMaxYMid meet"/>`
            console.log("click backgraound", txt)
            $('pattern#changeBackground').html(txt)
        })

    });

    $('.btn-success').on('click', function(){
        var urlImg = `http://localhost/assets/bg-01.jpg?${Math.random()}`
        var txt = `<image class='setBackground' xlink:href="${urlImg}" x="0" y="0" height="650px" />`
        console.log("click backgraound", txt)
        $('pattern#changeBackground').html(txt)
    })

    $('.img-show').load("http://localhost/assets/image.svg", function (){
        console.log("successed")
    });

    $('pattern#changeBackground').on('click', function() {
        console.log("background")
    })