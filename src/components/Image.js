import React from 'react'
import '../css/Image.css'
import saver from '../images/saver.jpg'
import {Button} from 'reactstrap'
import html2canvas from 'html2canvas';
import domtoimage from 'dom-to-image';
export default function Image() {
    const toggleDownload=()=>{
        // window.scrollTo(0,0);
        // html2canvas(document.getElementById("capture")).then(function(canvas) 
        // {
        //     document.body.appendChild(canvas);
        //     console.log("Image Url :",canvas.toDataURL("image/jpeg",0.9));
        // });
        // const saver=document.getElementById("capture");
        // domtoimage.toPng(saver).then(function(dataURL)
        // {
        //     const img=new Image();
        //     img.src=dataURL;
        //     document.body.appendChild(img);
        // })
        domtoimage.toPng(document.getElementById('capture'), { quality: 0.95 })
                .then(function (dataUrl) {
                const link = document.createElement('a');
                link.download = 'Saver.png';
                link.href = dataUrl;
                link.click();
            });                
    }
    return (
        <div style={{backgroundColor: 'black',height: '625px'}}>
            <div className="container image_block" id="capture">
                <p className="img_text">
                    Image Saver
                </p>
                <img  src={saver} alt="" />
            </div>
            <Button variant="contained" color="danger" outline onClick={toggleDownload}>Save Image</Button>
        </div>
    )
}
