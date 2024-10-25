# Leads_campaigns
    1. API Service Development 
        mock_server mimics the CRM which gives dummy Lead and Campaigns data.
    2. Data Stroage and Processing
        For Data Storage I used the Nosql Database know as MongoDb where i stored the Leads and Campaigns Data returned from Mock Server.
    3. Reporting and Alerts:
        Created The ROutes Which Returns Pdf/Csv files of Leads and Campaigns.

## API ENDPOINTS ARE
    1.For Downoloading CSV Files:
        Leads- http://localhost:8000/api/download-csv/leads
        Campaigns - http://localhost:8000/api/download-csv/campaigns
    2.For Downoloading PDF Files:
        Leads- http://localhost:8000/api/download-pdf/leads
        Campaigns - http://localhost:8000/api/download-pdf/campaigns
    3.For Getting and Setting Data from CRM and Saving on MOngoDB:
         Leads- http://localhost:8000/api/leads/save
         Campaigns - http://localhost:8000/api/campaigns/save
        
        
