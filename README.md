# :cloud: *Big Data course - Final project*

![Inner-Banner](https://user-images.githubusercontent.com/66558110/138529732-71124200-bb75-47f0-a6a9-52cc2c306204.jpg)

-----------------------------------------------------------------------------------------------------------
## :pencil: *Authors of this project:*
| *Dor Getter  -  GitHub: https://github.com/DorGetter* | *Rotem Halbreich  -  GitHub: https://github.com/RotemHalbreich* |
------------------------------------------------------|----------------------------------------------------
-----------------------------------------------------------------------------------------------------------
## :question: *About the project:*
### *In this project we've created a system which simulates shipment services. This system keeps track on packages shipped from around the world, from the moment of their diparture to the country and until they arrive to the logistic center of the shipment company.*


*__SHIPMENT SIMULATOR:__  will simulate scanning packages before they're sent to the country, and will notify their departure via message. When a package is sent, it will be stored in the Redis database service as cache. To simulate arrival of the package, the Shipment Simulator will generate a random QRCode for each package and store it in Firebase cloud storage.*

*__HOT-LINE:__  The Redis will get updated with every change of the packages' quantity and we will display the data from Redis in the Dashboard, including statistics such as number of packages per country district, charts and graphs of packages' size distribution per district and kind of tax billing distribution per district.*

*__COLD-LINE:__  The packages' information will also be stored in MongoDB database service as history of all shipments. We'll use the data from MongoDB to generate a unique CSV file which holds only the information about the packages' items, the CSV file will be extorted to BigML service in order to generate an associations model based on Apriori algorithm for frequent item set mining and association rule learning over relational databases, this model will get us prediction of support and confidence for every item.*

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
  *Service:* | *Logo:*
------------------------------------------------------|----------------------------------------------------
*[Docker](https://www.docker.com/)* | ![rsz_docker](https://user-images.githubusercontent.com/66558110/138525534-5b80cfff-9cc8-49d8-91ee-56dad30554ac.png)
*[Redis](https://redis.io/)* | ![rsz_1redis](https://user-images.githubusercontent.com/66558110/138525323-e48deafc-5d80-44cb-881c-543cbb9b4328.png)
*[Firebase](https://firebase.google.com/)* | ![rsz_firebase](https://user-images.githubusercontent.com/66558110/138526112-1f4f9d97-cc27-4cfa-ae9a-748839022443.png)
*[MongoDB](https://www.mongodb.com/)* | ![rsz_mongo](https://user-images.githubusercontent.com/66558110/138526141-b3b75e15-ca4c-4a79-b6eb-c76c935b98d8.png)
*[BigML](https://bigml.com/)* | ![rsz_bigml](https://user-images.githubusercontent.com/66558110/138526204-8149be8b-c540-4a35-b475-b0b94d32e375.png)
*[Node.js](https://nodejs.org/en/)* | ![rsz_nodejs](https://user-images.githubusercontent.com/66558110/138526220-82e94b3d-72c3-47fc-a698-2d31bfc8cb85.png)
*[QRCode](https://en.wikipedia.org/wiki/QR_code)* | ![rsz_qrcode](https://user-images.githubusercontent.com/66558110/138526484-f97cda37-1b6c-47b3-9850-ea254c390728.png)

# :octocat: *Enjoy, and please share!* :smile:
