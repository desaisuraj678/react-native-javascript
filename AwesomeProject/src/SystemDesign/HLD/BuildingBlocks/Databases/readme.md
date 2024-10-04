Caching -> Redis
Blob (image,video) -> S3 + CDN
Text search(search product on amazon) -> Elastic search   (search engine)
to build a metrics System like graphana (where lot of metrics are sent) -> Time series databases (openTSDB)
non structured ever increasing data + finite queries > columnar DB (analytics)
structured data + ACID props -> SQL DB (Postgres) (eg, for user information or payment system)
Non structured data + Queries -> Document DB (Mongo DB) (eg. store product information)