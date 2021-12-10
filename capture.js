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
        $('#SSS').on("click",function(){
             function wholePage()
                        {
                                html2canvas(document.body).then(function(canvas){
                                                                var img = canvas.toDataURL('image/png');
                                                                var pdf = new jspdf('p','mm',[300,800]);
                                                                var width = pdf.internal.pageSize.width;
                                                                var height = pdf.internal.pageSize.height;

                                                                pdf.addImage(img, 'png', 0,0,width,height);
                                                                pdf.save("DashBoard.pdf");
                                                                });
                                                        return false;
                        }
                wholePage();
                alert("DONE!!");
                        });
});