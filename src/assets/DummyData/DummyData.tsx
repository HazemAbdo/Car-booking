export const getDummyPercentageCardsData = (isDarkMode: boolean) => {
  return [
    {
      percentage: 45,
      cardColor: "#A162F7",
      textColor: "#FFFFFF",
      circleColor: "#FFFFFF",
      title: "Energy",
      iconName: "Energy",
    },
    {
      percentage: 60,
      cardColor: isDarkMode ? "#242731" : "#FFFFFF",
      textColor: isDarkMode ? "#FFFFFF" : "#000000",
      circleColor: "#FF7E86",
      title: "Range",
      iconName: "Range",
      kilometers: 156,
    },
    {
      percentage: 9,
      cardColor: isDarkMode ? "#242731" : "#FFFFFF",
      textColor: isDarkMode ? "#FFFFFF" : "#000000",
      circleColor: "#A162F7",
      title: "Break Fluid",
      iconName: "BreakFluid",
    },
    {
      percentage: 25,
      cardColor: isDarkMode ? "#242731" : "#FFFFFF",
      textColor: isDarkMode ? "#FFFFFF" : "#000000",
      circleColor: "#F6CC0D",
      title: "Tier Water",
      iconName: "Tierwater",
    },
  ];
};
export const getDummyRecommendCardsData = () => {
  return [
    {
      carName: "BMW 3 Series",
      numberKilometers: 156,
      pricePerHour: "20",
    },
    {
      carName: "BMW 3 Series",
      numberKilometers: 200,
      pricePerHour: "20",
      backgroundColor: "#E3ECF1",
    },
    {
      carName: "BMW 3 Series",
      numberKilometers: 304,
      pricePerHour: "20",
      backgroundColor: "#F4E3E5",
    },
    {
      carName: "BMW 3 Series",
      numberKilometers: 500,
      pricePerHour: "20",
      backgroundColor: "#E1DFA4",
    },
  ];
};
export const getDummyCarsData = () => {
  return [
    {
      carName: "Porshe 718 Cayman S",
      carType: "Coupe",
      carImage: "src\\assets\\Images\\car1.png",
      passengerNumber: 4,
      manual: true,
      price: "400$",
    },
    {
      carName: "Porshe 718 Cayman S",
      carType: "Coupe",
      carImage: "src\\assets\\Images\\car1.png",
      passengerNumber: 4,
      manual: true,
      price: "400$",
    },
    {
      carName: "Porshe 718 Cayman S",
      carType: "Coupe",
      carImage: "src\\assets\\Images\\car2.png",
      passengerNumber: 4,
      manual: true,
      price: "400$",
    },
    {
      carName: "Porshe 718 Cayman S",
      carType: "Coupe",
      carImage: "src\\assets\\Images\\car3.png",
      passengerNumber: 4,
      manual: true,
      price: "400$",
    },
    {
      carName: "Porshe 718 Cayman S",
      carType: "Coupe",
      carImage: "src\\assets\\Images\\car1.png",
      passengerNumber: 4,
      manual: true,
      price: "400$",
    },
    {
      carName: "Porshe 718 Cayman S",
      carType: "Coupe",
      carImage: "src\\assets\\Images\\car2.png",
      passengerNumber: 4,
      manual: true,
      price: "400$",
    },
    {
      carName: "Porshe 718 Cayman S",
      carType: "Coupe",
      carImage: "src\\assets\\Images\\car3.png",
      passengerNumber: 4,
      manual: true,
      price: "400$",
    },
    {
      carName: "Porshe 718 Cayman S",
      carType: "Coupe",
      carImage: "src\\assets\\Images\\car2.png",
      passengerNumber: 4,
      manual: true,
      price: "400$",
    },
  ];
};
export const getDummyGraphsDataOfRange = (range: string) => {
  if (range === "Day") {
    return {
      labels: ["1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM"],
      dummyData: [5, 6, 7, 3, 4, 5, 6],
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
    };
  } else if (range === "Week") {
    return {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      dummyData: [15, 10, 30, 20, 25, 30, 35],
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderColor: "rgba(54, 162, 235, 1)",
    };
  }
  return {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    dummyData: [50, 60, 150, 80, 40, 100, 110],
    backgroundColor: "rgba(255, 206, 86, 0.2)",
    borderColor: "rgba(255, 206, 86, 1)",
  };
};
