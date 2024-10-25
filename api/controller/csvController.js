import { Parser } from "json2csv"
export const Leadscsv = async(req,res)=>{
    try {
       const leads=await fetch('http://localhost:3000/leads',{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
            }
        }) 
        const data=await leads.json();
         // Set headers for CSV file download
         res.setHeader('Content-Type', 'text/csv');
         res.setHeader('Content-Disposition', 'attachment; filename=leads.csv');
 
         const parser = new Parser();
         const csv = parser.parse(data);
 
         // Send the CSV data in the response
         res.status(200).send(csv);
     } catch (error) {
         console.log('Error generating CSV:', error.message);
         res.status(500).send('Failed to generate CSV');
     }
}

export const Campaignscsv = async (req, res) => {
    try {
        const campaigns = await fetch('http://localhost:3000/campaigns', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const data = await campaigns.json();

        // Set headers for CSV file download
        res.setHeader('Content-Type', 'text/csv');
        res.setHeader('Content-Disposition', 'attachment; filename=leads.csv');

        const parser = new Parser();
        const csv = parser.parse(data);

        // Send the CSV data in the response
        res.status(200).send(csv);
    } catch (error) {
        console.log('Error generating CSV:', error.message);
        res.status(500).send('Failed to generate CSV');
    }
};