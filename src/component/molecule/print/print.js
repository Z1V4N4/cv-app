import jsPDF from "jspdf";
import React from "react";
import html2canvas from "html2canvas";

class Print extends React.Component{
    generatePDF = () => {
        html2canvas(document.getElementById('main'), {
            useCORS: true,
            allowTaint: true,
            scrollY: -window.scrollY,
          }).then(canvas => {
            const image = canvas.toDataURL('image/jpeg', 2);
            const doc = new jsPDF('p', 'px', 'a4');
            const pageWidth = doc.internal.pageSize.getWidth();
            const pageHeight = doc.internal.pageSize.getHeight();
        
            const widthRatio = pageWidth / canvas.width;
            const heightRatio = pageHeight / canvas.height;
            const ratio = widthRatio > heightRatio ? heightRatio : widthRatio;
        
            const canvasWidth = canvas.width * ratio;
            const canvasHeight = canvas.height * ratio;
        
            doc.addImage(image, 'JPEG', 0, 0, canvasWidth, canvasHeight);
            doc.output('dataurlnewwindow');
          });
    }
    render() {
        return (
            <a onClick={this.generatePDF}>Export File</a>
        )
    }
}

export default Print;