import axios from "axios";
import { useState } from "react";

function Statement() {
    const [pdfContent, setPdfContent] = useState('');
    const acc_ID = JSON.parse(localStorage.getItem('userID'));
    
   
    
    async function generateStatement(event) {
        event.preventDefault();
        try {
            console.log(acc_ID)

            await axios.get("http://localhost:8090/api/createStatement?", { responseType: 'arraybuffer', params: { acc_id: acc_ID } })
                .then((response) => {
                    console.log(response.data);
                    const blob = new Blob([response.data], { type: 'application/pdf' });
                    console.log(blob);
                    const url = URL.createObjectURL(blob);
                    console.log(url);
                    setPdfContent(url);
                });

            //navigate('/home')
        }
        catch (err) {
            alert("Statement cannot be generated");
        }
    }
    return (
        <div>
            <button className="btn btn-warning" onClick={generateStatement}>Generate Statement</button>
            {pdfContent && (
                <iframe
                    title="PDF Viewer"
                    src={pdfContent}
                    width="100%"
                    height="500px"
                />
            )}
        </div>
    );
}
export default Statement;