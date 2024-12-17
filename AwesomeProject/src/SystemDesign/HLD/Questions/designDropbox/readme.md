# functional requirements
 - Upload file 
 - Download file
 - Automatically sync file in all devices

 # Non functional requirements:

 - scalability
 - Availibility >> Consistency
 - Low latency (high performance)
 - support large files (50GB)
    - Resumable functionality

 # Entities :
   - Files
   - File (or other) metadata
   - Users

# API :
  - POST /file
     body - file & file metadata
  - GET /files/:fileId  -> file & fileMeatadata
  - GET /changes?since:{timeStamp} -> []fileIds

# High level desing :
  (to satisfy all 3 functional requirements)

