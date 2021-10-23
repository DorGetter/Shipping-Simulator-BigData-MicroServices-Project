# :cloud: *Big Data course - Final project*

![Inner-Banner](https://user-images.githubusercontent.com/66558110/138529732-71124200-bb75-47f0-a6a9-52cc2c306204.jpg)

-----------------------------------------------------------------------------------------------------------
## :pencil: *Authors of this project:*
| *Dor Getter  -  GitHub: https://github.com/DorGetter* | *Rotem Halbreich  -  GitHub: https://github.com/RotemHalbreich* |
------------------------------------------------------|----------------------------------------------------
-----------------------------------------------------------------------------------------------------------
## :question: *About the project:*
### *In this project we've created a system which simulates shipment services. This system keeps track on packages shipped from around the world, from the moment of their diparture to the country and until they arrive to the logistic center of the shipment company.*


*__SHIPMENT SIMULATOR:__  will simulate scanning of packages before they're sent to the country, and will notify their departure via message. When a package is sent, it will be stored in the Redis database service as cache. To simulate arrival of the package, the Shipment Simulator will generate a random QRCode for each package and store it in Firebase cloud storage.*

*__HOT-LINE:__  The Redis will get updated with every change of the packages' quantity and we'll display the data from Redis in the Dashboard, including statistics such as number of packages per country district, charts and graphs of packages' size distribution per district and type of tax billing distribution per district.*

*__COLD-LINE:__  The packages' information will also be stored in MongoDB database service as history of all shipments. We'll use the data from MongoDB to generate a unique CSV file which holds only the information about the packages' items, the CSV file will be exported to BigML service in order to generate an Associations Model based on Apriori algorithm for frequent item set mining and association rule learning over relational databases, this model will get us prediction of support and confidence for every item.*

## :bar_chart: *The project's diagram:*
![Shipping Simulator](https://user-images.githubusercontent.com/66558110/137342555-ea34c2d2-28d6-458f-94e8-5d74a2ec39e8.png)

## :white_check_mark: *Initialize the project:*
*Clone the project using the Command Line by typing the command:*

`git clone https://github.com/RotemHalbreich/Big-Data-Final-Project.git`
* *Run* `npm install` *in the Command Line*
* *Install Redis image from [Redis site](https://hub.docker.com/_/redis)*
* *Run Redis image on Docker using port 6379 - [Guidance ](https://www.youtube.com/watch?v=YhXeiB_1-uk&list=PL9nWRykSBSFjj3mulDfc6Al4v8ORNKzaM&index=2&ab_channel=BeABetterDev)*

## :joystick: *Shipment Simulator:*

* *Run* `node ./simulator.js` *in the Command Line*
* *Search this URL: http://localhost:6062/packges/5 to send over packages to Firebase & Redis services* 
  > *(you may choose any number instead of 5 as the number of packages you wish to send over)*

## :hot_face: *Hot-line:*
* *Run* `node ./hot_receiver.js` *in the Command Line*
* *Search this URL: http://localhost:3000 to load the `Dashboard`*

## :cold_face: *Cold-line:*
* *Run* `node ./cold_receiver.js` *in the Command Line*
* *Search this URL: http://localhost:3000 to load the `Analytical Views`*

## :thought_balloon: *Example for associations model extracted from BigML service:*
![Associations Table](https://user-images.githubusercontent.com/66558110/138527098-8dcc1c17-8e75-46dd-8cef-308a3f4a0561.png)

## :leaves: *Example for stored package data in MongoDB database service:*
![MongoDB Example](https://user-images.githubusercontent.com/66558110/138555235-afd5e8ec-2295-40e5-bf55-e8ed57335f3d.png)

## :books: *Services used in this project:*
  *Service:* | *Logo:* | *Explanation:*
------------------------------------------------------|------------------------------------------------------|------------------------------------------------------
*__[Docker](https://www.docker.com/)__* | ![rsz_docker](https://user-images.githubusercontent.com/66558110/138525534-5b80cfff-9cc8-49d8-91ee-56dad30554ac.png) | *Docker is a set of platform as a service (PaaS) products that use OS-level virtualization to deliver software in packages called containers.*
*__[Redis](https://redis.io/)__* | ![rsz_1redis](https://user-images.githubusercontent.com/66558110/138525323-e48deafc-5d80-44cb-881c-543cbb9b4328.png) | *Redis (Remote Dictionary Server) is an in-memory data structure store, used as a distributed, in-memory key–value database, cache and message broker, with optional durability.*
*__[Firebase](https://firebase.google.com/)__* | ![rsz_firebase](https://user-images.githubusercontent.com/66558110/138526112-1f4f9d97-cc27-4cfa-ae9a-748839022443.png) | *Firebase is a platform developed by Google for creating mobile and web applications. Firebase has launched Cloud Firestore, a real-time document database as the successor product to the original Firebase Realtime Database.*
*__[MongoDB](https://www.mongodb.com/)__* | ![rsz_mongo](https://user-images.githubusercontent.com/66558110/138526141-b3b75e15-ca4c-4a79-b6eb-c76c935b98d8.png) | *MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.*
*__[BigML](https://bigml.com/)__* | ![rsz_bigml](https://user-images.githubusercontent.com/66558110/138526204-8149be8b-c540-4a35-b475-b0b94d32e375.png) | *BigML offers a highly scalable, cloud-based Machine Learning service that is easy to use, seamless to integrate, and instantly actionable. Now everyone can implement data-driven decision making in their applications. BigML works with small and big data.*
*__[Node.js](https://nodejs.org/en/)__* | ![rsz_nodejs](https://user-images.githubusercontent.com/66558110/138526220-82e94b3d-72c3-47fc-a698-2d31bfc8cb85.png) | *Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser.*
*__[QRCode](https://en.wikipedia.org/wiki/QR_code)__* | ![rsz_qrcode](https://user-images.githubusercontent.com/66558110/138526484-f97cda37-1b6c-47b3-9850-ea254c390728.png) | *A QRCode (Quick Response code) is a type of matrix barcode (or two-dimensional barcode). A barcode is a machine-readable optical label that contains information about the item to which it is attached.*

# :octocat: *Enjoy, and please share!* :smile:
