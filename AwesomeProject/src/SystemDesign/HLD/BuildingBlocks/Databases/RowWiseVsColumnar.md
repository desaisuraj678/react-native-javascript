 - In a row-oriented DBMS, the data would be stored like this:
0411,Moriarty,Angela,52.35;0412,Richards,Jason,325.82;0413,Diamond,Samantha,25.50.

 - In a columnar DBMS, the data would be stored like this:
0411,0412,0413;Moriarty,Richards,Diamond;Angela,Jason,Samantha;52.35,325.82,25.50.
[text](https://www.techtarget.com/searchdatamanagement/definition/columnar-database)


- row-oriented formats are more commonly used in Online transaction processing (OLTP) and column-oriented formats are more commonly used in Online analytical processing (OLAP).