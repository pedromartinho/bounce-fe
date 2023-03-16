# Solution for the Bounce fullstack challenge

## 📜 Context 

The objective of this project is to create a seamless and straightforward checkout experience that meets [user expectations](https://www.figma.com/file/OcHovHR2QBveB3Q0j1ogkc/Bounce-FullStack-Challenge?node-id=1-3604). To achieve this goal, the project is divided into two distinct repositories - one for the front-end (bounce-fe) and the other for the back-end (bounce-be).

The checkout flow involves two interactions between the front-end and the back-end. Upon loading the page, a request is made to a dummy endpoint on the back-end to retrieve store details, which includes a random store name and bag unit price. Upon submitting an order, a request is made to the back-end with a 50% probability of encountering an error. The front-end will display a retry message in case of an error or a success page if the transaction is successful.

For the front-end, React.js with Typescript is chosen as it is a robust framework for building user interfaces. Since I'm more familiar with JavaScript frameworks, this is the preferred choice.

⚠️ To run the project successfully, it is essential to clone the bounce-fe repository and follow the setup instructions.

## 🏗️ Initial set-up

First things first, make sure you have docker installed on your machine. If you do, run the following command to build docker image:

```
make build
```

Once you've done that, you're ready to get the project up and running! Here are the steps you need to follow:

```
make local-run
```

After that, you should have the project running http://localhost:3000 🚀

If you want to run the tests or the linter, run the commands:

```
make test
make linter
```

Here are the final experience you should see.

### Fill the form ✍️


<img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDM4MmUzMjRjODMxMWFlNmMzZDljZGFkMzUzNTU0NDE4YmEwODhmZiZjdD1n/fmXO9khl3h7tZdjzqE/giphy.gif" width="800" />

### Submit form ✅

<img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGI1YjEyNGM4ZDdjOTUyMmY3NTRkNTlhZmYzMWQ4MDNlYjhkYmE0OSZjdD1n/FzJjXW4tj3YjWuFWQi/giphy.gif" width="800" />

## 💭 Structure and approach

The objective of this project was to create a well-structured and organized codebase that is both readable and maintainable.
I've also decided to add a Dockerfile and makefile to ensure that the project can be easily set up while making sure the dev environment is the same.

Here's a brief overview of the various folders and their respective responsibilities:

* **Containers:** This folder contains all the containers with corresponding styling files utilized in the primary page.

* **Services:** This folder is responsible for housing the business logic, which in this case, is the communication with the bounce API.

* **Pages:** The application pages are located within this folder.

* **\_\_tests\_\_:** This folder includes unit tests for the containers. Although I intended to add tests for the services as well, some misconfiguration errors prevented me from doing so. Nevertheless, these services should be thoroughly tested.

I welcome any feedback or questions you may have and look forward to discussing the project with you. Thank you for your attention to this project.
