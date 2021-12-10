require.config({
        paths:{
                html2canvas:'https://unpkg.com/html2canvas@1.3.3/dist/html2canvas',
                jspdf:'https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.3/jspdf.min'

        }
});


require([
        'jquery',
        'html2canvas',
        'jspdf',
    'splunkjs/mvc/simplexml/ready!'

], function($,html2canvas,jspdf){
        $('#download').on("click",function(){
             function captureAnddownload()
                        {
                                html2canvas(document.body).then(function(canvas){
                                var img = canvas.toDataURL('image/png');
                                var pdf = new jspdf('p','mm',[document.body.scrollHeight,window.screen.width]);
                                var width = pdf.internal.pageSize.width;
                                var height = pdf.internal.pageSize.height;

                                pdf.addImage(img, 'png', 0,0,width,height);
                                pdf.save("DashBoard.pdf");
                                });
                           return false;
                        }
             captureAnddownload();
            });
});
