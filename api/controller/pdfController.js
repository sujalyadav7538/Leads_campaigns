import PDFDocument from 'pdfkit';

export const Leadspdf=async(req,res)=>{
    try {
        const leads=await fetch('http://localhost:3000/leads',{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
            }
        })
        const data=await leads.json();
        res.setHeader('Content-Type','application/pdf');
        res.setHeader('Content-Disposition','attachment; filename=leads.pdf');
        const doc=new PDFDocument();
        doc.pipe(res);
        doc.fontSize(40).text('Leads',{align:'center',underline:true});
        data.map((lead,index)=>{
            // doc.moveDown().fontSize(16).text(`${index + 1}:`, { continued: true });
         
    
            doc.moveDown(0.5).fontSize(16).text(`ID: ${lead.id}`);
            doc.moveDown(0.5).fontSize(16).text(`Name: ${lead.name}`);
            doc.moveDown(0.5).fontSize(16).text(`Email: ${lead.email}`);
            doc.moveDown(0.5).fontSize(16).text(`Status: ${lead.status}`);
            doc.moveDown(0.5).fontSize(16).text(`Source: ${lead.source}`);
        })
        doc.end();
        res.status(200);
    } catch (error) {
        res.status(404).json({"err":error.message})
    }
}

export const Campaignpdf=async(req,res)=>{
    try {
        const campaigns=await fetch('http://localhost:3000/campaigns',{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
            }
        })
        const data=await campaigns.json();
        res.setHeader('Content-Type','application/pdf');
        res.setHeader('Content-Disposition','attachment; filename=campaigns.pdf');
        const doc=new PDFDocument();
        doc.pipe(res);
        doc.fontSize(40).text('campaigns',{align:'center',underline:true});
        data.map((campaign,index)=>{
            // doc.moveDown().fontSize(16).text(`${index + 1}:`, { continued: true });
         
    
            doc.moveDown(0.5).fontSize(16).text(`ID: ${campaign.id}`);
            doc.moveDown(0.5).fontSize(16).text(`Name: ${campaign.name}`);
            doc.moveDown(0.5).fontSize(16).text(`Email: ${campaign.email}`);
            doc.moveDown(0.5).fontSize(16).text(`Status: ${campaign.status}`);
            doc.moveDown(0.5).fontSize(16).text(`Source: ${campaign.source}`);
        })
        doc.end();
        res.status(200);
    } catch (error) {
        res.status(404).json({"err":error.message})
    }
}