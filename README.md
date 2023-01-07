# Vekelz front-end task

# 🏁 Get Started

### Installation

1. **_Clone the repository_**

```sh
git clone https://github.com/HazemAbdo/Vekelz-Task.git Vekelz-Task
```

2. **_Navigate to repository directory_**

```sh
$ cd Vekelz-Task
```

3. **_Install dependencies_**

```sh
$ npm install
```

4. **_Run the Client_**

```sh
$ npm run dev
```

# Design Decisions
* I decided not to use UI libraries like Bootstrap or material UI to have more flexibility in mocking our Figma design.
* I decided to use chart.js instead of amcharts as the last one only supports react in the old-fashioned class component and I want to make all of my components in the functional style.
* I decided to make SVGs as components not as files so I can add logic and customizations to them.
* I decided to encapsulate all the data in a dummy file in the assets directory then I fetch them and passing them as props so we can easily integrate with real APIs in the future without changing the components code.

# Built With
<div align="center">
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> 
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/>
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> 
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> 
<img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="40" height="40"/>
<img src="https://user-images.githubusercontent.com/59124058/211133880-018f305a-f611-4363-8be6-87dabf2ab8c0.png" width="40" height="40"/>
<img src="https://user-images.githubusercontent.com/59124058/211133825-c23154dd-d99a-4d81-bc27-899989a12131.png" width="40" height="40"/>
<img src="https://user-images.githubusercontent.com/59124058/211134449-da5e36e5-c13e-4629-9a8c-842ec2a099b8.jpg" width="40" height="40"/>
</div>

# Pages
## Booking
![booking](https://user-images.githubusercontent.com/59124058/211134182-38df4e60-7a26-43ba-84a0-b60a52a3be68.png)
![booking-dark](https://user-images.githubusercontent.com/59124058/211134185-af4174cd-9994-420d-ab16-67d12ad89a67.png)
## Dashboard
![dashboard](https://user-images.githubusercontent.com/59124058/211134194-48a4e080-6b3e-4620-9e3d-596a736b1954.png)
![dashboard-dark](https://user-images.githubusercontent.com/59124058/211134197-28638a97-6051-49da-acb8-91fecc25d8bf.png)

# Quick Tour
https://user-images.githubusercontent.com/59124058/211166760-0531f55a-2d48-4354-af33-4690980990d1.mp4

# Testing Coverage
![testCoverage](https://user-images.githubusercontent.com/59124058/211163897-90bcc3ed-52fe-487d-a817-9400e8c1324a.png)

# Done ✓

- [x] Dashboard component
- [x] Booking component
- [x] dark theme
- [x] basic unit testing 

# More optimizations

- [ ] Reach 100% testing coverage
- [ ] Reach 100% accessibility 
- [ ] Reach 100% responsiveness   
  
# Project Structure
```
|───public
└───src
    ├───assets
    │   ├───DummyData
    │   ├───Icons
    │   └───Images
    ├───Components
    │   ├───CarCard
    │   ├───ContinuousGraph
    │   ├───Navbar
    │   ├───PercentageCard
    │   ├───RecommendCard
    │   ├───Sidebar
    │   └───VerticalBarChart
    ├───Contexts
    ├───Pages
    │   ├───Booking
    │   └───Dashboard
    └───__tests__
```
